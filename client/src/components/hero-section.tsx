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
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 45, 109, 0.85) 0%, rgba(10, 45, 109, 0.7) 50%, rgba(60, 233, 253, 0.3) 100%), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${parallaxOffset * 0.5}px)`
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10" />
      
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <ScrollReveal direction="up" distance={50}>
          <div className="mb-6">
            <span className="inline-block px-6 py-2 border border-[#3ce9fd]/40 rounded-full text-[#3ce9fd] text-sm tracking-[0.3em] uppercase luxury-sans mb-8">
              Premium Financial Services
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-8 luxury-serif tracking-wide leading-tight">
            PSM Financial Broker
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" distance={40} delay={300}>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 opacity-90 luxury-sans font-light max-w-3xl mx-auto leading-relaxed">
            Crafting exclusive wealth solutions for the UAE's most distinguished clientele
          </p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" distance={30} delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-[#3ce9fd] hover:bg-white text-[#0a2d6d] px-10 py-6 text-base sm:text-lg font-normal luxury-sans shadow-2xl hover:shadow-[#3ce9fd]/25 transition-all duration-500 hover:scale-105 rounded-none"
              data-testid="button-exclusive-consultation"
            >
              Schedule Consultation
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline" 
              size="lg"
              className="border-2 border-white/60 text-white hover:bg-white hover:text-[#0a2d6d] px-10 py-6 text-base sm:text-lg font-normal luxury-sans transition-all duration-500 hover:scale-105 rounded-none bg-transparent"
              data-testid="button-discover-services"
            >
              Explore Services
            </Button>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute top-1/4 right-10 w-32 h-32 border border-[#3ce9fd]/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-1/3 left-10 w-20 h-20 border border-white/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#3ce9fd] rounded-full animate-pulse hidden lg:block" />
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce cursor-pointer" onClick={scrollToServices}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.2em] uppercase luxury-sans">Scroll</span>
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
}
