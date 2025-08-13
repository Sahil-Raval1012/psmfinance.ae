import { Award, Users, TrendingUp } from "lucide-react";
import { ScrollReveal, useParallax } from "@/hooks/use-scroll-reveal";

export default function AboutSection() {
  const parallaxOffset = useParallax();
  
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-navy to-royal text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${parallaxOffset * 0.3}px)`,
            height: '120%'
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" delay={100}>
            <h2 className="text-4xl md:text-5xl font-medium mb-6 luxury-serif tracking-wide">The Pinnacle of Financial Trust</h2>
            <p className="text-xl mb-8 opacity-90 luxury-sans font-light">
              For over a decade, PSM Financial Broker has been the guardian of the UAE's most prestigious fortunes. Our unwavering commitment to discretion, excellence, and fiduciary responsibility has earned us the trust of the region's most influential families and corporations.
            </p>
            
            <div className="space-y-6">
              <ScrollReveal direction="up" delay={300}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0 hover-3d">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 luxury-sans">Exclusive Market Mastery</h3>
                    <p className="opacity-80 luxury-sans font-light">Privileged access to elite investment opportunities with insider knowledge of UAE's most lucrative financial corridors and regulatory landscapes.</p>
                  </div>
                </div>
              </ScrollReveal>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 luxury-sans">Legacy of Trust</h3>
                  <p className="opacity-80 luxury-sans font-light">Multi-generational relationships built on absolute confidentiality, uncompromising integrity, and a heritage of safeguarding family wealth.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 luxury-sans">Exceptional Performance</h3>
                  <p className="opacity-80 luxury-sans font-light">An impeccable portfolio of achievements, consistently outperforming market benchmarks while preserving capital with institutional-grade risk management.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="PSM Financial Broker Team" 
              className="rounded-2xl shadow-2xl w-full"
              data-testid="about-team-image"
            />
            
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -left-8 bg-white text-navy p-6 rounded-2xl shadow-2xl">
              <div className="text-3xl font-medium text-accent-blue luxury-serif">10+</div>
              <div className="text-sm font-medium luxury-sans">Years Experience</div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-accent-blue text-white p-6 rounded-2xl shadow-2xl">
              <div className="text-3xl font-medium luxury-serif">500+</div>
              <div className="text-sm font-medium luxury-sans">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-accent-blue opacity-10 rounded-full animate-float" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-white opacity-10 rounded-full animate-float" style={{ animationDelay: '3s' }} />
    </section>
  );
}
