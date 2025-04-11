import { useCallback } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import Background from "@/components/background";

export default function CategoriesPage() {
  const [, setLocation] = useLocation();
  
  const handleBack = useCallback(() => {
    setLocation("/");
  }, [setLocation]);
  
  const handleTopicClick = useCallback((categoryId: string, topicId: string) => {
    setLocation(`/chat/${categoryId}/${topicId}`);
  }, [setLocation]);
  
  return (
    <Background>
      <div className="min-h-screen pb-12">
        <header className="pt-6 pb-4 px-6 text-center">
          <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-offwhite mb-1">Veda AI</h1>
          <p className="font-amita text-lg text-golden mb-6">Select a topic to explore</p>
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
