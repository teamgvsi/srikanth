import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "Impact", href: "#impact" },
  { name: "Insights", href: "#events" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav 
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
            scrolled ? "glass-panel shadow-sm" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo("#home")}>
            <span className="font-serif text-2xl font-bold text-foreground">
              Srikanth <span className="text-primary">Raheja</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <ContactModal>
              <Button className="rounded-full bg-secondary hover:bg-secondary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 px-6">
                Let's Connect &rarr;
              </Button>
            </ContactModal>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 p-4 pt-2">
          <div className="glass-panel rounded-2xl p-4 flex flex-col space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-left px-4 py-2 text-base font-medium text-foreground hover:bg-white/50 rounded-xl"
              >
                {link.name}
              </button>
            ))}
            <div className="px-4 pt-2 pb-1">
              <ContactModal>
                <Button className="w-full rounded-xl bg-secondary text-white">
                  Let's Connect &rarr;
                </Button>
              </ContactModal>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
