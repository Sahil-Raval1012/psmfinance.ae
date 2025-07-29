import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Crown, Shield, TrendingUp, Users, Globe, Award, Star, Zap } from "lucide-react";

export default function Services() {
  const premiumServices = [
    {
      icon: Crown,
      title: "Private Wealth Mastery",
      subtitle: "Ultra-High-Net-Worth Excellence",
      description: "Bespoke wealth management for families with AED 50M+ in investable assets, featuring personalized investment strategies, family office services, and multi-generational planning.",
      features: [
        "Dedicated relationship manager and investment team",
        "Custom portfolio construction and alternative investments",
        "Family governance and succession planning",
        "Tax optimization and estate planning",
        "Concierge banking and lifestyle services"
      ],
      minimumInvestment: "AED 50M+",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Shield,
      title: "Elite Investment Counsel",
      subtitle: "Sophisticated Portfolio Management",
      description: "Professional investment management for discerning individuals seeking institutional-quality expertise with personalized attention and absolute discretion.",
      features: [
        "Global investment opportunities and private markets",
        "ESG and impact investing strategies",
        "Currency hedging and risk management",
        "Regular performance reviews and reporting",
        "24/7 market insights and advisory support"
      ],
      minimumInvestment: "AED 10M+",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Users,
      title: "Corporate Excellence",
      subtitle: "Institutional Financial Solutions",
      description: "Comprehensive financial services for corporations, family businesses, and institutional clients, designed to optimize capital efficiency and strategic growth.",
      features: [
        "Corporate treasury and cash management",
        "Trade finance and structured products",
        "Merger & acquisition advisory",
        "Employee benefit programs",
        "Institutional asset management"
      ],
      minimumInvestment: "AED 25M+",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const specializedServices = [
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Direct access to international markets, exclusive IPOs, and private placement opportunities"
    },
    {
      icon: Award,
      title: "Alternative Investments",
      description: "Private equity, hedge funds, real estate, and commodity investments for portfolio diversification"
    },
    {
      icon: Star,
      title: "Islamic Finance Solutions",
      description: "Sharia-compliant investment products and banking services aligned with Islamic principles"
    },
    {
      icon: Zap,
      title: "Digital Innovation",
      description: "Cutting-edge fintech solutions, digital banking, and cryptocurrency advisory services"
    }
  ];

  const investmentApproach = [
    {
      phase: "Discovery & Strategy",
      description: "Comprehensive wealth analysis, risk profiling, and bespoke strategy development",
      duration: "2-4 weeks"
    },
    {
      phase: "Portfolio Construction",
      description: "Asset allocation, security selection, and implementation across global markets",
      duration: "4-6 weeks"
    },
    {
      phase: "Active Management",
      description: "Continuous monitoring, rebalancing, and optimization based on market conditions",
      duration: "Ongoing"
    },
    {
      phase: "Review & Refinement",
      description: "Quarterly reviews, annual strategy updates, and life event adjustments",
      duration: "Quarterly"
    }
  ];

  return (
    <div className="min-h-screen bg-white optima-font">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-navy via-royal to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="w-full h-full"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-medium mb-8 luxury-serif tracking-wide">
              Luxury Financial <span className="text-accent-blue">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 luxury-sans font-light leading-relaxed">
              Discover our exclusive suite of wealth management services, crafted for the UAE's most sophisticated investors and designed to preserve and grow generational wealth.
            </p>
            <button 
              className="bg-accent-blue hover:bg-royal text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 luxury-sans"
              data-testid="consultation-button"
            >
              Schedule Private Consultation
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Premium Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-navy mb-6 luxury-serif">Premium Service Portfolio</h2>
            <p className="text-xl text-steel max-w-3xl mx-auto luxury-sans font-light">
              Three distinct service tiers designed to meet the unique requirements of ultra-high-net-worth individuals, families, and institutions
            </p>
          </ScrollReveal>

          <div className="space-y-20">
            {premiumServices.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <ScrollReveal key={service.title} delay={index * 100}>
                  <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={isEven ? 'lg:col-start-1' : 'lg:col-start-2'}>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-royal rounded-full flex items-center justify-center mr-4 shadow-lg">
                          <IconComponent size={28} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-medium text-navy luxury-serif">{service.title}</h3>
                          <p className="text-accent-blue luxury-sans font-medium">{service.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-steel luxury-sans font-light leading-relaxed mb-6 text-lg">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-navy mb-3 luxury-serif">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-steel luxury-sans font-light flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-r from-accent-blue to-royal text-white p-4 rounded-lg inline-block">
                        <div className="text-sm luxury-sans opacity-80">Minimum Investment</div>
                        <div className="text-xl font-medium luxury-serif">{service.minimumInvestment}</div>
                      </div>
                    </div>
                    
                    <div className={isEven ? 'lg:col-start-2' : 'lg:col-start-1'}>
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="rounded-2xl shadow-2xl"
                        data-testid={`service-image-${index}`}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gradient-to-br from-light-blue to-white">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-navy mb-6 luxury-serif">Specialized Expertise</h2>
            <p className="text-xl text-steel max-w-3xl mx-auto luxury-sans font-light">
              Additional services and capabilities that complement our core wealth management offerings
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <ScrollReveal key={service.title} delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-royal rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-navy mb-3 luxury-serif">{service.title}</h3>
                    <p className="text-steel luxury-sans font-light">{service.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-navy mb-6 luxury-serif">Our Investment Approach</h2>
            <p className="text-xl text-steel max-w-3xl mx-auto luxury-sans font-light">
              A systematic, disciplined process that ensures every client receives the highest standard of professional investment management
            </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {investmentApproach.map((phase, index) => (
              <ScrollReveal key={phase.phase} delay={index * 100}>
                <div className="flex items-center mb-12 last:mb-0">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-blue to-royal rounded-full flex items-center justify-center text-white font-medium mr-8 luxury-serif">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-navy luxury-serif">{phase.phase}</h3>
                      <span className="text-accent-blue luxury-sans font-medium text-sm">{phase.duration}</span>
                    </div>
                    <p className="text-steel luxury-sans font-light">{phase.description}</p>
                  </div>
                </div>
                {index < investmentApproach.length - 1 && (
                  <div className="w-0.5 h-8 bg-accent-blue/30 ml-6 mb-4"></div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-navy via-royal to-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-medium mb-8 luxury-serif">Begin Your Wealth Journey</h2>
            <p className="text-xl mb-12 opacity-90 luxury-sans font-light max-w-3xl mx-auto">
              Discover how PSM Financial Broker can elevate your wealth management experience with our exclusive, personalized approach to financial excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-accent-blue hover:bg-royal text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 luxury-sans"
                data-testid="schedule-consultation"
              >
                Schedule Private Consultation
              </button>
              <button 
                className="border-2 border-white hover:bg-white hover:text-navy text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 luxury-sans"
                data-testid="download-brochure"
              >
                Download Service Brochure
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}