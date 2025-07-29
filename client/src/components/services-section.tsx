import { TrendingUp, Building, Gem, BarChart3, Shield, Smartphone } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Strategic investment guidance with deep market insights and personalized portfolio management.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Building,
      title: "Corporate Finance",
      description: "Comprehensive corporate financial solutions including mergers, acquisitions, and restructuring.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Gem,
      title: "Wealth Management",
      description: "Exclusive wealth preservation and growth strategies for high-net-worth individuals.",
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-navy mb-6 luxury-serif tracking-wide">Our Premium Services</h2>
          <p className="text-xl text-steel max-w-3xl mx-auto luxury-sans font-light">
            Comprehensive financial brokerage solutions tailored for the UAE market with exceptional service standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className="hover-3d bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                data-testid={`service-card-${index}`}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="w-12 h-12 bg-accent-blue text-white rounded-lg flex items-center justify-center mb-4">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-medium text-navy mb-3 luxury-sans">{service.title}</h3>
                  <p className="text-steel mb-4 luxury-sans font-light">{service.description}</p>
                  <button 
                    className="text-accent-blue font-medium hover:text-royal transition-colors luxury-sans"
                    data-testid={`service-learn-more-${index}`}
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
