import { useCallback, useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import Background from "@/components/background";
import { Info } from "lucide-react";

export default function WelcomePage() {
  const [, setLocation] = useLocation();
  const [harmonicEffect, setHarmonicEffect] = useState(0);
  
  // Simulated harmonic effect that cycles every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setHarmonicEffect(prev => (prev + 1) % 5);
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  const handleStartChat = useCallback(() => {
    // Play a simulated 'om' sound effect (visual feedback only for now)
    document.getElementById('chakra-pulse')?.classList.add('pulse-animation');
    setTimeout(() => {
      setLocation("/categories");
    }, 800);
  }, [setLocation]);
  
  return (
    <Background>
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
      
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Animated chakra-like element */}
        <div id="chakra-pulse" className="absolute opacity-30 pointer-events-none">
          <div className={`w-80 h-80 rounded-full border-4 border-golden/20 absolute 
                         top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                         ${harmonicEffect === 0 ? 'scale-100' : 'scale-110'} 
                         transition-all duration-2000`}>
          </div>
          <div className={`w-64 h-64 rounded-full border-4 border-saffron/20 absolute 
                         top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                         ${harmonicEffect === 1 ? 'scale-100' : 'scale-110'}
                         transition-all duration-2000 delay-200`}>
          </div>
          <div className={`w-48 h-48 rounded-full border-4 border-golden/30 absolute 
                         top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                         ${harmonicEffect === 2 ? 'scale-100' : 'scale-110'}
                         transition-all duration-2000 delay-400`}>
          </div>
        </div>
        
        <div className="text-center fade-in z-10">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-offwhite mb-2 tracking-wider">
            Welcome to <span className={`text-saffron ${harmonicEffect === 4 ? 'animate-pulse' : ''}`}>Veda AI</span>
          </h1>
          <p className="font-amita text-xl md:text-2xl text-offwhite/90 mb-12">
            <span className={`inline-block ${harmonicEffect === 3 ? 'animate-pulse' : ''}`}>
              Ancient wisdom meets modern intelligence
            </span>
          </p>
          
          <Button 
            onClick={handleStartChat}
            className="glow-button font-cinzel text-lg md:text-xl bg-gradient-saffron-golden text-black py-3 px-8 rounded-full font-semibold tracking-wider shadow-lg transition-all duration-300 transform hover:scale-105 relative group"
          >
            <span className="relative z-10 group-hover:animate-[textPulse_1.5s_ease-in-out_infinite]">Chat with Veda AI</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 opacity-0 group-hover:opacity-90 animate-pulse-slow blur-xl"></span>
            <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-golden via-saffron to-golden opacity-0 group-hover:opacity-50 animate-spin-slow blur-xl"></span>
          </Button>
        </div>
        
        <div className="absolute bottom-8 text-center w-full">
          <p className="font-poppins text-offwhite/70 text-sm">
            Explore the ancient wisdom of Hindu scriptures
          </p>
        </div>
      </div>
    </Background>
  );
}
