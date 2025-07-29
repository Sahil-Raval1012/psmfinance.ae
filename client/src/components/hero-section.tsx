import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with luxury UAE business skyline */}
      <div 
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 35, 126, 0.7), rgba(21, 101, 192, 0.8)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-medium mb-6 animate-fade-in-up luxury-serif tracking-wide">
          PREMIUM FINANCIAL
          <span className="block text-accent-blue">BROKERAGE</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up luxury-sans font-light" style={{ animationDelay: '0.3s' }}>
          Excellence in financial services across the UAE market with unparalleled expertise and trust
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={scrollToServices}
            className="bg-accent-blue hover:bg-royal text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl luxury-sans"
            data-testid="explore-services-button"
          >
            Explore Services
          </Button>
          <Button 
            variant="outline"
            onClick={scrollToContact}
            className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-lg font-medium transition-all duration-300 luxury-sans"
            data-testid="contact-us-button"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Floating 3D elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-accent-blue opacity-20 rounded-full animate-float" />
      <div className="absolute bottom-32 left-16 w-16 h-16 bg-white opacity-10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
