import { ReactNode } from "react";
import sageBackground from "../assets/sage-background.png";

interface ChatBackgroundProps {
  children: ReactNode;
}

export default function ChatBackground({ children }: ChatBackgroundProps) {
  return (
    <div
      className="min-h-screen w-full flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${sageBackground})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
      }}
    >
      {children}
    </div>
  );
}