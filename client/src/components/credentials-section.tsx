import { Shield, Award, Users, TrendingUp, CheckCircle, Star } from "lucide-react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CredentialsSection() {
  const credentials = [
    {
      icon: Shield,
      title: "UAE Central Bank Licensed",
      description: "Fully regulated and authorized by the Central Bank of the UAE",
      badge: "License #2010-001"
    },
    {
      icon: Award,
      title: "Dubai Financial Services Authority",
      description: "DFSA regulated for institutional and high-net-worth clients",
      badge: "DFSA Certified"
    },
    {
      icon: Star,
      title: "ISO 27001 Certified",
      description: "International security management standards compliance",
      badge: "Security Assured"
    }
  ];

  const achievements = [
    {
      number: "AED 2.5B+",
      label: "Assets Under Management",
      description: "Trusted stewardship of UAE's elite wealth"
    },
    {
      number: "500+",
      label: "Prestigious Families Served",
      description: "Multi-generational relationships of trust"
    },
    {
      number: "98.7%",
      label: "Client Retention Rate",
      description: "Exceptional service and results"
    },
    {
      number: "15+",
      label: "Years of Excellence",
      description: "Proven track record in UAE markets"
    }
  ];

  const awards = [
    "Best Private Banking UAE 2023",
    "Excellence in Wealth Management 2022",
    "Outstanding Client Service Award 2023",
    "UAE Financial Innovation Leader 2022"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-navy via-royal to-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 luxury-serif tracking-wide">Trusted by Excellence</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto luxury-sans font-light">
            Our credentials, awards, and regulatory compliance demonstrate unwavering commitment to the highest standards of financial excellence and client protection.
          </p>
        </ScrollReveal>

        {/* Regulatory Credentials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {credentials.map((credential, index) => {
            const IconComponent = credential.icon;
            return (
              <ScrollReveal key={credential.title} delay={index * 100}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
                  <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={28} />
                  </div>
                  <div className="bg-accent-blue text-white text-xs font-medium px-3 py-1 rounded-full inline-block mb-3 luxury-sans">
                    {credential.badge}
                  </div>
                  <h3 className="text-xl font-medium mb-3 luxury-serif">{credential.title}</h3>
                  <p className="opacity-80 luxury-sans font-light">{credential.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Key Statistics */}
        <ScrollReveal className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.label} className="text-center">
                <div className="text-4xl md:text-5xl font-medium text-accent-blue mb-2 luxury-serif">
                  {achievement.number}
                </div>
                <div className="text-lg font-medium mb-2 luxury-sans">
                  {achievement.label}
                </div>
                <p className="text-sm opacity-80 luxury-sans font-light">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Awards */}
        <ScrollReveal>
          <div className="text-center">
            <h3 className="text-2xl font-medium mb-8 luxury-serif">Recent Recognition</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {awards.map((award, index) => (
                <div key={award} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircle size={20} className="text-accent-blue mr-2" />
                    <span className="text-sm font-medium luxury-sans">{award}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent-blue opacity-5 rounded-full animate-float" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white opacity-5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
}