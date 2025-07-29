import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for styling
      setIsScrolled(currentScrollY > 100);
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (item: { id: string; path: string }) => {
    if (item.path === "/" && location === "/") {
      // If on home page, scroll to section
      const element = document.getElementById(item.id);
      if (element) {
        const targetPosition = element.offsetTop - 80;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const [location] = useLocation();

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "services", label: "Services", path: "/services" },
    { id: "about", label: "About", path: "/about" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 py-4 ${
          isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
        } ${
          isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
        data-testid="main-navigation"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/">
            <div 
              className="text-2xl font-medium text-white luxury-serif cursor-pointer"
              data-testid="logo"
            >
              PSM FINANCIAL BROKER
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.id} href={item.path}>
                <button
                  onClick={() => handleNavClick(item)}
                  className={`text-white hover:text-accent-blue transition-colors font-normal luxury-sans ${
                    location === item.path ? 'text-accent-blue' : ''
                  }`}
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-accent-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-navy shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <Link key={item.id} href={item.path}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`text-white hover:text-accent-blue transition-colors font-normal luxury-sans text-left ${
                      location === item.path ? 'text-accent-blue' : ''
                    }`}
                    data-testid={`mobile-nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
