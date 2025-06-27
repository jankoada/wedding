
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

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blush-50 via-white to-sage-50">
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <WeddingHeader />
        <FloralDivider />
        
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          <InvitationText />
          <FloralDivider />
          
          <EventDetails />
          <FloralDivider />

          <Schedule />
          <FloralDivider />

          <PhotoGallery />
          <FloralDivider />

          {/*<RSVPSection />*/}
          {/*<FloralDividcer />*/}

          <Registry />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
