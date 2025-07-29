import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

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

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your interest! We will contact you shortly.",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-navy mb-6 optima-font">Get In Touch</h2>
            <p className="text-xl text-steel optima-font">
              Ready to elevate your financial future? Contact our expert team for personalized consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-normal text-navy mb-6 optima-font">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={info.title} className="flex items-start space-x-4" data-testid={`contact-info-${index}`}>
                        <div className="w-12 h-12 bg-accent-blue text-white rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h4 className="font-normal text-navy mb-1 optima-font">{info.title}</h4>
                          {info.content.map((line, lineIndex) => (
                            <p key={lineIndex} className="text-steel optima-font">{line}</p>
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
                    <label className="block text-navy font-normal mb-2 optima-font">First Name</label>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="John"
                      required
                      data-testid="input-firstName"
                      className="optima-font"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-normal mb-2 optima-font">Last Name</label>
                    <Input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Doe"
                      required
                      data-testid="input-lastName"
                      className="optima-font"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-navy font-normal mb-2 optima-font">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john.doe@example.com"
                    required
                    data-testid="input-email"
                    className="optima-font"
                  />
                </div>
                
                <div>
                  <label className="block text-navy font-normal mb-2 optima-font">Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+971 50 123 4567"
                    required
                    data-testid="input-phone"
                    className="optima-font"
                  />
                </div>
                
                <div>
                  <label className="block text-navy font-normal mb-2 optima-font">Service Interest</label>
                  <Select 
                    value={formData.service} 
                    onValueChange={(value) => handleInputChange('service', value)}
                    required
                  >
                    <SelectTrigger data-testid="select-service" className="optima-font">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value} className="optima-font">
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-navy font-normal mb-2 optima-font">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    placeholder="Tell us about your financial goals and how we can help..."
                    required
                    data-testid="textarea-message"
                    className="optima-font resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-navy hover:bg-royal text-white font-normal py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl optima-font"
                  data-testid="submit-contact-form"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
