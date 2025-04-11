import { ReactNode } from "react";
import chatbotSage from "../assets/chatbot-sage.png";

interface ChatBackgroundProps {
  children: ReactNode;
}

export default function ChatBackground({ children }: ChatBackgroundProps) {
  return (
    <div
      className="min-h-screen w-full flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${chatbotSage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
      }}
    >
      {children}
    </div>
  );
}