import { TrendingUp, Building, Gem, BarChart3, Shield, Smartphone } from "lucide-react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ServicesSection() {
  const services = [
    {
      icon: TrendingUp,
      title: "Elite Investment Counsel",
      description: "Private investment strategies reserved for discerning clients, with personalized portfolio architecture and exclusive market access.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Building,
      title: "Corporate Excellence",
      description: "Sophisticated corporate finance solutions including strategic mergers, exclusive acquisitions, and premium restructuring services.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Gem,
      title: "Private Wealth Mastery",
      description: "Ultra-exclusive wealth preservation and multiplication strategies crafted for the UAE's most successful individuals and families.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "In-depth market research and analysis to inform strategic financial decisions with precision and foresight.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Sophisticated risk assessment and mitigation strategies for all investment portfolios and asset classes.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Smartphone,
      title: "Digital Solutions",
      description: "Cutting-edge fintech solutions and digital banking services for the modern sophisticated investor.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 border border-[#0a2d6d]/20 text-[#3ce9fd] text-xs tracking-[0.25em] uppercase mb-6 luxury-sans">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#0a2d6d] mb-6 luxury-serif leading-tight">
            Exclusive Financial Mastery
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto luxury-sans font-light leading-relaxed">
            Bespoke wealth solutions crafted for the UAE's elite — where every investment reflects your distinguished status
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollReveal 
                key={service.title}
                delay={index * 100}
                direction="scale"
                className="group relative bg-white border border-gray-100 overflow-hidden hover:border-[#3ce9fd]/30 transition-all duration-500"
                data-testid={`service-card-${index}`}
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2d6d]/80 via-[#0a2d6d]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-12 h-12 bg-[#3ce9fd] flex items-center justify-center">
                      <IconComponent size={22} className="text-[#0a2d6d]" />
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-normal text-[#0a2d6d] mb-3 luxury-serif group-hover:text-[#3ce9fd] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 luxury-sans font-light leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button 
                      className="text-[#0a2d6d] group-hover:text-[#3ce9fd] transition-colors luxury-sans text-sm tracking-wider uppercase flex items-center"
                      data-testid={`service-learn-more-${index}`}
                    >
                      Learn More
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
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
