import { useCallback } from "react";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import Background from "@/components/background";
import { Info } from "lucide-react";

export default function CategoriesPage() {
  const [, setLocation] = useLocation();
  
  const handleBack = useCallback(() => {
    setLocation("/");
  }, [setLocation]);
  
  const handleTopicClick = useCallback((categoryId: string, topicId: string) => {
    setLocation(`/chat/${categoryId}/${topicId}`);
  }, [setLocation]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-[rgba(90,10,10,0.95)]">
      <div className="absolute top-4 right-4">
        <Link href="/about">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-golden hover:text-saffron hover:bg-transparent border border-golden/30 flex items-center gap-2"
          >
            <Info size={18} />
            <span>About Us</span>
          </Button>
        </Link>
      </div>
      
      <div className="min-h-screen pb-12">
        <header className="pt-6 pb-4 px-6 text-center">
          <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-offwhite mb-1">Veda AI</h1>
          <div className="inline-block bg-[rgba(0,0,0,0.7)] px-6 py-2 rounded-full border border-golden/20">
            <p className="font-amita text-lg text-golden">Select a topic to explore</p>
          </div>
        </header>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {categories.map((category) => (
              <div key={category.id} className="category-card rounded-lg p-5">
                <h2 className="font-cinzel text-2xl font-semibold text-saffron mb-3">{category.name}</h2>
                <ul className={`space-y-2 ${category.id === 'characters' ? 'grid grid-cols-2' : ''}`}>
                  {category.topics.map((topic) => (
                    <li 
                      key={topic.id} 
                      className="topic-item font-poppins text-offwhite p-2 rounded-md cursor-pointer hover:pl-4 transition-all"
                      onClick={() => handleTopicClick(category.id, topic.id)}
                    >
                      {topic.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button
            onClick={handleBack}
            className="font-poppins bg-transparent border border-golden/50 text-golden px-6 py-2 rounded-full transition-all hover:bg-golden/10"
          >
            Back to Welcome
          </Button>
        </div>
      </div>
    </Background>
  );
}
