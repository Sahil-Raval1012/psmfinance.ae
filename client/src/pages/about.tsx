import { Link } from "wouter";
import { ArrowLeft, Award, Users, Globe, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Satisfied Clients" },
  { value: "AED 10B+", label: "Assets Under Advisory" },
  { value: "100%", label: "Client Retention" }
];

const values = [
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "We maintain the highest standards of professional ethics and confidentiality in all our dealings."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service delivery and client relationships."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We tailor our solutions to meet your unique requirements."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "We leverage our international network to provide you with global investment opportunities."
  }
];

const credentials = [
  "Licensed by the Securities and Commodities Authority (SCA)",
  "Registered with the UAE Central Bank",
  "Member of the Emirates Securities and Commodities Authority",
  "ISO 27001 Certified for Information Security",
  "Compliance with International AML/CFT Standards"
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-psm-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-psm-cyan rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-psm-cyan rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-psm-cyan mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl md:text-5xl text-white luxury-serif mb-6">
            About PSM Financial Broker
          </h1>
          <p className="text-xl text-white/80 luxury-sans max-w-2xl">
            A legacy of excellence in financial services, serving the UAE's most distinguished 
            clients with unparalleled expertise and dedication.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-psm-cyan luxury-sans text-sm tracking-widest uppercase">Our Story</span>
              <h2 className="text-3xl md:text-4xl text-psm-navy luxury-serif mt-4 mb-6">
                Building Wealth, Building Trust
              </h2>
              <div className="space-y-4 text-steel luxury-sans">
                <p>
                  PSM Financial Broker was founded with a singular vision: to provide the UAE's 
                  most discerning individuals and institutions with world-class financial services 
                  that combine global expertise with local understanding.
                </p>
                <p>
                  Over the years, we have built a reputation for excellence, integrity, and 
                  innovation. Our team of seasoned professionals brings together decades of 
                  experience in wealth management, investment advisory, and corporate finance.
                </p>
                <p>
                  Today, we are proud to serve some of the region's most prominent families, 
                  businesses, and institutional investors, helping them navigate the complexities 
                  of the financial world with confidence and clarity.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-psm-navy to-[#0a1f4d] rounded-2xl p-8 text-center"
                >
                  <div className="text-4xl md:text-5xl text-psm-cyan luxury-serif mb-2">{stat.value}</div>
                  <div className="text-white/80 luxury-sans text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-psm-cyan luxury-sans text-sm tracking-widest uppercase">Our Values</span>
            <h2 className="text-3xl md:text-4xl text-psm-navy luxury-serif mt-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-psm-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-psm-cyan" />
                </div>
                <h3 className="text-xl text-psm-navy luxury-serif mb-3">{value.title}</h3>
                <p className="text-steel luxury-sans">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-psm-cyan luxury-sans text-sm tracking-widest uppercase">Regulatory Compliance</span>
              <h2 className="text-3xl md:text-4xl text-psm-navy luxury-serif mt-4 mb-6">
                Licensed & Regulated
              </h2>
              <p className="text-steel luxury-sans mb-8">
                PSM Financial Broker operates under the strict regulatory oversight of the UAE's 
                financial authorities. Our commitment to compliance ensures that your investments 
                are protected and managed according to the highest international standards.
              </p>
              
              <ul className="space-y-4">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-psm-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-steel luxury-sans">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-psm-navy to-[#0a1f4d] rounded-2xl p-10">
              <h3 className="text-2xl text-white luxury-serif mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-psm-cyan rounded-full mt-2"></div>
                  <span className="text-white/80 luxury-sans">Personalized attention from senior advisors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-psm-cyan rounded-full mt-2"></div>
                  <span className="text-white/80 luxury-sans">Access to exclusive investment opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-psm-cyan rounded-full mt-2"></div>
                  <span className="text-white/80 luxury-sans">Transparent fee structures with no hidden costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-psm-cyan rounded-full mt-2"></div>
                  <span className="text-white/80 luxury-sans">24/7 dedicated client support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-psm-cyan rounded-full mt-2"></div>
                  <span className="text-white/80 luxury-sans">State-of-the-art technology platform</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-psm-navy to-[#0a1f4d]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl text-white luxury-serif mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 luxury-sans max-w-2xl mx-auto mb-8">
            Join the elite circle of clients who trust PSM Financial Broker with their 
            financial future.
          </p>
          <Link href="/consultation">
            <Button className="bg-psm-cyan text-psm-navy hover:bg-white px-8 py-6 text-lg luxury-sans">
              Schedule a Consultation
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
