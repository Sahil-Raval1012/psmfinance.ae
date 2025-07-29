import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const serviceLinks = [
    "Investment Advisory",
    "Corporate Finance", 
    "Wealth Management",
    "Risk Management"
  ];

  const companyLinks = [
    "About Us",
    "Our Team",
    "Careers",
    "News & Insights"
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-navy text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-medium mb-6 luxury-serif">PSM FINANCIAL BROKER</h3>
            <p className="text-gray-300 mb-6 luxury-sans font-light">
              Premier financial brokerage services in the UAE, delivering excellence and trust in every client relationship.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.href} 
                    className="w-10 h-10 bg-accent-blue rounded-lg flex items-center justify-center hover:bg-royal transition-colors"
                    aria-label={social.label}
                    data-testid={`social-link-${index}`}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6 luxury-sans">Services</h4>
            <ul className="space-y-3 text-gray-300">
              {serviceLinks.map((service, index) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="hover:text-accent-blue transition-colors luxury-sans font-light"
                    data-testid={`footer-service-${index}`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6 luxury-sans">Company</h4>
            <ul className="space-y-3 text-gray-300">
              {companyLinks.map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="hover:text-accent-blue transition-colors luxury-sans font-light"
                    data-testid={`footer-company-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6 luxury-sans">Contact</h4>
            <ul className="space-y-3 text-gray-300 luxury-sans font-light">
              <li>Emirates Towers, Level 45</li>
              <li>Dubai, UAE</li>
              <li>+971 4 123 4567</li>
              <li>info@psmfinancial.ae</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p className="luxury-sans font-light">&copy; 2024 PSM Financial Broker. All rights reserved. Licensed and regulated by the UAE Central Bank.</p>
        </div>
      </div>
    </footer>
  );
}
