import { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '@/lib/firebase';

/**
 * CMS CONTENT HOOKS
 * 
 * These hooks provide seamless integration with Rowy CMS.
 * They automatically fall back to hardcoded content when Rowy is not configured,
 * ensuring the website always works regardless of CMS setup status.
 * 
 * Available hooks:
 * - useHeroContent() - Hero section content
 * - useServicesContent() - Services grid data
 * - useAboutContent() - About section content
 * - useContactInfo() - Contact information
 * - useGalleryImages() - Gallery images
 * - useCredentials() - Company credentials
 * 
 * Each hook returns: { content, loading, error }
 */

interface CMSHookResult<T> {
  content: T;
  loading: boolean;
  error: string | null;
}

// Generic hook for fetching CMS content
function useCMSContent<T>(
  collectionName: string,
  fallbackContent: T,
  documentId?: string
): CMSHookResult<T> {
  const [content, setContent] = useState<T>(fallbackContent);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      // Use fallback if Firebase not configured
      if (!isFirebaseConfigured()) {
        console.log(`Using fallback content for ${collectionName}`);
        setContent(fallbackContent);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        if (documentId) {
          // Fetch single document
          const docRef = doc(db, collectionName, documentId);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setContent({ ...fallbackContent, ...docSnap.data() } as T);
          } else {
            setContent(fallbackContent);
          }
        } else {
          // Fetch collection
          const querySnapshot = await getDocs(collection(db, collectionName));
          const docs = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          
          setContent(docs.length > 0 ? docs as T : fallbackContent);
        }
      } catch (err) {
        console.error(`Error fetching ${collectionName}:`, err);
        setError(`Failed to load ${collectionName} content`);
        setContent(fallbackContent);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [collectionName, documentId]);

  return { content, loading, error };
}

// Hero Section Content
export interface HeroContent {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  backgroundImage: string;
}

export const useHeroContent = (): CMSHookResult<HeroContent> => {
  const fallbackContent: HeroContent = {
    title: "Elevate Your Financial Legacy",
    subtitle: "Exclusive wealth management for UAE's most distinguished families and enterprises. Discretion, excellence, and unparalleled expertise in every transaction.",
    primaryButtonText: "Schedule Consultation",
    secondaryButtonText: "Our Services",
    backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  };

  return useCMSContent('hero', fallbackContent, 'main');
};

// Services Content
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export const useServicesContent = (): CMSHookResult<ServiceItem[]> => {
  const fallbackContent: ServiceItem[] = [
    {
      id: "investment-advisory",
      title: "Investment Advisory",
      description: "Exclusive access to elite investment opportunities with personalized portfolio strategies for ultra-high-net-worth individuals.",
      icon: "TrendingUp",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "wealth-management",
      title: "Wealth Management",
      description: "Comprehensive wealth preservation and growth strategies tailored for the UAE's most successful families and corporations.",
      icon: "Shield",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "corporate-finance",
      title: "Corporate Finance",
      description: "Strategic financial solutions for mergers, acquisitions, and corporate restructuring with discretion and expertise.",
      icon: "Building2",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return useCMSContent('services', fallbackContent);
};

// About Section Content
export interface AboutContent {
  title: string;
  subtitle: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  backgroundImage: string;
}

export const useAboutContent = (): CMSHookResult<AboutContent> => {
  const fallbackContent: AboutContent = {
    title: "The Pinnacle of Financial Trust",
    subtitle: "For over a decade, PSM Financial Broker has been the guardian of the UAE's most prestigious fortunes.",
    description: "Our unwavering commitment to discretion, excellence, and fiduciary responsibility has earned us the trust of the region's most influential families and corporations.",
    features: [
      {
        title: "Exclusive Market Mastery",
        description: "Privileged access to elite investment opportunities with insider knowledge of UAE's most lucrative financial corridors and regulatory landscapes.",
        icon: "Award"
      },
      {
        title: "Ultra-High-Net-Worth Focus",
        description: "Specialized wealth solutions reserved exclusively for individuals and families with assets exceeding AED 50 million, ensuring personalized attention and bespoke strategies.",
        icon: "Users"
      },
      {
        title: "Legacy Preservation Expertise",
        description: "Multi-generational wealth strategies with sophisticated succession planning, ensuring your family's financial legacy transcends generations with uncompromised elegance.",
        icon: "TrendingUp"
      }
    ],
    backgroundImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  };

  return useCMSContent('about', fallbackContent, 'main');
};

// Contact Information
export interface ContactInfo {
  address: string[];
  phone: string[];
  email: string[];
  hours: string[];
}

export const useContactInfo = (): CMSHookResult<ContactInfo> => {
  const fallbackContent: ContactInfo = {
    address: ["Dubai International Financial Centre", "Level 45, Emirates Towers", "Dubai, UAE"],
    phone: ["+971 4 123 4567"],
    email: ["info@psmfinancial.ae"],
    hours: ["Sunday - Thursday: 9:00 AM - 6:00 PM", "Friday - Saturday: Closed"]
  };

  return useCMSContent('contact', fallbackContent, 'info');
};

// Gallery Images
export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
}

export const useGalleryImages = (): CMSHookResult<GalleryImage[]> => {
  const fallbackContent: GalleryImage[] = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Dubai Financial District",
      caption: "Our home in Dubai's prestigious financial district"
    },
    {
      id: "2", 
      url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Modern Financial Services",
      caption: "Cutting-edge financial technology and expertise"
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Investment Strategy",
      caption: "Strategic investment planning and execution"
    }
  ];

  return useCMSContent('gallery', fallbackContent);
};

// Company Credentials
export interface Credential {
  id: string;
  name: string;
  description: string;
  logo?: string;
  url?: string;
}

export const useCredentials = (): CMSHookResult<Credential[]> => {
  const fallbackContent: Credential[] = [
    {
      id: "sca",
      name: "SCA Licensed",
      description: "Securities and Commodities Authority Licensed Broker",
      logo: "/credentials/sca.png"
    },
    {
      id: "difc",
      name: "DIFC Authorized",
      description: "Dubai International Financial Centre Authorized Firm",
      logo: "/credentials/difc.png"
    },
    {
      id: "iso",
      name: "ISO 27001",
      description: "International Standard for Information Security Management",
      logo: "/credentials/iso.png"
    }
  ];

  return useCMSContent('credentials', fallbackContent);
};