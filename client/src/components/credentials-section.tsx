import { Shield, Award, Star, CheckCircle } from "lucide-react";
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
      title: "Securities & Commodities Authority",
      description: "SCA regulated for institutional and high-net-worth clients",
      badge: "SCA Certified"
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
      number: "AED 10B+",
      label: "Assets Under Advisory",
      description: "Trusted stewardship of elite wealth"
    },
    {
      number: "500+",
      label: "Distinguished Clients",
      description: "Multi-generational relationships"
    },
    {
      number: "100%",
      label: "Client Retention",
      description: "Exceptional service excellence"
    },
    {
      number: "15+",
      label: "Years of Excellence",
      description: "Proven track record"
    }
  ];

  const awards = [
    "Best Private Banking UAE 2024",
    "Excellence in Wealth Management",
    "Outstanding Client Service Award",
    "Financial Innovation Leader"
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-[#0a2d6d] via-[#0a2d6d] to-[#061a40] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#3ce9fd]/10 via-transparent to-[#3ce9fd]/10"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#3ce9fd]/10 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3ce9fd]/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 border border-[#3ce9fd]/30 text-[#3ce9fd] text-xs tracking-[0.25em] uppercase mb-6 luxury-sans">
            Our Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6 luxury-serif leading-tight">
            Trusted by Excellence
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto luxury-sans font-light leading-relaxed">
            Our credentials, awards, and regulatory compliance demonstrate unwavering commitment 
            to the highest standards of financial excellence
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {credentials.map((credential, index) => {
            const IconComponent = credential.icon;
            return (
              <ScrollReveal key={credential.title} delay={index * 100}>
                <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 text-center border border-white/10 hover:border-[#3ce9fd]/30 transition-all duration-500 group">
                  <div className="w-16 h-16 bg-[#3ce9fd] flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={28} className="text-[#0a2d6d]" />
                  </div>
                  <div className="inline-block px-3 py-1 border border-[#3ce9fd]/30 text-[#3ce9fd] text-xs tracking-wider uppercase mb-4 luxury-sans">
                    {credential.badge}
                  </div>
                  <h3 className="text-lg sm:text-xl font-normal mb-3 luxury-serif">{credential.title}</h3>
                  <p className="text-white/50 luxury-sans font-light text-sm leading-relaxed">{credential.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="mb-16 lg:mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.label} className="text-center p-6 border border-white/5 hover:border-[#3ce9fd]/20 transition-colors">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3ce9fd] mb-3 luxury-serif">
                  {achievement.number}
                </div>
                <div className="text-sm sm:text-base font-normal mb-2 luxury-sans">
                  {achievement.label}
                </div>
                <p className="text-xs sm:text-sm text-white/40 luxury-sans font-light">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-normal mb-8 luxury-serif">Recent Recognition</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {awards.map((award, index) => (
                <div key={award} className="bg-white/5 p-4 sm:p-5 border border-white/5 hover:border-[#3ce9fd]/20 transition-colors">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle size={16} className="text-[#3ce9fd]" />
                    <span className="text-sm font-light luxury-sans">{award}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
