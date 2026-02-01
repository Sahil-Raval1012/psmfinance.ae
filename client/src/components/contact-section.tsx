import { useState, useRef } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || '',
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEmailJSConfigured = () => {
    const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
    return serviceId && templateId && publicKey;
  };

  const sendEmail = async (templateParams: any) => {
    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );
      return response;
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw error;
    }
  };

  const sendAutoReply = async (clientEmail: string, clientName: string) => {
    if (!EMAILJS_CONFIG.autoReplyTemplateId) return;

    try {
      const autoReplyParams = {
        to_email: clientEmail,
        to_name: clientName,
        from_name: 'PSM Financial Broker',
        reply_to: 'info@psmfinancial.ae'
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.autoReplyTemplateId,
        autoReplyParams,
        EMAILJS_CONFIG.publicKey
      );
    } catch (error) {
      console.error('Auto-reply failed:', error);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isEmailJSConfigured()) {
      toast({
        title: "Configuration Required",
        description: "EmailJS is not configured. Please contact the administrator.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_name: 'PSM Financial Broker',
        reply_to: formData.email,
        submission_date: new Date().toLocaleString(),
        client_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      };

      await sendEmail(templateParams);
      await sendAutoReply(formData.email, formData.firstName);

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your interest! We will contact you within 24 hours.",
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      if (formRef.current) {
        formRef.current.reset();
      }

    } catch (error) {
      toast({
        title: "Message Failed to Send",
        description: "Please try again or contact us directly at +971 4 123 4567",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: ["DIFC, Gate Building", "Level 15, Dubai, UAE"]
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["+971 4 123 4567"]
    },
    {
      icon: Mail,
      title: "Email",
      content: ["info@psmfinancial.ae"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: ["Sun - Thu: 9:00 AM - 6:00 PM"]
    }
  ];

  const serviceOptions = [
    { value: "investment-advisory", label: "Investment Advisory" },
    { value: "corporate-finance", label: "Corporate Finance" },
    { value: "wealth-management", label: "Wealth Management" },
    { value: "market-analysis", label: "Market Analysis" },
    { value: "risk-management", label: "Risk Management" },
    { value: "digital-solutions", label: "Digital Solutions" }
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 border border-[#0a2d6d]/20 text-[#3ce9fd] text-xs tracking-[0.25em] uppercase mb-6 luxury-sans">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#0a2d6d] mb-6 luxury-serif leading-tight">
            Begin Your Legacy
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto luxury-sans font-light leading-relaxed">
            Experience the discretion and excellence that the UAE's most successful families trust
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <ScrollReveal direction="left" delay={200} className="lg:col-span-2">
            <div className="space-y-8">
              <h3 className="text-xl sm:text-2xl font-normal text-[#0a2d6d] luxury-serif">Private Banking Center</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.title} className="flex items-start gap-4" data-testid={`contact-info-${index}`}>
                      <div className="w-12 h-12 bg-[#0a2d6d] flex items-center justify-center flex-shrink-0">
                        <IconComponent size={20} className="text-[#3ce9fd]" />
                      </div>
                      <div>
                        <h4 className="text-[#0a2d6d] luxury-sans text-sm tracking-wider uppercase mb-1">{info.title}</h4>
                        {info.content.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-gray-500 luxury-sans font-light">{line}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-gray-500 luxury-sans font-light text-sm leading-relaxed">
                  All consultations are conducted with complete confidentiality. 
                  Your privacy is our utmost priority.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={400} className="lg:col-span-3">
            <div className="bg-white p-6 sm:p-8 lg:p-10 border border-gray-100">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#0a2d6d] luxury-sans text-sm tracking-wider uppercase mb-2">First Name *</label>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="John"
                      required
                      data-testid="input-firstName"
                      className="luxury-sans border-gray-200 focus:border-[#3ce9fd] focus:ring-[#3ce9fd] rounded-none py-5"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0a2d6d] luxury-sans text-sm tracking-wider uppercase mb-2">Last Name *</label>
                    <Input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Doe"
                      required
                      data-testid="input-lastName"
                      className="luxury-sans border-gray-200 focus:border-[#3ce9fd] focus:ring-[#3ce9fd] rounded-none py-5"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[#0a2d6d] luxury-sans text-sm tracking-wider uppercase mb-2">Email Address *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john.doe@example.com"
                    required
                    data-testid="input-email"
                    className="luxury-sans border-gray-200 focus:border-[#3ce9fd] focus:ring-[#3ce9fd] rounded-none py-5"
                  />
                </div>
                
                <div>
                  <label className="block text-[#0a2d6d] luxury-sans text-sm tracking-wider uppercase mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+971 50 123 4567"
                    required
                    data-testid="input-phone"
                    className="luxury-sans border-gray-200 focus:border-[#3ce9fd] focus:ring-[#3ce9fd] rounded-none py-5"
                  />
                </div>
                
                <div>
                  <label className="block text-[#0a2d6d] luxury-sans text-sm tracking-wider uppercase mb-2">Service Interest</label>
                  <Select 
                    value={formData.service} 
                    onValueChange={(value) => handleInputChange('service', value)}
                    required
                  >
                    <SelectTrigger data-testid="select-service" className="luxury-sans border-gray-200 focus:border-[#3ce9fd] focus:ring-[#3ce9fd] rounded-none py-5">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value} className="luxury-sans">
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-[#0a2d6d] luxury-sans text-sm tracking-wider uppercase mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    placeholder="Tell us about your financial goals..."
                    required
                    data-testid="textarea-message"
                    className="luxury-sans resize-none border-gray-200 focus:border-[#3ce9fd] focus:ring-[#3ce9fd] rounded-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#0a2d6d] hover:bg-[#3ce9fd] hover:text-[#0a2d6d] text-white py-6 rounded-none transition-all duration-500 luxury-sans tracking-wider disabled:opacity-50"
                  data-testid="submit-contact-form"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
