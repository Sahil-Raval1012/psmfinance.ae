import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Award, Users, TrendingUp, GraduationCap } from "lucide-react";

export default function OwnersSection() {
  const owners = [
    {
      name: "Mohammed Al-Rashid",
      title: "Founding Partner & Chief Executive",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      credentials: [
        "CFA Charter Holder",
        "MSc Finance, London Business School",
        "Former Goldman Sachs MENA"
      ],
      specialties: [
        "Private Wealth Management",
        "Strategic Asset Allocation",
        "Family Office Advisory"
      ],
      experience: "18+ Years",
      bio: "Mohammed brings unparalleled expertise in managing ultra-high-net-worth portfolios across the GCC region. His distinguished career spans institutional investment management and private banking, with a proven track record of preserving and growing generational wealth."
    },
    {
      name: "Sarah Al-Maktoum",
      title: "Managing Partner & Chief Investment Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616c06ab4e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      credentials: [
        "CFA Charter Holder",
        "MBA, INSEAD Abu Dhabi",
        "Former JP Morgan Private Bank"
      ],
      specialties: [
        "Alternative Investments",
        "Risk Management",
        "ESG Investment Strategies"
      ],
      experience: "15+ Years",
      bio: "Sarah specializes in sophisticated investment strategies and alternative asset classes. Her expertise in structured products and private equity has consistently delivered exceptional returns while maintaining rigorous risk management standards for our most discerning clients."
    }
  ];

  return (
    <section id="owners" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-navy mb-6 luxury-serif tracking-wide">Meet Your Trusted Advisors</h2>
          <p className="text-xl text-steel max-w-3xl mx-auto luxury-sans font-light">
            Led by two distinguished professionals whose combined expertise and unwavering integrity have earned the trust of the UAE's most prominent families and institutions
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {owners.map((owner, index) => (
            <ScrollReveal key={owner.name} delay={index * 200}>
              <div className="bg-gradient-to-br from-light-blue to-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="relative mb-6">
                    <img 
                      src={owner.image} 
                      alt={owner.name}
                      className="w-32 h-32 rounded-full object-cover shadow-lg ring-4 ring-accent-blue/20"
                      data-testid={`owner-image-${index}`}
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent-blue rounded-full flex items-center justify-center">
                      <Award size={20} className="text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-medium text-navy mb-2 luxury-serif">{owner.name}</h3>
                  <p className="text-accent-blue font-medium mb-4 luxury-sans">{owner.title}</p>
                  
                  <div className="flex items-center gap-4 text-steel mb-6">
                    <div className="flex items-center gap-2">
                      <TrendingUp size={16} className="text-accent-blue" />
                      <span className="text-sm luxury-sans font-medium">{owner.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-navy mb-3 luxury-serif flex items-center gap-2">
                      <GraduationCap size={20} className="text-accent-blue" />
                      Credentials
                    </h4>
                    <ul className="space-y-2">
                      {owner.credentials.map((credential, credIndex) => (
                        <li key={credIndex} className="text-steel luxury-sans font-light flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent-blue rounded-full"></div>
                          {credential}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-navy mb-3 luxury-serif flex items-center gap-2">
                      <Users size={20} className="text-accent-blue" />
                      Specializations
                    </h4>
                    <ul className="space-y-2">
                      {owner.specialties.map((specialty, specIndex) => (
                        <li key={specIndex} className="text-steel luxury-sans font-light flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent-blue rounded-full"></div>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-steel luxury-sans font-light leading-relaxed">
                      {owner.bio}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex justify-center">
                    <button 
                      className="bg-navy hover:bg-royal text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 luxury-sans"
                      data-testid={`contact-${owner.name.toLowerCase().replace(' ', '-')}`}
                    >
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}