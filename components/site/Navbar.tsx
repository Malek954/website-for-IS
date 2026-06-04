import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled ? "glass border-b border-border" : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Impact Systems" className="h-16 w-auto sm:h-20" />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link to="/" hash="why" className="text-sm text-muted-foreground hover:text-foreground transition">Why Us</Link>
            <Link to="/" hash="results" className="text-sm text-muted-foreground hover:text-foreground transition">Results</Link>
            <Link to="/" hash="case" className="text-sm text-muted-foreground hover:text-foreground transition">Case Studies</Link>
            <Link to="/" hash="services" className="text-sm text-muted-foreground hover:text-foreground transition">Services</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition">Contact</Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button asChild variant="outlineHero" size="sm" className="hidden sm:inline-flex">
              <Link to="/contact">Contact</Link>
            </Button>
            <Button asChild variant="hero" size="sm">
              <Link to="/start-now">Apply Now</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
