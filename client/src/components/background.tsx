import { ReactNode } from "react";
import epicSceneImage from "../assets/epic-scene.jpg";

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div
      className="min-h-screen w-full flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${epicSceneImage})`,
        backgroundAttachment: "fixed"
      }}
    >
      {children}
    </div>
  );
}