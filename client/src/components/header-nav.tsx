
import { Link } from "wouter";

export default function HeaderNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-golden/20">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/src/assets/veda-logo.jpg" alt="Veda AI" className="h-12 w-auto" />
        </Link>
        <div className="flex items-center gap-6 text-lg font-cinzel text-golden">
          <Link href="/categories">Categories</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
