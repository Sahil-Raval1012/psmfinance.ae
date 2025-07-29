import { ChevronDown, Crown, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { useImmersiveEffects, useParticleSystem } from "@/hooks/use-immersive-effects";

export default function HeroSection() {
  const containerRef = useImmersiveEffects();
  useParticleSystem(containerRef);

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
    <section ref={containerRef} id="home" className="relative h-screen flex items-center justify-center overflow-hidden parallax-container">
      {/* Immersive Multi-Layer Background */}
      <div 
        className="absolute inset-0 parallax-bg"
        data-parallax="0.3"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7) contrast(1.4) saturate(1.3)'
        }}
      />
      
      {/* Dynamic Gradient Overlays */}
      <div 
        className="absolute inset-0 parallax-mid"
        data-parallax="0.6"
        style={{
          background: `linear-gradient(135deg, rgba(26, 35, 126, 0.9) 0%, rgba(21, 101, 192, 0.8) 30%, rgba(13, 31, 45, 0.95) 70%, rgba(26, 35, 126, 0.9) 100%)`
        }}
      />
      
      {/* Immersive Floating Elements with Depth */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gold-accent opacity-10 rounded-full animate-float blur-2xl depth-layer-1" />
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-accent-blue opacity-15 rounded-full animate-float blur-xl depth-layer-2" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-platinum opacity-20 rounded-full animate-float blur-sm depth-layer-3" style={{ animationDelay: '4s' }} />
      <div className="absolute top-40 left-1/4 w-16 h-16 bg-gold-accent opacity-8 rounded-full animate-float blur-lg depth-layer-1" style={{ animationDelay: '6s' }} />

      {/* Cinematic Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-charcoal/40" />
      
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6 depth-layer-3">
        <div className="animate-cinematic">
          {/* Immersive Luxury Badge */}
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-2xl border border-white/30 rounded-full px-8 py-4 mb-12 luxury-card interactive-tilt shadow-2xl">
            <Crown size={24} className="text-gold-accent animate-pulse" />
            <span className="luxury-sans-medium text-sm tracking-wider">EST. 2009 • UAE CENTRAL BANK LICENSED</span>
            <Shield size={24} className="text-accent-blue animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <h1 className="text-7xl md:text-9xl font-medium mb-12 luxury-serif-bold tracking-tighter leading-none">
            <div className="text-gradient-luxury mb-4 transform hover:scale-105 transition-transform duration-700">
              LUXURY FINANCIAL
            </div>
            <div className="text-gradient-gold transform hover:scale-105 transition-transform duration-700" style={{ animationDelay: '0.5s' }}>
              EXCELLENCE
            </div>
          </h1>
        </div>

        <div className="scroll-reveal-left animate-cinematic" style={{ animationDelay: '0.8s' }}>
          <p className="text-3xl md:text-4xl mb-16 opacity-95 luxury-sans font-light leading-relaxed max-w-4xl mx-auto interactive-tilt">
            The UAE's most exclusive guardian of wealth — where <em className="text-gold-accent luxury-serif animate-pulse">prestige meets precision</em>, and discretion defines excellence.
          </p>
        </div>

        <div className="scroll-reveal-right animate-cinematic" style={{ animationDelay: '1.2s' }}>
          {/* Immersive Luxury Stats */}
          <div className="flex flex-wrap justify-center gap-10 mb-16">
            <div className="text-center luxury-card interactive-tilt px-8 py-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="text-4xl font-medium text-gold-accent luxury-serif mb-2 animate-pulse">AED 2.5B+</div>
              <div className="text-sm opacity-90 luxury-sans tracking-widest">ASSETS UNDER MANAGEMENT</div>
            </div>
            <div className="text-center luxury-card interactive-tilt px-8 py-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="text-4xl font-medium text-accent-blue luxury-serif mb-2 animate-pulse" style={{ animationDelay: '1s' }}>500+</div>
              <div className="text-sm opacity-90 luxury-sans tracking-widest">ELITE FAMILIES SERVED</div>
            </div>
            <div className="text-center luxury-card interactive-tilt px-8 py-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="text-4xl font-medium text-gold-accent luxury-serif mb-2 animate-pulse" style={{ animationDelay: '2s' }}>98.7%</div>
              <div className="text-sm opacity-90 luxury-sans tracking-widest">CLIENT RETENTION</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button 
              onClick={scrollToServices}
              className="luxury-button interactive-tilt bg-gradient-to-r from-accent-blue via-royal to-accent-blue bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-12 py-6 rounded-3xl font-medium transition-all duration-700 hover:scale-110 hover:shadow-3xl luxury-sans-medium tracking-wide text-lg shadow-2xl"
              data-testid="explore-services-button"
              size="lg"
            >
              <Crown className="mr-3 animate-pulse" size={24} />
              Discover Elite Services
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToContact}
              className="luxury-button interactive-tilt border-3 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-charcoal px-12 py-6 rounded-3xl font-medium transition-all duration-700 hover:scale-110 luxury-sans-medium tracking-wide backdrop-blur-2xl bg-white/10 text-lg shadow-2xl"
              data-testid="contact-us-button"
              size="lg"
            >
              <Star className="mr-3 animate-pulse" size={24} style={{ animationDelay: '1s' }} />
              Begin Your Legacy
            </Button>
          </div>
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
