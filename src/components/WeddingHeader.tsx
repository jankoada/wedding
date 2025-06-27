
import { Heart } from 'lucide-react';

const WeddingHeader = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=1080&fit=crop')`,
          // backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('https://unsplash.com/photos/scenery-of-a-grassfield-during-sunset-u7ldh_tgH3s?w=1920&h=1080&fit=crop')`,
          // backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), src('/assets/statek')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white animate-fade-in">
        <div className="mb-8">
          <h1 className="font-script text-6xl md:text-8xl mb-4 text-shadow-lg">
            Adam & Tereza
          </h1>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-16 bg-white/50"></div>
            <Heart className="w-6 h-6 text-blush-200 animate-float" />
            <div className="h-px w-16 bg-white/50"></div>
          </div>
          {/*<p className="font-serif text-xl md:text-2xl mb-2 tracking-wide">*/}
          {/*  S radostí a láskou vás zveme*/}
          {/*</p>*/}
          <p className="font-serif text-lg md:text-xl tracking-widest">
            26. 7. 2025
          </p>
        </div>
        
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto">
            <div className="w-1 h-3 bg-white/70 rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingHeader;
