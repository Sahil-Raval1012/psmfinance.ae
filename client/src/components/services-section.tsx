import { TrendingUp, Building, Gem, BarChart3, Shield, Smartphone } from "lucide-react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { useImmersiveEffects, useParticleSystem } from "@/hooks/use-immersive-effects";

export default function ServicesSection() {
  const containerRef = useImmersiveEffects();
  useParticleSystem(containerRef);

  const services = [
    {
      icon: TrendingUp,
      title: "Elite Investment Counsel",
      description: "Private investment strategies reserved for discerning clients, with personalized portfolio architecture and exclusive market access.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Building,
      title: "Corporate Excellence",
      description: "Sophisticated corporate finance solutions including strategic mergers, exclusive acquisitions, and premium restructuring services.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Gem,
      title: "Private Wealth Mastery",
      description: "Ultra-exclusive wealth preservation and multiplication strategies crafted for the UAE's most successful individuals and families.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "In-depth market research and analysis to inform strategic financial decisions.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Sophisticated risk assessment and mitigation strategies for all investment portfolios.",
      image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Smartphone,
      title: "Digital Solutions",
      description: "Cutting-edge fintech solutions and digital banking services for modern investors.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section ref={containerRef} id="services" className="py-32 bg-gradient-to-br from-white via-platinum to-light-blue relative overflow-hidden parallax-container">
      {/* Luxury background elements */}
      <div className="absolute top-20 right-20 w-60 h-60 bg-gold-accent opacity-4 rounded-full animate-float blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-royal opacity-6 rounded-full animate-float blur-2xl" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-24">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gold-accent/30 rounded-full px-8 py-4 mb-8">
            <Gem className="text-gold-accent" size={24} />
            <span className="luxury-sans-medium text-charcoal tracking-wide">EXCLUSIVE SERVICES</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-medium text-gradient-luxury mb-8 luxury-serif-bold tracking-tight">
            Exclusive <span className="text-gradient-gold">Financial Mastery</span>
          </h2>
          <p className="text-2xl text-charcoal max-w-4xl mx-auto luxury-sans font-light leading-relaxed">
            Bespoke wealth solutions crafted for the UAE's elite — where every investment <em className="text-gold-accent luxury-serif">reflects your distinguished status</em>
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.slice(0, 3).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollReveal 
                key={service.title}
                delay={index * 150}
                className="luxury-card interactive-tilt bg-gradient-to-br from-white/95 via-white/90 to-platinum/60 rounded-3xl shadow-3xl border border-white/30 overflow-hidden backdrop-blur-sm hover:scale-105 transition-all duration-700 depth-layer-2"
              >
                <div data-testid={`service-card-${index}`}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-64 object-cover filter brightness-110 contrast-105 hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 w-14 h-14 bg-gradient-to-br from-gold-accent to-accent-blue text-white rounded-2xl flex items-center justify-center shadow-lg">
                      <IconComponent size={28} />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-medium text-gradient-luxury mb-4 luxury-serif-bold tracking-tight">{service.title}</h3>
                    <p className="text-charcoal mb-6 luxury-sans leading-relaxed text-lg">{service.description}</p>
                    <button 
                      className="text-accent-blue font-medium hover:text-royal transition-colors luxury-sans"
                      data-testid={`service-learn-more-${index}`}
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
