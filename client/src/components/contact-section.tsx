import { useState, useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

/**
 * EMAILJS CONFIGURATION GUIDE
 * 
 * To complete the EmailJS integration, you need to:
 * 
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template with these variables:
 *    - {{from_name}} - Client's full name
 *    - {{from_email}} - Client's email
 *    - {{phone}} - Client's phone number
 *    - {{service}} - Selected service
 *    - {{message}} - Client's message
 *    - {{to_name}} - Your company name (PSM Financial Broker)
 * 
 * 4. Add these environment variables to your Replit Secrets:
 *    - VITE_EMAILJS_SERVICE_ID: Your EmailJS service ID
 *    - VITE_EMAILJS_TEMPLATE_ID: Your EmailJS template ID  
 *    - VITE_EMAILJS_PUBLIC_KEY: Your EmailJS public key
 * 
 * 5. Optional: Add auto-reply template with these variables:
 *    - {{to_name}} - Client's name
 *    - {{from_name}} - Your company name
 *    - VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID: Auto-reply template ID
 */

// EmailJS Configuration - These will be loaded from environment variables
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || '', // Optional auto-reply
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

  /**
   * Validates if EmailJS is properly configured
   * Checks for required environment variables
   */
  const isEmailJSConfigured = () => {
    const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
    return serviceId && templateId && publicKey;
  };

  /**
   * Sends email using EmailJS service
   * Includes error handling and user feedback
   */
  const sendEmail = async (templateParams: any) => {
    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );
      
      console.log('Email sent successfully:', response.status, response.text);
      return response;
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw error;
    }
  };

  /**
   * Sends optional auto-reply email to the client
   * This confirms receipt of their inquiry
   */
  const sendAutoReply = async (clientEmail: string, clientName: string) => {
    if (!EMAILJS_CONFIG.autoReplyTemplateId) {
      console.log('Auto-reply template not configured, skipping auto-reply');
      return;
    }

    try {
      const autoReplyParams = {
        to_email: clientEmail,
        to_name: clientName,
        from_name: 'PSM Financial Broker',
        reply_to: 'info@psmfinancial.ae' // Replace with your actual email
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.autoReplyTemplateId,
        autoReplyParams,
        EMAILJS_CONFIG.publicKey
      );
      
      console.log('Auto-reply sent successfully');
    } catch (error) {
      console.error('Auto-reply failed:', error);
      // Don't throw error for auto-reply failure
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  /**
   * Main form submission handler
   * Validates configuration, sends email, and provides user feedback
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if EmailJS is configured
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
      // Prepare email template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_name: 'PSM Financial Broker',
        reply_to: formData.email,
        // Additional useful information
        submission_date: new Date().toLocaleString(),
        client_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      };

      // Send main email notification
      await sendEmail(templateParams);

      // Send auto-reply to client (optional)
      await sendAutoReply(formData.email, formData.firstName);

      // Success feedback
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your interest! We will contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      // Reset form reference if available
      if (formRef.current) {
        formRef.current.reset();
      }

    } catch (error) {
      console.error('Form submission error:', error);
      
      toast({
        title: "Message Failed to Send",
        description: "Please try again or contact us directly at +971-4-XXX-XXXX",
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
    { value: "investment-advisory", label: "Investment Advisory" },
    { value: "corporate-finance", label: "Corporate Finance" },
    { value: "wealth-management", label: "Wealth Management" },
    { value: "market-analysis", label: "Market Analysis" },
    { value: "risk-management", label: "Risk Management" },
    { value: "digital-solutions", label: "Digital Solutions" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-navy mb-6 luxury-serif tracking-wide">Begin Your Legacy</h2>
            <p className="text-xl text-steel luxury-sans font-light">
              Experience the discretion and excellence that the UAE's most successful families trust. Schedule your private consultation today.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ScrollReveal direction="left" delay={200}>
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
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right" delay={400}>
              <div className="bg-gradient-to-br from-light-blue to-white p-8 rounded-2xl shadow-lg">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
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
                  disabled={isSubmitting}
                  className="w-full bg-navy hover:bg-royal text-white font-medium py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl luxury-sans disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="submit-contact-form"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
