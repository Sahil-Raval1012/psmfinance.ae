import { Link } from "wouter";
import { ArrowLeft, Shield, TrendingUp, Users, Building2, Briefcase, Target, ChevronRight, Star, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    title: "Wealth Protection",
    description: "Comprehensive strategies to safeguard and preserve your assets for future generations.",
    features: ["Asset Protection Planning", "Risk Management", "Insurance Solutions", "Estate Planning"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Expert guidance on building and managing diversified investment portfolios.",
    features: ["Portfolio Management", "Market Analysis", "Alternative Investments", "Fixed Income Strategies"],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Users,
    title: "Family Office Services",
    description: "Tailored solutions for ultra-high-net-worth families and their unique needs.",
    features: ["Succession Planning", "Philanthropy Advisory", "Family Governance", "Consolidated Reporting"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Building2,
    title: "Corporate Advisory",
    description: "Strategic financial solutions for businesses and institutional clients.",
    features: ["Mergers & Acquisitions", "Capital Raising", "Corporate Restructuring", "Strategic Planning"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Briefcase,
    title: "Private Banking",
    description: "Exclusive banking services designed for discerning high-net-worth individuals.",
    features: ["Personalized Banking", "Credit Solutions", "Foreign Exchange", "Precious Metals"],
    image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Target,
    title: "Tax Optimization",
    description: "Legally minimize tax liabilities while maximizing wealth preservation.",
    features: ["Tax Planning", "Cross-Border Strategies", "Compliance Advisory", "Structure Optimization"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const stats = [
  { icon: Star, value: "15+", label: "Years of Excellence" },
  { icon: Users, value: "500+", label: "Elite Clients" },
  { icon: Globe, value: "AED 10B+", label: "Assets Managed" },
  { icon: Award, value: "100%", label: "Client Retention" }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#0a2d6d] min-h-[60vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3ce9fd]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3ce9fd]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#3ce9fd]/20 to-transparent -translate-x-1/2"></div>
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
              Our Expertise
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white luxury-serif font-normal mb-6 leading-tight">
              Comprehensive Financial Solutions
            </h1>
            <p className="text-lg sm:text-xl text-white/70 luxury-sans font-light max-w-2xl leading-relaxed">
              Tailored strategies designed exclusively for the UAE's most discerning clients, 
              combining global expertise with local insight.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 lg:p-8 border border-gray-100 hover:border-[#3ce9fd]/30 transition-colors duration-500">
                <stat.icon className="w-6 h-6 text-[#3ce9fd] mx-auto mb-4" />
                <div className="text-2xl sm:text-3xl lg:text-4xl text-[#0a2d6d] luxury-serif mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500 luxury-sans tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-100 hover:border-[#3ce9fd]/30 transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2d6d]/80 via-[#0a2d6d]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-12 h-12 bg-[#3ce9fd] flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-[#0a2d6d]" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl text-[#0a2d6d] luxury-serif mb-3">{service.title}</h3>
                  <p className="text-gray-600 luxury-sans font-light mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500 luxury-sans">
                        <ChevronRight className="w-4 h-4 text-[#3ce9fd] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/consultation">
                    <span className="inline-flex items-center text-[#0a2d6d] hover:text-[#3ce9fd] transition-colors luxury-sans text-sm tracking-wider uppercase cursor-pointer">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
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
            Get Started
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white luxury-serif font-normal mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your Journey to Financial Excellence
          </h2>
          <p className="text-white/60 luxury-sans font-light max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            Schedule a confidential consultation with our senior advisors and discover 
            personalized strategies for your wealth.
          </p>
          <Link href="/consultation">
            <Button className="bg-[#3ce9fd] text-[#0a2d6d] hover:bg-white px-10 sm:px-12 py-6 text-base luxury-sans font-normal rounded-none tracking-wider">
              Book a Consultation
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
