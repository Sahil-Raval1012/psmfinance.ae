import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  {
    question: "Do I need to be in the UAE to get guidance?",
    answer: "Not necessarily. PSM Financial Broker provides remote advisory support for most services. However, some in-person meetings may be beneficial for certain complex matters."
  },
  {
    question: "What is the minimum investment amount?",
    answer: "Our services are designed for high-net-worth individuals and institutions. The minimum investment threshold varies by service. Please contact us for specific requirements."
  },
  {
    question: "How are your fees structured?",
    answer: "We believe in transparent pricing. Our fees are clearly outlined upfront with no hidden costs. Fee structures vary based on the services you require and assets under management."
  },
  {
    question: "Is my information kept confidential?",
    answer: "Absolutely. Client confidentiality is our top priority. We adhere to strict data protection standards and all communications are encrypted and secure."
  },
  {
    question: "What regulatory oversight do you operate under?",
    answer: "PSM Financial Broker is licensed by the Securities and Commodities Authority (SCA) and registered with the UAE Central Bank, ensuring the highest standards of regulatory compliance."
  },
  {
    question: "Can you help with international investments?",
    answer: "Yes, we provide comprehensive international investment advisory services, leveraging our global network to access opportunities across major financial markets worldwide."
  }
];

const packages = [
  {
    name: "Essential Advisory",
    price: "AED 15,000",
    period: "per quarter",
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
    name: "Premium Advisory",
    price: "AED 35,000",
    period: "per quarter",
    features: [
      "Comprehensive wealth analysis",
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
    name: "Elite Family Office",
    price: "Custom",
    period: "tailored pricing",
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
      <div className="bg-psm-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-psm-cyan rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-psm-cyan rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-psm-cyan mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white luxury-serif mb-6">
              Book Your Consultation
            </h1>
            <p className="text-xl text-white/80 luxury-sans">
              Take the first step towards securing your financial future. Our expert advisors 
              are ready to understand your unique needs and craft tailored solutions.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-psm-cyan luxury-sans text-sm tracking-widest uppercase">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl text-psm-navy luxury-serif mt-4 mb-8">
                Request a Consultation
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl text-psm-navy luxury-serif mb-2">Thank You!</h3>
                  <p className="text-steel luxury-sans">
                    Your consultation request has been submitted. Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-psm-navy luxury-sans mb-2">First Name *</label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="border-gray-200 focus:border-psm-cyan focus:ring-psm-cyan"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-psm-navy luxury-sans mb-2">Last Name *</label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="border-gray-200 focus:border-psm-cyan focus:ring-psm-cyan"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-psm-navy luxury-sans mb-2">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-gray-200 focus:border-psm-cyan focus:ring-psm-cyan"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-psm-navy luxury-sans mb-2">Phone Number *</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-gray-200 focus:border-psm-cyan focus:ring-psm-cyan"
                      placeholder="+971 50 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-psm-navy luxury-sans mb-2">Investment Range</label>
                    <select
                      name="investmentRange"
                      value={formData.investmentRange}
                      onChange={handleInputChange}
                      className="w-full border border-gray-200 rounded-md px-4 py-2 focus:border-psm-cyan focus:ring-psm-cyan luxury-sans"
                    >
                      <option value="">Select a range</option>
                      <option value="1-5m">AED 1M - 5M</option>
                      <option value="5-10m">AED 5M - 10M</option>
                      <option value="10-50m">AED 10M - 50M</option>
                      <option value="50m+">AED 50M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-psm-navy luxury-sans mb-2">Tell Us About Your Goals</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-gray-200 focus:border-psm-cyan focus:ring-psm-cyan"
                      placeholder="Describe your investment goals, timeline, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-psm-navy hover:bg-psm-cyan hover:text-psm-navy text-white py-6 text-lg luxury-sans transition-all"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Request
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            <div>
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl text-psm-navy luxury-serif mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-psm-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-psm-cyan" />
                    </div>
                    <div>
                      <div className="text-psm-navy luxury-sans font-medium">Office Address</div>
                      <div className="text-steel luxury-sans">
                        DIFC, Gate Building<br />
                        Level 15, Dubai, UAE
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-psm-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-psm-cyan" />
                    </div>
                    <div>
                      <div className="text-psm-navy luxury-sans font-medium">Phone</div>
                      <div className="text-steel luxury-sans">+971 4 123 4567</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-psm-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-psm-cyan" />
                    </div>
                    <div>
                      <div className="text-psm-navy luxury-sans font-medium">Email</div>
                      <div className="text-steel luxury-sans">info@psmfinancial.ae</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-psm-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-psm-cyan" />
                    </div>
                    <div>
                      <div className="text-psm-navy luxury-sans font-medium">Business Hours</div>
                      <div className="text-steel luxury-sans">
                        Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                        Friday - Saturday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-psm-navy to-[#0a1f4d] rounded-2xl p-8">
                <h3 className="text-xl text-white luxury-serif mb-4">Prefer a Call?</h3>
                <p className="text-white/80 luxury-sans mb-6">
                  Our client services team is available during business hours to answer your 
                  questions and schedule appointments.
                </p>
                <a href="tel:+97141234567">
                  <Button className="w-full bg-psm-cyan text-psm-navy hover:bg-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-psm-cyan luxury-sans text-sm tracking-widest uppercase">Pricing</span>
            <h2 className="text-3xl md:text-4xl text-psm-navy luxury-serif mt-4">
              Advisory Packages
            </h2>
            <p className="text-steel mt-4 max-w-2xl mx-auto luxury-sans">
              Transparent pricing with no hidden fees. Choose the package that best suits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.highlighted 
                    ? 'bg-gradient-to-br from-psm-navy to-[#0a1f4d] text-white ring-4 ring-psm-cyan' 
                    : 'bg-white border border-gray-100'
                }`}
              >
                {pkg.highlighted && (
                  <div className="text-psm-cyan luxury-sans text-sm tracking-widest uppercase mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl luxury-serif mb-2 ${pkg.highlighted ? 'text-white' : 'text-psm-navy'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-3xl luxury-serif ${pkg.highlighted ? 'text-psm-cyan' : 'text-psm-navy'}`}>
                  {pkg.price}
                </div>
                <div className={`text-sm mb-6 ${pkg.highlighted ? 'text-white/60' : 'text-steel'}`}>
                  {pkg.period}
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${pkg.highlighted ? 'text-psm-cyan' : 'text-psm-cyan'}`} />
                      <span className={`luxury-sans text-sm ${pkg.highlighted ? 'text-white/80' : 'text-steel'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    pkg.highlighted 
                      ? 'bg-psm-cyan text-psm-navy hover:bg-white' 
                      : 'bg-psm-navy text-white hover:bg-psm-cyan hover:text-psm-navy'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-psm-cyan luxury-sans text-sm tracking-widest uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl text-psm-navy luxury-serif mt-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-gray-100 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-psm-navy luxury-sans font-medium">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-psm-cyan" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-steel" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <p className="text-steel luxury-sans">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
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
