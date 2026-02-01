import { Link } from "wouter";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const serviceLinks = [
    { name: "Investment Advisory", href: "/services" },
    { name: "Corporate Finance", href: "/services" },
    { name: "Wealth Management", href: "/services" },
    { name: "Risk Management", href: "/services" }
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about" },
    { name: "Consultation", href: "/consultation" },
    { name: "Contact", href: "/consultation" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-[#0a2d6d] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 lg:mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-normal mb-6 luxury-serif">PSM Financial Broker</h3>
            <p className="text-white/60 mb-8 luxury-sans font-light leading-relaxed">
              The UAE's most trusted guardian of wealth — where luxury meets legacy, and discretion defines excellence.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.href} 
                    className="w-10 h-10 border border-[#3ce9fd]/30 flex items-center justify-center hover:bg-[#3ce9fd] hover:border-[#3ce9fd] transition-all duration-300 group"
                    aria-label={social.label}
                    data-testid={`social-link-${index}`}
                  >
                    <IconComponent size={18} className="text-[#3ce9fd] group-hover:text-[#0a2d6d]" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm tracking-wider uppercase mb-6 luxury-sans text-[#3ce9fd]">Services</h4>
            <ul className="space-y-4 text-white/60">
              {serviceLinks.map((service, index) => (
                <li key={service.name}>
                  <Link href={service.href}>
                    <span 
                      className="hover:text-[#3ce9fd] transition-colors luxury-sans font-light cursor-pointer"
                      data-testid={`footer-service-${index}`}
                    >
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm tracking-wider uppercase mb-6 luxury-sans text-[#3ce9fd]">Company</h4>
            <ul className="space-y-4 text-white/60">
              {companyLinks.map((link, index) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span 
                      className="hover:text-[#3ce9fd] transition-colors luxury-sans font-light cursor-pointer"
                      data-testid={`footer-company-${index}`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm tracking-wider uppercase mb-6 luxury-sans text-[#3ce9fd]">Contact</h4>
            <ul className="space-y-4 text-white/60 luxury-sans font-light">
              <li>DIFC, Gate Building</li>
              <li>Level 15, Dubai, UAE</li>
              <li>+971 4 123 4567</li>
              <li>info@psmfinancial.ae</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 luxury-sans font-light text-sm text-center sm:text-left">
            © {new Date().getFullYear()} PSM Financial Broker. All rights reserved.
          </p>
          <p className="text-white/40 luxury-sans font-light text-xs text-center sm:text-right">
            Licensed by UAE Central Bank | SCA Regulated
          </p>
        </div>
      </div>
    </footer>
  );
}
