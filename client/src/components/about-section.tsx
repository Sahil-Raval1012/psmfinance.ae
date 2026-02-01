import { Award, Users, TrendingUp } from "lucide-react";
import { ScrollReveal, useParallax } from "@/hooks/use-scroll-reveal";

export default function AboutSection() {
  const parallaxOffset = useParallax();
  
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-[#0a2d6d] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3ce9fd]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3ce9fd]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-px h-64 bg-gradient-to-b from-transparent via-[#3ce9fd]/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left" delay={100}>
            <span className="inline-block px-4 py-1.5 border border-[#3ce9fd]/30 text-[#3ce9fd] text-xs tracking-[0.25em] uppercase mb-6 luxury-sans">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-8 luxury-serif leading-tight">
              The Pinnacle of Financial Trust
            </h2>
            <p className="text-lg sm:text-xl mb-10 text-white/70 luxury-sans font-light leading-relaxed">
              For over a decade, PSM Financial Broker has been the guardian of the UAE's most prestigious fortunes. Our unwavering commitment to discretion, excellence, and fiduciary responsibility has earned us the trust of the region's most influential families and corporations.
            </p>
            
            <div className="space-y-8">
              <ScrollReveal direction="up" delay={300}>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#3ce9fd] flex items-center justify-center flex-shrink-0">
                    <Award size={24} className="text-[#0a2d6d]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-2 luxury-serif">Exclusive Market Mastery</h3>
                    <p className="text-white/60 luxury-sans font-light leading-relaxed">Privileged access to elite investment opportunities with insider knowledge of UAE's most lucrative financial corridors.</p>
                  </div>
                </div>
              </ScrollReveal>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 border border-[#3ce9fd]/30 flex items-center justify-center flex-shrink-0">
                  <Users size={24} className="text-[#3ce9fd]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-normal mb-2 luxury-serif">Legacy of Trust</h3>
                  <p className="text-white/60 luxury-sans font-light leading-relaxed">Multi-generational relationships built on absolute confidentiality and uncompromising integrity.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 border border-[#3ce9fd]/30 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={24} className="text-[#3ce9fd]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-normal mb-2 luxury-serif">Exceptional Performance</h3>
                  <p className="text-white/60 luxury-sans font-light leading-relaxed">An impeccable portfolio of achievements, consistently outperforming market benchmarks.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={200}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="PSM Financial Broker" 
                  className="w-full h-full object-cover"
                  data-testid="about-team-image"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-white p-6 sm:p-8 shadow-2xl">
                <div className="text-3xl sm:text-4xl font-normal text-[#0a2d6d] luxury-serif">15+</div>
                <div className="text-sm text-gray-500 luxury-sans tracking-wider uppercase">Years Excellence</div>
              </div>
              
              <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-[#3ce9fd] p-6 sm:p-8 shadow-2xl">
                <div className="text-3xl sm:text-4xl font-normal text-[#0a2d6d] luxury-serif">500+</div>
                <div className="text-sm text-[#0a2d6d]/70 luxury-sans tracking-wider uppercase">Elite Clients</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
