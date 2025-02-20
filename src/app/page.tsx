// src/app/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ResponsiveLandingVideo } from '@/components/ResponsiveLandingVideo';

export default function LandingPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Always mark the survey as completed for now
    localStorage.setItem('lingobabe_survey_completed', 'true');
    setIsLoading(false);
  }, []);

  const handleGetStarted = () => {
    // Skip the survey check and always go to language selector
    router.push('/language-selector');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Use a gradient background as the ultimate fallback */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-blue-300 z-0"></div>
      
      <ResponsiveLandingVideo 
        desktopVideo="/tutors/Lingobabe_landing.mp4"
        mobileVideo="/tutors/Lingobabe_landing_mobile.mp4"
        fallbackImage="/assets/image/landing_background.jpg"
      />
      
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center z-10">
        <button
          onClick={handleGetStarted}
          className="bg-green-500 text-white px-16 py-4 rounded-full text-xl font-semibold hover:bg-green-600 transition duration-300"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '24px',
            color: '#ffffff',
            backgroundColor: '#089e7d',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '30px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
}