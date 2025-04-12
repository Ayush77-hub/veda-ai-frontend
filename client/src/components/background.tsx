import { ReactNode } from "react";
import epicSceneImage from "../assets/epic-scene.jpg";
import HeaderNav from "./header-nav"; // Added HeaderNav import

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div
      className="min-h-screen w-full flex flex-col bg-cover bg-center bg-no-repeat pt-16" // Added pt-16 for spacing
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${epicSceneImage})`,
        backgroundAttachment: "fixed"
      }}
    >
      <HeaderNav /> {/* Added HeaderNav component */}
      {children}
    </div>
  );
}

// Placeholder HeaderNav component
const HeaderNav = () => {
  return (
    <header className="bg-gray-800 p-4"> {/* Example styling */}
      <img src="/vrda-logo.svg" alt="VRDA AI Logo" className="h-8 w-auto" /> {/* Placeholder logo */}
      {/* Add more navigation elements here */}
    </header>
  );
};