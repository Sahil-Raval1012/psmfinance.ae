import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Award, Users, TrendingUp, GraduationCap } from "lucide-react";
import { useImmersiveEffects, useParticleSystem } from "@/hooks/use-immersive-effects";

export default function OwnersSection() {
  const containerRef = useImmersiveEffects();
  useParticleSystem(containerRef);

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
    <section ref={containerRef} id="owners" className="py-32 bg-gradient-to-br from-platinum via-light-blue to-white relative overflow-hidden parallax-container">
      {/* Premium background pattern with luxury texture */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='m0 60 60-60h-60v60zm60 0v-60h-60l60 60z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Floating luxury elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gold-accent opacity-8 rounded-full animate-float blur-xl" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent-blue opacity-10 rounded-full animate-float blur-lg" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-gold-accent/20 rounded-full px-8 py-4 mb-8">
            <Award className="text-gold-accent" size={24} />
            <span className="luxury-sans-medium text-steel tracking-wide">DISTINGUISHED LEADERSHIP</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-medium text-gradient-luxury mb-8 luxury-serif-bold tracking-tight">
            Meet Your <span className="text-gradient-gold">Trusted Advisors</span>
          </h2>
          <p className="text-2xl text-charcoal max-w-4xl mx-auto luxury-sans font-light leading-relaxed">
            Led by two distinguished professionals whose combined expertise and <em className="text-gold-accent luxury-serif">unwavering integrity</em> have earned the trust of the UAE's most prominent families and institutions
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {owners.map((owner, index) => (
            <ScrollReveal key={owner.name} delay={index * 200}>
              <div className="luxury-card bg-gradient-to-br from-white/90 via-white/95 to-platinum/50 rounded-3xl p-10 shadow-2xl border border-white/20 backdrop-blur-sm hover:scale-105 transition-all duration-700 hover:shadow-3xl">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="relative mb-6">
                    <img 
                      src={owner.image} 
                      alt={owner.name}
                      className="w-40 h-40 rounded-full object-cover shadow-2xl ring-4 ring-gold-accent/30 filter brightness-110 contrast-105"
                      data-testid={`owner-image-${index}`}
                    />
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-gold-accent to-accent-blue rounded-full flex items-center justify-center shadow-lg">
                      <Award size={24} className="text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-semibold text-gradient-luxury mb-3 luxury-serif-bold tracking-tight" data-testid={`owner-name-${index}`}>
                    {owner.name}
                  </h3>
                  <p className="text-gold-accent font-medium mb-6 luxury-sans-medium tracking-wide text-lg" data-testid={`owner-title-${index}`}>
                    {owner.title}
                  </p>
                  
                  <div className="flex items-center justify-center gap-3 text-charcoal mb-8 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gold-accent/20">
                    <TrendingUp size={18} className="text-gold-accent" />
                    <span className="luxury-sans-medium font-medium">{owner.experience}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-medium text-gradient-luxury mb-4 luxury-serif-bold flex items-center gap-3">
                      <GraduationCap size={22} className="text-gold-accent" />
                      Credentials
                    </h4>
                    <ul className="space-y-3">
                      {owner.credentials.map((credential, credIndex) => (
                        <li key={credIndex} className="text-charcoal luxury-sans flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-gold-accent to-accent-blue rounded-full"></div>
                          <span className="font-medium">{credential}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium text-gradient-luxury mb-4 luxury-serif-bold flex items-center gap-3">
                      <Users size={22} className="text-gold-accent" />
                      Specializations
                    </h4>
                    <ul className="space-y-3">
                      {owner.specialties.map((specialty, specIndex) => (
                        <li key={specIndex} className="text-charcoal luxury-sans flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-gold-accent to-accent-blue rounded-full"></div>
                          <span className="font-medium">{specialty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-charcoal luxury-sans leading-relaxed text-lg font-light">
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