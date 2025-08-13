import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, useParallax } from "@/hooks/use-scroll-reveal";

export default function HeroSection() {
  const parallaxOffset = useParallax();
  
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      const targetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const targetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with luxury UAE business skyline - Parallax Effect */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 35, 126, 0.7), rgba(21, 101, 192, 0.8)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${parallaxOffset * 0.5}px)`
        }}
      />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up" distance={50}>
          <h1 className="text-5xl md:text-7xl font-medium mb-6 luxury-serif tracking-wide">
            LUXURY FINANCIAL
            <span className="block text-accent-blue">EXCELLENCE</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" distance={40} delay={300}>
          <p className="text-xl md:text-2xl mb-8 opacity-90 luxury-sans font-light">
            Where prestige meets performance - trusted by the UAE's most discerning investors since 2010
          </p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" distance={30} delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-3 text-lg font-medium luxury-sans shadow-2xl hover:shadow-accent-blue/25 transition-all duration-300 hover:scale-105"
              data-testid="button-exclusive-consultation"
            >
              Exclusive Consultation
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy px-8 py-3 text-lg font-medium luxury-sans transition-all duration-300 hover:scale-105"
              data-testid="button-discover-services"
            >
              Discover Our Services
            </Button>
          </div>
        </ScrollReveal>
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
