import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import OwnersSection from "@/components/owners-section";
import CredentialsSection from "@/components/credentials-section";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Shield, Award, Users, TrendingUp, Globe, Star } from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "2009",
      title: "Foundation of Excellence",
      description: "PSM Financial Broker established with a vision to redefine luxury financial services in the UAE"
    },
    {
      year: "2012",
      title: "Regulatory Recognition",
      description: "Achieved full licensing from UAE Central Bank and DFSA authorization"
    },
    {
      year: "2016",
      title: "Elite Client Milestone",
      description: "Reached AED 1 billion in assets under management, serving 200+ prestigious families"
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Launched proprietary wealth management platform with advanced security protocols"
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "AED 2.5+ billion AUM, 500+ elite clients, and 98.7% retention rate achieved"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Absolute Discretion",
      description: "Your privacy is our paramount concern. Every interaction, every transaction, every relationship is protected by the highest standards of confidentiality."
    },
    {
      icon: Star,
      title: "Uncompromising Excellence",
      description: "We pursue perfection in every aspect of our service, from investment strategies to client communications, setting new benchmarks for luxury financial services."
    },
    {
      icon: Globe,
      title: "Global Sophistication",
      description: "Combining deep UAE market knowledge with international expertise, we navigate complex global markets with precision and cultural sensitivity."
    },
    {
      icon: Users,
      title: "Generational Partnership",
      description: "We build relationships that span generations, understanding that true wealth management is about preserving and growing family legacies."
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
              backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="w-full h-full"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-medium mb-8 luxury-serif tracking-wide">
              Legacy of <span className="text-accent-blue">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 luxury-sans font-light leading-relaxed">
              For over 15 years, PSM Financial Broker has been the trusted guardian of the UAE's most prestigious wealth, where discretion meets excellence and tradition embraces innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-medium text-accent-blue luxury-serif">AED 2.5B+</div>
                <div className="text-sm opacity-80 luxury-sans">Assets Under Management</div>
              </div>
              <div>
                <div className="text-4xl font-medium text-accent-blue luxury-serif">500+</div>
                <div className="text-sm opacity-80 luxury-sans">Elite Families Served</div>
              </div>
              <div>
                <div className="text-4xl font-medium text-accent-blue luxury-serif">98.7%</div>
                <div className="text-sm opacity-80 luxury-sans">Client Retention</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl md:text-5xl font-medium text-navy mb-8 luxury-serif">Our Distinguished Heritage</h2>
                <div className="space-y-6 text-steel luxury-sans font-light leading-relaxed">
                  <p className="text-lg">
                    In the heart of the UAE's financial district, PSM Financial Broker emerged from a singular vision: to create an oasis of sophistication where the region's most discerning families could entrust their most precious asset—their wealth.
                  </p>
                  <p className="text-lg">
                    Founded by industry veterans with decades of experience at prestigious global institutions, we understood that true luxury in financial services isn't about flashy presentations or aggressive sales tactics. It's about quiet confidence, impeccable execution, and the kind of discretion that has been the hallmark of private banking for centuries.
                  </p>
                  <p className="text-lg">
                    Today, we stand as the UAE's premier boutique financial firm, managing over AED 2.5 billion for more than 500 elite families and institutions. Our success is measured not just in returns, but in the multi-generational relationships we've cultivated and the absolute trust our clients place in us.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="PSM Financial Heritage"
                  className="rounded-2xl shadow-2xl"
                  data-testid="heritage-image"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent-blue text-white p-6 rounded-xl shadow-xl">
                  <div className="text-2xl font-medium luxury-serif">15+</div>
                  <div className="text-sm luxury-sans">Years of Excellence</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-light-blue to-white">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-navy mb-6 luxury-serif">Milestones of Excellence</h2>
            <p className="text-xl text-steel max-w-3xl mx-auto luxury-sans font-light">
              A journey marked by continuous innovation, unwavering integrity, and exceptional client outcomes
            </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} delay={index * 100}>
                <div className="flex items-center mb-12 last:mb-0">
                  <div className="flex-shrink-0 w-24 text-right mr-8">
                    <div className="text-2xl font-medium text-accent-blue luxury-serif">{milestone.year}</div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-accent-blue rounded-full mr-8 relative">
                    {index < milestones.length - 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-accent-blue/30"></div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-medium text-navy mb-2 luxury-serif">{milestone.title}</h3>
                    <p className="text-steel luxury-sans font-light">{milestone.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-navy mb-6 luxury-serif">Our Guiding Principles</h2>
            <p className="text-xl text-steel max-w-3xl mx-auto luxury-sans font-light">
              The unwavering values that define every decision, every relationship, and every outcome we deliver
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <ScrollReveal key={value.title} delay={index * 100}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent-blue to-royal rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-medium text-navy mb-4 luxury-serif">{value.title}</h3>
                    <p className="text-steel luxury-sans font-light leading-relaxed">{value.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <OwnersSection />

      {/* Credentials Section */}
      <CredentialsSection />

      <Footer />
    </div>
  );
}