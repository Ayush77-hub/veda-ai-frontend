import { useCallback } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Background from "@/components/background";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  const [, setLocation] = useLocation();
  
  const handleBack = useCallback(() => {
    setLocation("/");
  }, [setLocation]);
  
  return (
    <Background>
      <div className="min-h-screen flex flex-col p-4 md:p-8">
        <header className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleBack}
            className="text-offwhite hover:text-golden hover:bg-transparent"
          >
            <ArrowLeft size={24} />
          </Button>
          <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-saffron">
            About Veda AI
          </h1>
        </header>
        
        <div className="max-w-4xl mx-auto bg-black/70 p-6 md:p-8 rounded-lg border border-golden/20">
          <section className="mb-10">
            <h2 className="font-cinzel text-2xl text-saffron mb-4">Our Mission</h2>
            <p className="font-poppins text-offwhite mb-4 leading-relaxed">
              Our mission is to preserve, promote, and make accessible the timeless wisdom contained 
              in the ancient Hindu scriptures. By leveraging modern technology, we aim to bridge the gap 
              between these ancient texts and contemporary seekers of knowledge.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="font-cinzel text-2xl text-saffron mb-4">The Collection</h2>
            <p className="font-poppins text-offwhite mb-4 leading-relaxed">
              Our digital library includes a comprehensive collection of Hindu sacred texts, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-offwhite font-poppins">
              <li>
                <span className="text-golden font-semibold">Vedas:</span> The oldest 
                scriptures of Hinduism including Rigveda, Samaveda, Yajurveda, and Atharvaveda.
              </li>
              <li>
                <span className="text-golden font-semibold">Puranas:</span> Ancient 
                texts containing narratives of the history of the universe from creation to destruction.
              </li>
              <li>
                <span className="text-golden font-semibold">Epics:</span> The Ramayana 
                and the Mahabharata, including the Bhagavad Gita.
              </li>
              <li>
                <span className="text-golden font-semibold">Upanishads:</span> Philosophical 
                texts that form the theoretical basis for Hinduism.
              </li>
              <li>
                <span className="text-golden font-semibold">Other Texts:</span> Including 
                various other important religious and philosophical works.
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="font-cinzel text-2xl text-saffron mb-4">How It Works</h2>
            <p className="font-poppins text-offwhite leading-relaxed mb-8">
              Veda AI uses advanced artificial intelligence to help you explore these texts and 
              find answers to your questions. Simply navigate to a text of interest and use the 
              chat interface to ask questions. Our AI will provide insights and information based 
              on the selected text.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-2xl text-saffron mb-6">Our Founders</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 overflow-hidden mb-4">
                  <img src="/src/assets/founder1.jpg" alt="Rudra Shah" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-cinzel text-xl text-golden">Rudra Shah</h3>
                <p className="text-offwhite/80 text-sm">Founder of Veda AI</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 overflow-hidden mb-4">
                  <img src="/src/assets/founder2.jpg" alt="Meet Vermora" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-cinzel text-xl text-golden">Meet Vermora</h3>
                <p className="text-offwhite/80 text-sm">Founder of Veda AI</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 overflow-hidden mb-4">
                  <img src="/src/assets/founder3.jpg" alt="Ayush Ranpariya" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-cinzel text-xl text-golden">Ayush Ranpariya</h3>
                <p className="text-offwhite/80 text-sm">Founder of Veda AI</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Background>
  );
}