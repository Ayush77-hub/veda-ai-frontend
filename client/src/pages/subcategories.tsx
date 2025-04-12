import { useCallback } from "react";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import Background from "@/components/background";
import { Info, ArrowLeft } from "lucide-react";

interface Props {
  params: {
    category: string;
  };
}

export default function SubcategoriesPage({ params }: Props) {
  const [, setLocation] = useLocation();
  const category = categories.find(c => c.id === params.category);

  const handleBack = useCallback(() => {
    setLocation("/categories");
  }, [setLocation]);

  const handleTopicClick = useCallback((categoryId: string, topicId: string) => {
    setLocation(`/chat/${categoryId}/${topicId}`);
  }, [setLocation]);

  if (!category) {
    return null;
  }

  return (
    <Background>
      <div className="min-h-screen bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(90,10,10,0.85)]">
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
            <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-offwhite mb-1">{category.name}</h1>
            <div className="inline-block bg-[rgba(0,0,0,0.7)] px-6 py-2 rounded-full border border-golden/20">
              <p className="font-amita text-lg text-golden">Select a topic to explore</p>
            </div>
          </header>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {category.subcategories?.map((subcat) => (
                subcat.topics?.map((topic) => (
                  <div 
                    key={topic.id}
                    className="topic-card rounded-lg p-5 cursor-pointer border border-golden/30 hover:border-golden/60"
                    onClick={() => handleTopicClick(category.id, topic.id)}
                  >
                    <h2 className="font-cinzel text-2xl font-semibold text-saffron mb-3">{topic.name}</h2>
                  </div>
                ))
              )) || category.topics?.map((topic) => (
                <div 
                  key={topic.id}
                  className="topic-card rounded-lg p-5 cursor-pointer border border-golden/30 hover:border-golden/60"
                  onClick={() => handleTopicClick(category.id, topic.id)}
                >
                  <h2 className="font-cinzel text-2xl font-semibold text-saffron mb-3">{topic.name}</h2>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={handleBack}
              className="font-poppins bg-transparent border border-golden/50 text-golden px-6 py-2 rounded-full transition-all hover:bg-golden/10"
            >
              <ArrowLeft className="mr-2" size={18} />
              Back to Categories
            </Button>
          </div>
        </div>
      </div>
    </Background>
  );
}