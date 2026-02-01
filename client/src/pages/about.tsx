import { Link } from "wouter";
import { ArrowLeft, Award, Users, Globe, Shield, CheckCircle, Star, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "15+", label: "Years of Excellence", description: "Trusted expertise since 2009" },
  { value: "500+", label: "Elite Clients", description: "Serving distinguished individuals" },
  { value: "AED 10B+", label: "Assets Managed", description: "Proven track record" },
  { value: "100%", label: "Client Retention", description: "Unwavering loyalty" }
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our dealings, ensuring complete transparency and trust."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue perfection in every aspect of our service, delivering results that exceed expectations."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build lasting relationships, treating every client's success as our own personal mission."
  },
  {
    icon: Globe,
    title: "Vision",
    description: "We combine global perspective with local expertise to navigate complex financial landscapes."
  }
];

const credentials = [
  "Licensed by the Securities and Commodities Authority (SCA)",
  "Registered with the UAE Central Bank",
  "Member of the Emirates Securities and Commodities Authority",
  "ISO 27001 Certified for Information Security",
  "Compliance with International AML/CFT Standards"
];

const team = [
  {
    name: "Ahmed Al Rashid",
    role: "Founder & Chairman",
    description: "30+ years in wealth management across GCC",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Investment Officer",
    description: "Former VP at Goldman Sachs",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Mohammed Al Maktoum",
    role: "Director of Private Wealth",
    description: "Expert in UHNW family office services",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#0a2d6d] min-h-[60vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3ce9fd]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3ce9fd]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 lg:py-32">
          <Link href="/">
            <Button variant="ghost" className="text-white/70 hover:text-[#3ce9fd] hover:bg-transparent mb-8 -ml-4 luxury-sans text-sm tracking-wider">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 border border-[#3ce9fd]/30 text-[#3ce9fd] text-xs tracking-[0.25em] uppercase mb-6 luxury-sans">
              About Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white luxury-serif font-normal mb-6 leading-tight">
              A Legacy of Financial Excellence
            </h1>
            <p className="text-lg sm:text-xl text-white/70 luxury-sans font-light max-w-2xl leading-relaxed">
              Serving the UAE's most distinguished individuals and institutions with 
              unwavering dedication and expertise since 2009.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 border border-[#0a2d6d]/20 text-[#3ce9fd] text-xs tracking-[0.25em] uppercase mb-6 luxury-sans">
                Our Story
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0a2d6d] luxury-serif font-normal mb-8 leading-tight">
                Building Wealth, Preserving Legacy
              </h2>
              <div className="space-y-6 text-gray-600 luxury-sans font-light leading-relaxed">
                <p>
                  PSM Financial Broker was founded with a singular vision: to provide the UAE's 
                  most discerning individuals and institutions with world-class financial services 
                  that combine global expertise with local understanding.
                </p>
                <p>
                  Our team of seasoned professionals brings together decades of experience from 
                  leading global financial institutions, offering a unique blend of international 
                  best practices and deep regional knowledge.
                </p>
                <p>
                  Today, we are proud to serve some of the region's most prominent families, 
                  businesses, and institutional investors, helping them navigate the complexities 
                  of the financial world with confidence and clarity.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[#0a2d6d] to-[#061a40] p-6 sm:p-8 text-center group hover:from-[#0a2d6d] hover:to-[#3ce9fd]/20 transition-all duration-500"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl text-[#3ce9fd] luxury-serif mb-2">{stat.value}</div>
                  <div className="text-white luxury-sans text-sm mb-1">{stat.label}</div>
                  <div className="text-white/40 luxury-sans text-xs">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 border border-[#0a2d6d]/20 text-[#3ce9fd] text-xs tracking-[0.25em] uppercase mb-6 luxury-sans">
              Our Values
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0a2d6d] luxury-serif font-normal">
              The Principles That Guide Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 border border-[#3ce9fd]/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#3ce9fd] group-hover:border-[#3ce9fd] transition-all duration-500">
                  <value.icon className="w-7 h-7 text-[#3ce9fd] group-hover:text-[#0a2d6d] transition-colors" />
                </div>
                <h3 className="text-lg sm:text-xl text-[#0a2d6d] luxury-serif mb-3">{value.title}</h3>
                <p className="text-gray-500 luxury-sans font-light text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 border border-[#0a2d6d]/20 text-[#3ce9fd] text-xs tracking-[0.25em] uppercase mb-6 luxury-sans">
              Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0a2d6d] luxury-serif font-normal">
              Meet Our Team
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2d6d]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl text-[#0a2d6d] luxury-serif mb-1">{member.name}</h3>
                <p className="text-[#3ce9fd] luxury-sans text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 luxury-sans font-light text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 border border-[#0a2d6d]/20 text-[#3ce9fd] text-xs tracking-[0.25em] uppercase mb-6 luxury-sans">
                Regulatory Compliance
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0a2d6d] luxury-serif font-normal mb-8 leading-tight">
                Licensed & Regulated
              </h2>
              <p className="text-gray-600 luxury-sans font-light mb-8 leading-relaxed">
                PSM Financial Broker operates under the strict regulatory oversight of the UAE's 
                financial authorities. Our commitment to compliance ensures that your investments 
                are protected and managed according to the highest international standards.
              </p>
              
              <ul className="space-y-4">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-[#3ce9fd] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 luxury-sans font-light">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#0a2d6d] p-8 sm:p-10 lg:p-12">
              <Building className="w-10 h-10 text-[#3ce9fd] mb-6" />
              <h3 className="text-xl sm:text-2xl text-white luxury-serif mb-6">Why Choose PSM?</h3>
              <ul className="space-y-4">
                {[
                  "Personalized attention from senior advisors",
                  "Access to exclusive investment opportunities",
                  "Transparent fee structures with no hidden costs",
                  "24/7 dedicated client support",
                  "State-of-the-art technology platform"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#3ce9fd] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/70 luxury-sans font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-32 bg-[#0a2d6d] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-[#3ce9fd]/30 to-transparent"></div>
          <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-[#3ce9fd]/30 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 border border-[#3ce9fd]/30 text-[#3ce9fd] text-xs tracking-[0.25em] uppercase mb-6 luxury-sans">
            Join Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white luxury-serif font-normal mb-6 max-w-3xl mx-auto leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/60 luxury-sans font-light max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            Join the distinguished circle of clients who trust PSM Financial Broker 
            with their financial future.
          </p>
          <Link href="/consultation">
            <Button className="bg-[#3ce9fd] text-[#0a2d6d] hover:bg-white px-10 sm:px-12 py-6 text-base luxury-sans font-normal rounded-none tracking-wider">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-[#0a2d6d] py-8 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/40 luxury-sans text-sm">
            © {new Date().getFullYear()} PSM Financial Broker. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
