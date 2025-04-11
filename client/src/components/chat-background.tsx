import { ReactNode } from "react";
import krishnaImage from "../assets/krishna-sada-sahayate.jpg";

interface ChatBackgroundProps {
  children: ReactNode;
}

export default function ChatBackground({ children }: ChatBackgroundProps) {
  return (
    <div
      className="min-h-screen w-full flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${krishnaImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
      }}
    >
      {children}
    </div>
  );
}