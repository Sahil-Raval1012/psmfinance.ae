import { useHeroContent, useServicesContent, useContactInfo } from '@/hooks/use-cms-content';
import { isFirebaseConfigured } from '@/lib/firebase';

/**
 * CMS DEMO COMPONENT
 * 
 * This component demonstrates the Rowy CMS integration status
 * and shows which content is being loaded from CMS vs fallback data.
 * Remove this component in production.
 */

export default function CMSDemo() {
  const { content: heroContent, loading: heroLoading } = useHeroContent();
  const { content: services, loading: servicesLoading } = useServicesContent();
  const { content: contactInfo, loading: contactLoading } = useContactInfo();

  const isConfigured = isFirebaseConfigured();

  // Only show in development
  if (import.meta.env.PROD) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 text-white p-4 rounded-lg text-sm max-w-sm">
      <h3 className="font-bold mb-2">🔧 CMS Status</h3>
      <div className="space-y-1">
        <div className={`flex items-center gap-2 ${isConfigured ? 'text-green-400' : 'text-orange-400'}`}>
          <div className={`w-2 h-2 rounded-full ${isConfigured ? 'bg-green-400' : 'bg-orange-400'}`} />
          {isConfigured ? 'Rowy CMS Connected' : 'Using Fallback Data'}
        </div>
        
        <div className="text-xs text-gray-300 mt-2">
          <div>Hero: {heroLoading ? 'Loading...' : isConfigured ? 'CMS' : 'Fallback'}</div>
          <div>Services: {servicesLoading ? 'Loading...' : isConfigured ? 'CMS' : 'Fallback'} ({services.length})</div>
          <div>Contact: {contactLoading ? 'Loading...' : isConfigured ? 'CMS' : 'Fallback'}</div>
        </div>
        
        {!isConfigured && (
          <div className="text-xs text-orange-300 mt-2">
            Configure Firebase secrets to enable CMS
          </div>
        )}
      </div>
    </div>
  );
}