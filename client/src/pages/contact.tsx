import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { MapPin, Phone, Mail, Clock, Shield, Award } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Private Client Line",
      primary: "+971 4 425 7890",
      secondary: "Available 24/7 for existing clients",
      description: "Direct access to your relationship manager"
    },
    {
      icon: Mail,
      title: "Secure Communication",
      primary: "enquiries@psmfinancial.ae",
      secondary: "clientservices@psmfinancial.ae",
      description: "Encrypted email for confidential matters"
    },
    {
      icon: MapPin,
      title: "Dubai Financial District",
      primary: "Level 42, Emirates Financial Tower",
      secondary: "DIFC, Dubai, UAE",
      description: "By appointment only - Private client suites"
    },
    {
      icon: Clock,
      title: "Office Hours",
      primary: "Sunday - Thursday: 8:00 AM - 6:00 PM",
      secondary: "Friday: 8:00 AM - 12:00 PM",
      description: "Extended hours for international markets"
    }
  ];

  const officeLocations = [
    {
      city: "Dubai",
      address: "Level 42, Emirates Financial Tower, DIFC",
      phone: "+971 4 425 7890",
      type: "Headquarters & Private Client Suites",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      city: "Abu Dhabi",
      address: "Tower 2, Al Bateen Executive Offices",
      phone: "+971 2 694 8520",
      type: "Institutional Client Services",
      image: "https://images.unsplash.com/photo-1549180030-48bf079fb38a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const clientTypes = [
    {
      title: "Ultra-High-Net-Worth Individuals",
      description: "AED 50M+ investable assets",
      contact: "Contact: Mohammed Al-Rashid, Founding Partner",
      icon: Shield
    },
    {
      title: "High-Net-Worth Families",
      description: "AED 10M+ investable assets",
      contact: "Contact: Sarah Al-Maktoum, Managing Partner",
      icon: Award
    },
    {
      title: "Institutional Clients",
      description: "Corporations, foundations, family offices",
      contact: "Contact: Institutional Desk",
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen bg-white optima-font">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-navy via-royal to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="w-full h-full"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-medium mb-8 luxury-serif tracking-wide">
              Connect with <span className="text-accent-blue">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 luxury-sans font-light leading-relaxed">
              Begin your journey with the UAE's most trusted wealth management firm. Our team of distinguished professionals is ready to provide you with personalized, confidential consultation.
            </p>
            <button 
              className="bg-accent-blue hover:bg-royal text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 luxury-sans"
              data-testid="immediate-consultation"
            >
              Request Immediate Consultation
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-navy mb-6 luxury-serif">How to Reach Us</h2>
            <p className="text-xl text-steel max-w-3xl mx-auto luxury-sans font-light">
              Multiple channels designed for your convenience and confidentiality, ensuring seamless communication with our wealth management experts
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <ScrollReveal key={method.title} delay={index * 100}>
                  <div className="bg-gradient-to-br from-light-blue to-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-royal rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-navy mb-3 luxury-serif">{method.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="text-accent-blue font-medium luxury-sans">{method.primary}</div>
                      {method.secondary && (
                        <div className="text-steel text-sm luxury-sans font-light">{method.secondary}</div>
                      )}
                    </div>
                    <p className="text-steel luxury-sans font-light text-sm">{method.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Type Contact */}
      <section className="py-20 bg-gradient-to-br from-light-blue to-white">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-navy mb-6 luxury-serif">Personalized Client Services</h2>
            <p className="text-xl text-steel max-w-3xl mx-auto luxury-sans font-light">
              Each client category receives specialized attention from dedicated professionals who understand your unique requirements
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {clientTypes.map((clientType, index) => {
              const IconComponent = clientType.icon;
              return (
                <ScrollReveal key={clientType.title} delay={index * 100}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent-blue to-royal rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <IconComponent size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-medium text-navy mb-3 luxury-serif">{clientType.title}</h3>
                    <p className="text-accent-blue font-medium mb-4 luxury-sans">{clientType.description}</p>
                    <p className="text-steel luxury-sans font-light mb-6">{clientType.contact}</p>
                    <button 
                      className="bg-accent-blue hover:bg-royal text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 luxury-sans"
                      data-testid={`contact-${clientType.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Schedule Meeting
                    </button>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-navy mb-6 luxury-serif">Our Prestigious Locations</h2>
            <p className="text-xl text-steel max-w-3xl mx-auto luxury-sans font-light">
              Strategically positioned in the UAE's premier financial districts, our offices provide the perfect environment for confidential wealth discussions
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {officeLocations.map((location, index) => (
              <ScrollReveal key={location.city} delay={index * 200}>
                <div className="bg-gradient-to-br from-light-blue to-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64">
                    <img 
                      src={location.image}
                      alt={`${location.city} Office`}
                      className="w-full h-full object-cover"
                      data-testid={`office-image-${location.city.toLowerCase()}`}
                    />
                    <div className="absolute inset-0 bg-navy/20"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-lg font-medium text-navy luxury-serif">{location.city}</div>
                        <div className="text-accent-blue text-sm luxury-sans font-medium">{location.type}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin size={20} className="text-accent-blue flex-shrink-0 mt-1" />
                        <span className="text-steel luxury-sans font-light">{location.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={20} className="text-accent-blue flex-shrink-0" />
                        <span className="text-accent-blue font-medium luxury-sans">{location.phone}</span>
                      </div>
                    </div>
                    
                    <button 
                      className="w-full mt-6 bg-navy hover:bg-royal text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 luxury-sans"
                      data-testid={`visit-${location.city.toLowerCase()}`}
                    >
                      Schedule Office Visit
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Confidentiality Notice */}
      <section className="py-16 bg-gradient-to-br from-navy via-royal to-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Shield size={32} className="text-accent-blue mr-3" />
                <h3 className="text-2xl font-medium luxury-serif">Absolute Confidentiality Guaranteed</h3>
              </div>
              <p className="text-lg opacity-90 luxury-sans font-light leading-relaxed">
                All communications with PSM Financial Broker are protected by the highest standards of professional confidentiality and data security. Your privacy is our paramount concern, and all discussions are conducted under strict non-disclosure protocols in compliance with UAE banking secrecy laws and international privacy standards.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}