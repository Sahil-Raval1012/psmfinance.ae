import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp, Send, CheckCircle, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  {
    question: "What is the minimum investment amount?",
    answer: "Our services are designed for high-net-worth individuals with investable assets starting from AED 5 million. For institutional clients, we offer customized solutions based on specific requirements."
  },
  {
    question: "How are your fees structured?",
    answer: "We believe in complete transparency. Our fees are based on a tiered structure aligned with assets under management, with all costs clearly outlined before engagement. There are no hidden fees."
  },
  {
    question: "Do I need to visit your office in person?",
    answer: "While we welcome in-person meetings at our DIFC office, we offer comprehensive virtual consultations for clients across the UAE and internationally. Our relationship managers can also arrange private meetings at your preferred location."
  },
  {
    question: "How quickly can I expect a response?",
    answer: "Our team responds to all consultation requests within 24 hours. Priority clients receive immediate attention from their dedicated relationship manager."
  },
  {
    question: "Is my information kept confidential?",
    answer: "Absolutely. Client confidentiality is paramount. We adhere to the strictest data protection standards, and all communications are encrypted and secure. We never share client information with third parties."
  },
  {
    question: "What regulatory oversight do you operate under?",
    answer: "PSM Financial Broker is fully licensed by the Securities and Commodities Authority (SCA) and registered with the UAE Central Bank, ensuring the highest standards of regulatory compliance and client protection."
  }
];

const packages = [
  {
    name: "Essential",
    price: "AED 15,000",
    period: "per quarter",
    description: "Ideal for individuals beginning their wealth journey",
    features: [
      "Initial portfolio assessment",
      "Investment strategy consultation",
      "Quarterly performance reviews",
      "Email and phone support",
      "Market insights newsletter"
    ],
    highlighted: false
  },
  {
    name: "Premium",
    price: "AED 35,000",
    period: "per quarter",
    description: "Comprehensive wealth management for HNW individuals",
    features: [
      "Full wealth analysis & planning",
      "Personalized investment strategy",
      "Monthly performance reviews",
      "Dedicated relationship manager",
      "Access to exclusive opportunities",
      "Tax optimization guidance",
      "Priority support 24/7"
    ],
    highlighted: true
  },
  {
    name: "Elite",
    price: "Custom",
    period: "tailored pricing",
    description: "Complete family office services for UHNW clients",
    features: [
      "Full family office services",
      "Multi-generational planning",
      "Succession planning",
      "Philanthropy advisory",
      "Concierge lifestyle services",
      "Global investment access",
      "On-demand expert consultations"
    ],
    highlighted: false
  }
];

const benefits = [
  { icon: Shield, title: "Confidential", description: "Your privacy is our priority" },
  { icon: Award, title: "Expert Guidance", description: "Senior advisors only" },
  { icon: Users, title: "Personalized", description: "Tailored to your needs" }
];

export default function Consultation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    investmentRange: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Request Submitted",
      description: "Our team will contact you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#0a2d6d] min-h-[50vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3ce9fd]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3ce9fd]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28">
          <Link href="/">
            <Button variant="ghost" className="text-white/70 hover:text-[#3ce9fd] hover:bg-transparent mb-8 -ml-4 luxury-sans text-sm tracking-wider">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 border border-[#3ce9fd]/30 text-[#3ce9fd] text-xs tracking-[0.25em] uppercase mb-6 luxury-sans">
              Get Started
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white luxury-serif font-normal mb-6 leading-tight">
              Book Your Private Consultation
            </h1>
            <p className="text-lg sm:text-xl text-white/70 luxury-sans font-light leading-relaxed">
              Take the first step towards securing your financial future with a 
              confidential consultation with our expert advisors.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 border border-gray-100 hover:border-[#3ce9fd]/30 transition-all duration-500">
                <benefit.icon className="w-8 h-8 text-[#3ce9fd] mx-auto mb-4" />
                <h3 className="text-[#0a2d6d] luxury-serif text-lg mb-1">{benefit.title}</h3>
                <p className="text-gray-500 luxury-sans text-sm font-light">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl text-[#0a2d6d] luxury-serif font-normal mb-8">
                Request a Consultation
              </h2>

              {isSubmitted ? (
                <div className="bg-[#0a2d6d] p-8 sm:p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-[#3ce9fd] mx-auto mb-6" />
                  <h3 className="text-2xl text-white luxury-serif mb-4">Thank You</h3>
                  <p className="text-white/70 luxury-sans font-light max-w-md mx-auto">
                    Your consultation request has been submitted successfully. Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-[#0a2d6d] luxury-sans mb-2 tracking-wider uppercase">First Name *</label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="border-gray-200 focus:border-[#3ce9fd] focus:ring-[#3ce9fd] rounded-none py-6 luxury-sans"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#0a2d6d] luxury-sans mb-2 tracking-wider uppercase">Last Name *</label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="border-gray-200 focus:border-[#3ce9fd] focus:ring-[#3ce9fd] rounded-none py-6 luxury-sans"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#0a2d6d] luxury-sans mb-2 tracking-wider uppercase">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-gray-200 focus:border-[#3ce9fd] focus:ring-[#3ce9fd] rounded-none py-6 luxury-sans"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#0a2d6d] luxury-sans mb-2 tracking-wider uppercase">Phone Number *</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-gray-200 focus:border-[#3ce9fd] focus:ring-[#3ce9fd] rounded-none py-6 luxury-sans"
                      placeholder="+971 50 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#0a2d6d] luxury-sans mb-2 tracking-wider uppercase">Investment Range</label>
                    <select
                      name="investmentRange"
                      value={formData.investmentRange}
                      onChange={handleInputChange}
                      className="w-full border border-gray-200 px-4 py-4 focus:border-[#3ce9fd] focus:ring-[#3ce9fd] luxury-sans bg-white"
                    >
                      <option value="">Select a range</option>
                      <option value="5-10m">AED 5M - 10M</option>
                      <option value="10-25m">AED 10M - 25M</option>
                      <option value="25-50m">AED 25M - 50M</option>
                      <option value="50-100m">AED 50M - 100M</option>
                      <option value="100m+">AED 100M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-[#0a2d6d] luxury-sans mb-2 tracking-wider uppercase">Tell Us About Your Goals</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="border-gray-200 focus:border-[#3ce9fd] focus:ring-[#3ce9fd] rounded-none luxury-sans"
                      placeholder="Describe your investment goals, timeline, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0a2d6d] hover:bg-[#3ce9fd] hover:text-[#0a2d6d] text-white py-6 text-base luxury-sans font-normal transition-all duration-500 rounded-none tracking-wider"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Request
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-50 p-6 sm:p-8">
                <h3 className="text-lg text-[#0a2d6d] luxury-serif mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0a2d6d] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#3ce9fd]" />
                    </div>
                    <div>
                      <div className="text-[#0a2d6d] luxury-sans text-sm tracking-wider uppercase mb-1">Office</div>
                      <div className="text-gray-600 luxury-sans font-light">
                        DIFC, Gate Building<br />
                        Level 15, Dubai, UAE
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0a2d6d] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#3ce9fd]" />
                    </div>
                    <div>
                      <div className="text-[#0a2d6d] luxury-sans text-sm tracking-wider uppercase mb-1">Phone</div>
                      <div className="text-gray-600 luxury-sans font-light">+971 4 123 4567</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0a2d6d] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#3ce9fd]" />
                    </div>
                    <div>
                      <div className="text-[#0a2d6d] luxury-sans text-sm tracking-wider uppercase mb-1">Email</div>
                      <div className="text-gray-600 luxury-sans font-light">info@psmfinancial.ae</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0a2d6d] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#3ce9fd]" />
                    </div>
                    <div>
                      <div className="text-[#0a2d6d] luxury-sans text-sm tracking-wider uppercase mb-1">Hours</div>
                      <div className="text-gray-600 luxury-sans font-light">
                        Sun - Thu: 9:00 AM - 6:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0a2d6d] p-6 sm:p-8">
                <h3 className="text-lg text-white luxury-serif mb-4">Prefer a Call?</h3>
                <p className="text-white/60 luxury-sans font-light mb-6 text-sm leading-relaxed">
                  Our client services team is available during business hours to answer 
                  your questions and schedule appointments.
                </p>
                <a href="tel:+97141234567">
                  <Button className="w-full bg-[#3ce9fd] text-[#0a2d6d] hover:bg-white rounded-none py-5 luxury-sans tracking-wider">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 border border-[#0a2d6d]/20 text-[#3ce9fd] text-xs tracking-[0.25em] uppercase mb-6 luxury-sans">
              Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0a2d6d] luxury-serif font-normal mb-4">
              Advisory Packages
            </h2>
            <p className="text-gray-500 luxury-sans font-light max-w-xl mx-auto">
              Transparent pricing with no hidden fees
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`p-6 sm:p-8 ${
                  pkg.highlighted 
                    ? 'bg-[#0a2d6d] text-white ring-2 ring-[#3ce9fd]' 
                    : 'bg-white border border-gray-100'
                }`}
              >
                {pkg.highlighted && (
                  <span className="inline-block px-3 py-1 bg-[#3ce9fd] text-[#0a2d6d] text-xs tracking-[0.2em] uppercase mb-4 luxury-sans">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-xl sm:text-2xl luxury-serif mb-2 ${pkg.highlighted ? 'text-white' : 'text-[#0a2d6d]'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-2xl sm:text-3xl luxury-serif mb-1 ${pkg.highlighted ? 'text-[#3ce9fd]' : 'text-[#0a2d6d]'}`}>
                  {pkg.price}
                </div>
                <div className={`text-sm mb-4 ${pkg.highlighted ? 'text-white/50' : 'text-gray-400'}`}>
                  {pkg.period}
                </div>
                <p className={`text-sm mb-6 ${pkg.highlighted ? 'text-white/70' : 'text-gray-500'} luxury-sans font-light`}>
                  {pkg.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlighted ? 'text-[#3ce9fd]' : 'text-[#3ce9fd]'}`} />
                      <span className={`luxury-sans text-sm font-light ${pkg.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full rounded-none py-5 luxury-sans tracking-wider ${
                    pkg.highlighted 
                      ? 'bg-[#3ce9fd] text-[#0a2d6d] hover:bg-white' 
                      : 'bg-[#0a2d6d] text-white hover:bg-[#3ce9fd] hover:text-[#0a2d6d]'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 border border-[#0a2d6d]/20 text-[#3ce9fd] text-xs tracking-[0.25em] uppercase mb-6 luxury-sans">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0a2d6d] luxury-serif font-normal">
                Common Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-[#0a2d6d] luxury-sans pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#3ce9fd] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                      <p className="text-gray-600 luxury-sans font-light leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
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
