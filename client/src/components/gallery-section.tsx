import { ScrollReveal } from "@/hooks/use-scroll-reveal";

export default function GallerySection() {
  const galleryItems = [
    {
      title: "Private Wealth Sanctuary",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Exclusive Dubai Overlook",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Elite Advisory Chamber",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Luxury Financial District",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Platinum Client Atrium",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      span: "sm:col-span-2"
    }
  ];

  return (
    <section id="gallery" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 border border-[#0a2d6d]/20 text-[#3ce9fd] text-xs tracking-[0.25em] uppercase mb-6 luxury-sans">
            Our Spaces
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#0a2d6d] mb-6 luxury-serif leading-tight">
            Where Prestige Meets Privacy
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto luxury-sans font-light leading-relaxed">
            Step into our exclusive sanctuaries of wealth — meticulously designed spaces 
            where the UAE's most discerning clients make their most important decisions
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <ScrollReveal 
              key={item.title}
              delay={index * 100}
              direction="scale"
              className={`relative group overflow-hidden ${item.span || ''}`}
              data-testid={`gallery-item-${index}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2d6d]/90 via-[#0a2d6d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-8 h-px bg-[#3ce9fd] mb-3"></div>
                  <h3 className="text-lg font-normal text-white luxury-serif">{item.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
