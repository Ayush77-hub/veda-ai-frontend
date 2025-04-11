import { useState, useCallback, useEffect } from "react";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Send } from "lucide-react";
import { categories } from "@/data/categories";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface Props {
  params: {
    category: string;
    topic: string;
  };
}

export default function ChatPage({ params }: Props) {
  const { category: categoryId, topic: topicId } = params;
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  
  // Find the category and topic names
  const category = categories.find(c => c.id === categoryId);
  const topic = category?.topics.find(t => t.id === topicId);
  
  // Generate a unique ID for messages
  const generateId = () => Math.random().toString(36).substring(2, 9);
  
  // Add initial system message
  useEffect(() => {
    if (category && topic) {
      setMessages([
        {
          id: generateId(),
          content: `Welcome to Veda AI. I can help you learn about ${topic.name} from the ${category.name} category. What would you like to know?`,
          isUser: false,
          timestamp: new Date()
        }
      ]);
    }
  }, [categoryId, topicId]);
  
  // Simulated responses based on category and topic
  const [isLoading, setIsLoading] = useState(false);
  
  // Function to generate simulated responses
  const getSimulatedResponse = (message: string, category: string, topic: string) => {
    // Common responses for all categories
    const commonResponses = [
      `According to Hindu tradition, ${topic} is a significant part of our ancient wisdom. The scriptures provide deep insights about this subject.`,
      `In Hindu philosophy, ${topic} represents an important concept within ${category}. There are many stories and teachings about this in our sacred texts.`,
      `The ancient Hindu texts provide fascinating details about ${topic}. Would you like to know about any specific aspect?`,
      `The wisdom of the Vedas offers profound teachings about ${topic}. This knowledge has been preserved for thousands of years.`,
      `Hindu traditions speak of ${topic} with great reverence. The ancient texts describe various important aspects of this subject.`
    ];
    
    // Specific category responses
    const categoryResponses: Record<string, string[]> = {
      vedas: [
        `The Vedas are the oldest scriptures of Hinduism. ${topic} is an important part of Vedic knowledge.`,
        `The ancient rishis (sages) who composed the Vedas shared profound insights about ${topic}.`,
        `Vedic hymns contain many references to ${topic}, describing its spiritual significance.`
      ],
      puranas: [
        `The Puranas contain ancient narratives about ${topic}, often with symbolic meanings.`,
        `The Puranic stories about ${topic} teach important moral and spiritual lessons.`,
        `In the Puranic tradition, ${topic} is associated with divine manifestations and cosmic events.`
      ],
      epics: [
        `The great Hindu epics feature ${topic} as an important element of their narratives.`,
        `The epic stories involving ${topic} continue to inspire millions of people around the world.`,
        `The moral teachings related to ${topic} in our epics provide guidance for righteous living.`
      ],
      characters: [
        `In Hindu tradition, ${topic} is revered as a divine personality with profound spiritual qualities.`,
        `The stories of ${topic} reveal the many dimensions of divine and human existence.`,
        `Devotees of ${topic} seek to embody the virtues and qualities associated with this divine being.`
      ]
    };
    
    // Select responses based on category and randomize
    const responses = [...commonResponses];
    if (categoryResponses[category]) {
      responses.push(...categoryResponses[category]);
    }
    
    // Add a personalized element based on user's message
    let personalizedResponse = '';
    if (message.toLowerCase().includes('what') || message.toLowerCase().includes('tell me about')) {
      personalizedResponse = `Regarding your question about ${topic}, `;
    } else if (message.toLowerCase().includes('how')) {
      personalizedResponse = `On how ${topic} relates to life, `;
    } else if (message.toLowerCase().includes('why')) {
      personalizedResponse = `As to why ${topic} is significant, `;
    } else {
      personalizedResponse = `In response to your interest in ${topic}, `;
    }
    
    // Random selection from responses and add personalization
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    return personalizedResponse + randomResponse;
  };
  
  const handleSendMessage = useCallback(() => {
    if (!inputMessage.trim()) return;
    
    // Add user message to the chat
    const newMessage: Message = {
      id: generateId(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate API call with loading state
    setIsLoading(true);
    
    // Simulate response delay
    setTimeout(() => {
      // Generate simulated response
      const responseText = getSimulatedResponse(inputMessage, categoryId, topicId);
      
      // Add AI response
      setMessages(prev => [
        ...prev,
        {
          id: generateId(),
          content: responseText,
          isUser: false,
          timestamp: new Date()
        }
      ]);
      
      setIsLoading(false);
    }, 1500); // 1.5 second delay to simulate thinking
    
    // Clear input
    setInputMessage("");
  }, [inputMessage, categoryId, topicId]);
  
  const handleBack = useCallback(() => {
    setLocation("/categories");
  }, [setLocation]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleBack}
          className="text-offwhite hover:text-golden hover:bg-transparent"
        >
          <ArrowLeft size={24} />
        </Button>
        <div>
          <h1 className="font-cinzel text-xl md:text-2xl font-bold text-saffron">
            {topic?.name}
          </h1>
          <p className="font-amita text-sm text-offwhite/70">
            {category?.name}
          </p>
        </div>
      </header>
      
      <ScrollArea className="flex-1 p-4 mb-20">
        <div className="space-y-4 max-w-3xl mx-auto">
          {messages.map((message) => (
            <Card
              key={message.id}
              className={`p-4 ${
                message.isUser 
                  ? "ml-auto bg-gradient-saffron-golden text-black max-w-[80%]" 
                  : "mr-auto bg-black/75 border-primary/30 text-offwhite max-w-[90%]"
              }`}
            >
              <p className="font-poppins">{message.content}</p>
              <div className={`text-xs mt-2 ${message.isUser ? 'text-black/60' : 'text-offwhite/60'}`}>
                {message.timestamp.toLocaleTimeString()}
              </div>
            </Card>
          ))}
          
          {isLoading && (
            <div className="flex items-center justify-center p-4">
              <div className="animate-pulse font-amita text-golden">Consulting ancient texts...</div>
            </div>
          )}
        </div>
      </ScrollArea>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/80 border-t border-primary/30">
        <div className="flex gap-2 max-w-3xl mx-auto">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask about Hindu wisdom..."
            className="bg-black/50 border-primary/30 text-offwhite placeholder:text-offwhite/50"
          />
          <Button
            onClick={handleSendMessage}
            disabled={isLoading || !inputMessage.trim()}
            className="bg-gradient-saffron-golden text-black hover:shadow-golden/30"
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
