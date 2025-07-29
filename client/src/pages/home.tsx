import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import OwnersSection from "@/components/owners-section";
import CredentialsSection from "@/components/credentials-section";
import GallerySection from "@/components/gallery-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white optima-font">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <OwnersSection />
      <CredentialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
