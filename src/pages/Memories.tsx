
import { useState, useEffect } from 'react';
import WeddingHeader from '../components/WeddingHeader';
import InvitationText from '../components/InvitationText';
import EventDetails from '../components/EventDetails';
import PhotoGallery from '../components/PhotoGallery';
import RSVPSection from '../components/RSVPSection';
import Schedule from '../components/Schedule';
import Registry from '../components/Registry';
import Footer from '../components/Footer';
import FloralDivider from '../components/FloralDivider';
import ThankYouText from "@/components/ThankYouText.tsx";
import ThankYouPhotoGallery from "@/components/ThankYouPhotoGallery.tsx";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  // const YOUTUBE_ID = "8Z0nuWO7DQg"; // TODO: Replace with your wedding highlights video ID
  const YOUTUBE_ID = "7pwqrpp8J4M"; // TODO: Upload 4k version

  // https://www.youtube.com/watch?v=8Z0nuWO7DQg
  const videoUrl = `https://www.youtube.com/embed/${YOUTUBE_ID}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blush-50 via-white to-sage-50">
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/*<WeddingHeader />*/}

        <div className="px-4 space-y-16">
          {/*<FloralDivider />*/}
        {/*<div >*/}
          {/*<FloralDivider />*/}

          <section aria-label="Wedding highlights video" className="mt-8 sm:mt-10 flex justify-center">
            <div className=" relative w-full max-w-7xl aspect-video overflow-hidden rounded-lg border bg-card shadow-sm">
              <iframe
                  className="absolute inset-0 h-full w-full"
                  src={videoUrl}
                  title="Wedding highlights video"
                  loading="lazy"
                  // referrerPolicy="strict-origin-when-cross-origin"
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
              />
            </div>
          </section>

          <ThankYouText />

          <ThankYouPhotoGallery />
          {/*<FloralDivider />*/}

        </div>
        
        {/*<Footer />*/}
      </div>
    </div>
  );
};

export default Index;
