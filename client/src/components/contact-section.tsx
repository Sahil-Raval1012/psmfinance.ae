/**
 * PSM Financial Broker - Contact Form with EmailJS Integration
 * 
 * This component provides a luxury contact form with dual email delivery:
 * 1. Primary: EmailJS for direct email delivery (requires setup)
 * 2. Fallback: Server-side API handling
 * 
 * EmailJS Setup Required:
 * - Create account at https://www.emailjs.com/
 * - Set environment variables in .env:
 *   VITE_EMAILJS_SERVICE_ID=your_service_id
 *   VITE_EMAILJS_TEMPLATE_ID=your_template_id  
 *   VITE_EMAILJS_PUBLIC_KEY=your_public_key
 * 
 * See EMAILJS_SETUP.md for complete setup instructions
 */

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import emailjs from '@emailjs/browser';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'
  };

  // Initialize EmailJS
  const initializeEmailJS = () => {
    if (EMAILJS_CONFIG.publicKey !== 'your_public_key') {
      emailjs.init(EMAILJS_CONFIG.publicKey);
    }
  };

  // EmailJS send function
  const sendEmailJS = async (data: ContactFormData) => {
    initializeEmailJS();
    
    const templateParams = {
      to_name: 'PSM Financial Broker',
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      phone: data.phone,
      service_interest: data.service,
      message: data.message,
      reply_to: data.email,
    };

    return emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );
  };

  // Fallback server mutation (existing functionality)
  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your interest! We will contact you shortly.",
      });
      resetForm();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Try EmailJS first if configured
      if (EMAILJS_CONFIG.serviceId !== 'your_service_id' && 
          EMAILJS_CONFIG.templateId !== 'your_template_id' && 
          EMAILJS_CONFIG.publicKey !== 'your_public_key') {
        
        await sendEmailJS(formData);
        toast({
          title: "Message Sent Successfully",
          description: "Thank you for your interest! We will contact you within 24 hours.",
        });
        resetForm();
      } else {
        // Fallback to server-side handling
        contactMutation.mutate(formData);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      // Fallback to server if EmailJS fails
      contactMutation.mutate(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: ["Dubai International Financial Centre", "Level 45, Emirates Towers", "Dubai, UAE"]
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
      content: ["Sunday - Thursday: 9:00 AM - 6:00 PM", "Friday - Saturday: Closed"]
    }
  ];

  const serviceOptions = [
    { value: "private-wealth-mastery", label: "Private Wealth Mastery (AED 50M+)" },
    { value: "elite-investment-counsel", label: "Elite Investment Counsel (AED 10M+)" },
    { value: "corporate-excellence", label: "Corporate Excellence (AED 25M+)" },
    { value: "alternative-investments", label: "Alternative Investments" },
    { value: "islamic-finance", label: "Islamic Finance Solutions" },
    { value: "global-market-access", label: "Global Market Access" },
    { value: "consultation", label: "General Consultation" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-navy mb-6 luxury-serif tracking-wide">Begin Your Legacy</h2>
            <p className="text-xl text-steel luxury-sans font-light">
              Experience the discretion and excellence that the UAE's most successful families trust. Schedule your private consultation today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-medium text-navy mb-6 luxury-serif">Private Banking Center</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={info.title} className="flex items-start space-x-4" data-testid={`contact-info-${index}`}>
                        <div className="w-12 h-12 bg-accent-blue text-white rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium text-navy mb-1 luxury-sans">{info.title}</h4>
                          {info.content.map((line, lineIndex) => (
                            <p key={lineIndex} className="text-steel luxury-sans font-light">{line}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-light-blue to-white p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-navy font-medium mb-2 luxury-sans">First Name</label>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="John"
                      required
                      data-testid="input-firstName"
                      className="luxury-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-medium mb-2 luxury-sans">Last Name</label>
                    <Input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Doe"
                      required
                      data-testid="input-lastName"
                      className="luxury-sans"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-navy font-medium mb-2 luxury-sans">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john.doe@example.com"
                    required
                    data-testid="input-email"
                    className="luxury-sans"
                  />
                </div>
                
                <div>
                  <label className="block text-navy font-medium mb-2 luxury-sans">Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+971 50 123 4567"
                    required
                    data-testid="input-phone"
                    className="luxury-sans"
                  />
                </div>
                
                <div>
                  <label className="block text-navy font-medium mb-2 luxury-sans">Service Interest</label>
                  <Select 
                    value={formData.service} 
                    onValueChange={(value) => handleInputChange('service', value)}
                    required
                  >
                    <SelectTrigger data-testid="select-service" className="luxury-sans">
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
                  <label className="block text-navy font-medium mb-2 luxury-sans">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    placeholder="Tell us about your financial goals and how we can help..."
                    required
                    data-testid="textarea-message"
                    className="luxury-sans resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting || contactMutation.isPending}
                  className="w-full bg-navy hover:bg-royal text-white font-medium py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl luxury-sans"
                  data-testid="submit-contact-form"
                >
                  {(isSubmitting || contactMutation.isPending) ? "Sending..." : "Send Confidential Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
