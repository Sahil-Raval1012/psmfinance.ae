import { Crown, Shield, Star, Award } from "lucide-react";

export default function UniqueFooter() {
  return (
    <footer className="relative bg-gradient-to-br from-navy via-charcoal to-royal py-20 overflow-hidden">
      {/* Unique geometric background pattern */}
      <div className="absolute inset-0 neural-pattern opacity-20" />
      <div className="absolute top-10 left-10 diamond-shape opacity-10 animate-float" />
      <div className="absolute bottom-10 right-10 hexagon-shape opacity-8 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gold-accent opacity-5 liquid-bg animate-float blur-xl" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Unique logo design */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="diamond-shape w-12 h-12 transform rotate-0"></div>
            <h3 className="text-4xl font-medium holographic-text text-morph luxury-serif-bold">
              PSM FINANCIAL BROKER
            </h3>
            <div className="hexagon-shape w-16 h-9"></div>
          </div>
          
          <p className="text-xl text-platinum luxury-sans font-light max-w-3xl mx-auto leading-relaxed">
            Where <em className="text-gold-accent luxury-serif">prestige</em> meets precision in the world's most exclusive financial sanctuary
          </p>
        </div>

        {/* Unique credentials showcase */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center luxury-card card-stack interactive-tilt p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <Crown className="mx-auto text-gold-accent mb-4" size={32} />
            <h4 className="text-lg font-medium text-white luxury-serif mb-2">UAE Central Bank</h4>
            <p className="text-platinum text-sm luxury-sans">Licensed & Regulated</p>
          </div>
          
          <div className="text-center luxury-card card-stack interactive-tilt p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <Shield className="mx-auto text-accent-blue mb-4" size={32} />
            <h4 className="text-lg font-medium text-white luxury-serif mb-2">DFSA Compliant</h4>
            <p className="text-platinum text-sm luxury-sans">Dubai Financial Services</p>
          </div>
          
          <div className="text-center luxury-card card-stack interactive-tilt p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <Star className="mx-auto text-gold-accent mb-4" size={32} />
            <h4 className="text-lg font-medium text-white luxury-serif mb-2">Elite Member</h4>
            <p className="text-platinum text-sm luxury-sans">UAE Broker Association</p>
          </div>
          
          <div className="text-center luxury-card card-stack interactive-tilt p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <Award className="mx-auto text-accent-blue mb-4" size={32} />
            <h4 className="text-lg font-medium text-white luxury-serif mb-2">ISO Certified</h4>
            <p className="text-platinum text-sm luxury-sans">Quality Management</p>
          </div>
        </div>

        {/* Unique separator */}
        <div className="flex justify-center mb-12">
          <div className="w-64 h-px bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
        </div>

        {/* Footer bottom with unique styling */}
        <div className="text-center">
          <p className="text-platinum luxury-sans text-sm mb-4">
            © 2025 PSM Financial Broker. All rights reserved. | Licensed by UAE Central Bank
          </p>
          <div className="flex justify-center space-x-8 text-xs text-platinum/70 luxury-sans">
            <span className="data-flow px-3 py-1 rounded-full bg-white/5">Privacy Policy</span>
            <span className="data-flow px-3 py-1 rounded-full bg-white/5">Terms of Service</span>
            <span className="data-flow px-3 py-1 rounded-full bg-white/5">Risk Disclosure</span>
            <span className="data-flow px-3 py-1 rounded-full bg-white/5">Regulatory Information</span>
          </div>
        </div>
      </div>
    </footer>
  );
}