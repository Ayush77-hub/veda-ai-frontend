import { ReactNode } from "react";
import peacockFeatherImage from "../assets/peacock-feather.png";

interface ChatBackgroundProps {
  children: ReactNode;
}

export default function ChatBackground({ children }: ChatBackgroundProps) {
  return (
    <div
      className="min-h-screen w-full flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.9)), url(${peacockFeatherImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
      }}
    >
      {children}
    </div>
  );
}