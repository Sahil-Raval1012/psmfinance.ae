import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * NAVIGATION COMPONENT
 * 
 * Features:
 * - Hide-on-scroll behavior for premium user experience
 * - Glass morphism effect with backdrop blur
 * - Smooth scrolling to page sections
 * - Mobile-responsive hamburger menu
 * - Luxury hover animations and transitions
 * 
 * Scroll Behavior:
 * - Shows navbar when scrolling up or at top
 * - Hides navbar when scrolling down for immersive experience
 * - Threshold: 10px scroll distance to trigger state change
 */

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isHomePage = location === "/";

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const homeNavItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  const pageNavItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/consultation", label: "Consultation" },
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
            {isHomePage ? (
              homeNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-psm-cyan transition-colors font-normal luxury-sans"
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))
            ) : (
              pageNavItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span 
                    className={`text-white hover:text-psm-cyan transition-colors font-normal luxury-sans cursor-pointer ${
                      location === item.href ? 'text-psm-cyan' : ''
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-psm-cyan"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-psm-navy shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              {isHomePage ? (
                homeNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white hover:text-psm-cyan transition-colors font-normal luxury-sans text-left"
                    data-testid={`mobile-nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                ))
              ) : (
                pageNavItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <span 
                      className={`text-white hover:text-psm-cyan transition-colors font-normal luxury-sans cursor-pointer ${
                        location === item.href ? 'text-psm-cyan' : ''
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
