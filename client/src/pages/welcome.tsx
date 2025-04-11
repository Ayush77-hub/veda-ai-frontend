import { useCallback } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function WelcomePage() {
  const [, setLocation] = useLocation();
  
  const handleStartChat = useCallback(() => {
    setLocation("/categories");
  }, [setLocation]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center fade-in">
        <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-offwhite mb-2 tracking-wider">
          Welcome to <span className="text-saffron">Veda AI</span>
        </h1>
        <p className="font-amita text-xl md:text-2xl text-offwhite/90 mb-12">
          Ancient wisdom meets modern intelligence
        </p>
        
        <Button 
          onClick={handleStartChat}
          className="glow-button font-cinzel text-lg md:text-xl bg-gradient-saffron-golden text-black py-3 px-8 rounded-full font-semibold tracking-wider shadow-lg hover:shadow-golden/50 transition-all duration-300 transform hover:scale-105"
        >
          Chat with Veda AI
        </Button>
      </div>
      
      <div className="absolute bottom-8 text-center w-full">
        <p className="font-poppins text-offwhite/70 text-sm">
          Explore the ancient wisdom of Hindu scriptures
        </p>
      </div>
    </div>
  );
}
