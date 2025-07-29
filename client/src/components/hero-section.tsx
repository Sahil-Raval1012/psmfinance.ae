import { ChevronDown, Crown, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

export default function HeroSection() {
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
      {/* Premium Background with Enhanced Luxury Effects */}
      <div 
        className="absolute inset-0 parallax-container"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 35, 126, 0.85) 0%, rgba(21, 101, 192, 0.75) 50%, rgba(13, 31, 45, 0.9) 100%), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.8) contrast(1.3) saturate(1.2)'
        }}
      />
      
      {/* Luxury Floating Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gold-accent opacity-8 rounded-full animate-float blur-2xl" />
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-accent-blue opacity-12 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-platinum opacity-15 rounded-full animate-float blur-sm" style={{ animationDelay: '4s' }} />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/20 via-transparent to-charcoal/30" />
      
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <ScrollReveal>
          {/* Luxury Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 luxury-card">
            <Crown size={20} className="text-gold-accent" />
            <span className="luxury-sans-medium text-sm tracking-wide">EST. 2009 • UAE CENTRAL BANK LICENSED</span>
            <Shield size={20} className="text-accent-blue" />
          </div>

          <h1 className="text-6xl md:text-8xl font-medium mb-8 animate-luxury-fade luxury-serif-bold tracking-tight">
            <span className="text-gradient-luxury">LUXURY FINANCIAL</span>
            <span className="block text-gradient-gold mt-2">EXCELLENCE</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-2xl md:text-3xl mb-12 opacity-95 luxury-sans font-light leading-relaxed max-w-4xl mx-auto">
            The UAE's most exclusive guardian of wealth — where <em className="text-gold-accent luxury-serif">prestige meets precision</em>, and discretion defines excellence.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          {/* Luxury Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center luxury-card px-6 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-3xl font-medium text-gold-accent luxury-serif mb-1">AED 2.5B+</div>
              <div className="text-sm opacity-80 luxury-sans tracking-wide">ASSETS UNDER MANAGEMENT</div>
            </div>
            <div className="text-center luxury-card px-6 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-3xl font-medium text-accent-blue luxury-serif mb-1">500+</div>
              <div className="text-sm opacity-80 luxury-sans tracking-wide">ELITE FAMILIES SERVED</div>
            </div>
            <div className="text-center luxury-card px-6 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-3xl font-medium text-gold-accent luxury-serif mb-1">98.7%</div>
              <div className="text-sm opacity-80 luxury-sans tracking-wide">CLIENT RETENTION</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={scrollToServices}
              className="luxury-button bg-gradient-to-r from-accent-blue to-royal hover:from-royal hover:to-accent-blue text-white px-10 py-5 rounded-2xl font-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl luxury-sans-medium tracking-wide"
              data-testid="explore-services-button"
              size="lg"
            >
              <Crown className="mr-2" size={20} />
              Discover Elite Services
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToContact}
              className="luxury-button border-2 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-charcoal px-10 py-5 rounded-2xl font-medium transition-all duration-500 hover:scale-105 luxury-sans-medium tracking-wide backdrop-blur-sm bg-white/5"
              data-testid="contact-us-button"
              size="lg"
            >
              <Star className="mr-2" size={20} />
              Begin Your Legacy
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
