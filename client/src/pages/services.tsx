import { Link } from "wouter";
import { ArrowLeft, Shield, TrendingUp, Users, Building2, Briefcase, Target, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    title: "Wealth Protection",
    description: "Comprehensive strategies to safeguard and preserve your assets for future generations.",
    features: ["Asset Protection Planning", "Risk Management", "Insurance Solutions", "Estate Planning"]
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Expert guidance on building and managing diversified investment portfolios.",
    features: ["Portfolio Management", "Market Analysis", "Alternative Investments", "Fixed Income Strategies"]
  },
  {
    icon: Users,
    title: "Family Office Services",
    description: "Tailored solutions for ultra-high-net-worth families and their unique needs.",
    features: ["Succession Planning", "Philanthropy Advisory", "Family Governance", "Consolidated Reporting"]
  },
  {
    icon: Building2,
    title: "Corporate Advisory",
    description: "Strategic financial solutions for businesses and institutional clients.",
    features: ["Mergers & Acquisitions", "Capital Raising", "Corporate Restructuring", "Strategic Planning"]
  },
  {
    icon: Briefcase,
    title: "Private Banking",
    description: "Exclusive banking services designed for discerning high-net-worth individuals.",
    features: ["Personalized Banking", "Credit Solutions", "Foreign Exchange", "Precious Metals"]
  },
  {
    icon: Target,
    title: "Tax Optimization",
    description: "Legally minimize tax liabilities while maximizing wealth preservation.",
    features: ["Tax Planning", "Cross-Border Strategies", "Compliance Advisory", "Structure Optimization"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-psm-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-psm-cyan rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-psm-cyan rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-psm-cyan mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl md:text-5xl text-white luxury-serif mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/80 luxury-sans max-w-2xl">
            Comprehensive financial solutions tailored for the UAE's most discerning clients. 
            Experience excellence in wealth management and advisory services.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-psm-cyan luxury-sans text-sm tracking-widest uppercase">What We Offer</span>
            <h2 className="text-3xl md:text-4xl text-psm-navy luxury-serif mt-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-steel mt-4 max-w-2xl mx-auto luxury-sans">
              From wealth protection to corporate advisory, we provide end-to-end financial services 
              designed to meet your unique requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-psm-navy/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-psm-cyan/20 transition-colors">
                  <service.icon className="w-7 h-7 text-psm-navy group-hover:text-psm-cyan transition-colors" />
                </div>
                
                <h3 className="text-xl text-psm-navy luxury-serif mb-3">{service.title}</h3>
                <p className="text-steel luxury-sans mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-steel luxury-sans">
                      <ChevronRight className="w-4 h-4 text-psm-cyan mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-psm-navy to-[#0a1f4d]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl text-white luxury-serif mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 luxury-sans max-w-2xl mx-auto mb-8">
            Schedule a consultation with our expert advisors and discover how we can help 
            you achieve your financial goals.
          </p>
          <Link href="/consultation">
            <Button className="bg-psm-cyan text-psm-navy hover:bg-white px-8 py-6 text-lg luxury-sans">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-psm-navy py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60 luxury-sans text-sm">
            © {new Date().getFullYear()} PSM Financial Broker. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
