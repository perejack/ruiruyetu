import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-primary">
              Ruiru Mabati
            </span>
          </Link>

          {/* Phone number - visible on all devices */}
          <div className="flex items-center space-x-2 md:hidden">
            <Phone className="h-4 w-4 text-primary" />
            <a href="tel:+254751974764" className="text-sm font-medium text-primary">
              +254 751 974 764
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Phone & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+254751974764" className="text-lg font-semibold text-primary">
                +254 751 974 764
              </a>
            </div>
            <Button variant="hero" size="lg">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border mt-2 pt-4 pb-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => {
                  setIsMenuOpen(false);
                  if (item.href.startsWith('#')) {
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                  }
                }}
              >
                {item.name}
              </a>
            ))}
            <Button variant="hero" size="lg" className="w-full mt-4">
              Get Quote
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;