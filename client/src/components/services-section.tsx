import { TrendingUp, Building, Gem, BarChart3, Shield, Smartphone } from "lucide-react";
import { ScrollReveal, ScrollStagger } from "@/hooks/use-scroll-reveal";

export default function ServicesSection() {
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-navy mb-6 luxury-serif tracking-wide">Exclusive Financial Mastery</h2>
          <p className="text-xl text-steel max-w-3xl mx-auto luxury-sans font-light">
            Bespoke wealth solutions crafted for the UAE's elite - where every investment reflects your distinguished status
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollReveal 
                key={service.title}
                delay={index * 100}
                direction="scale"
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-accent-blue/20"
                data-testid={`service-card-${index}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-accent-blue text-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-royal transition-colors duration-300">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-medium text-navy mb-3 luxury-serif group-hover:text-accent-blue transition-colors duration-300">{service.title}</h3>
                  <p className="text-steel mb-4 luxury-sans font-light leading-relaxed">{service.description}</p>
                  <button 
                    className="text-accent-blue font-medium hover:text-royal transition-colors luxury-sans group-hover:translate-x-1 transform duration-300"
                    data-testid={`service-learn-more-${index}`}
                  >
                    Learn More →
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
