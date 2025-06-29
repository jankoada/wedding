
import { Calendar, Clock, MapPin, Car } from 'lucide-react';

const EventDetails = () => {
  return (
    <section className="py-16 animate-fade-in max-w-4xl mx-auto px-4 space-y-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-gray-800 mb-12">
          {/*Místo a Čas ⏰*/}
          Místo a Čas
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Details */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Calendar className="w-6 h-6 text-blush-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-gray-800 mb-2">Datum</h3>
                <p className="font-serif text-gray-600">26. 7. 2025</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-blush-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-gray-800 mb-2">Čas</h3>
                <p className="font-serif text-gray-600">Přijíždět můžete od 11:00</p>
                <p className="font-serif text-gray-600">Obřad začíná ve 12:30</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blush-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-gray-800 mb-2">Místo</h3>
                <p className="font-serif text-gray-600">
                  <a href="https://maps.app.goo.gl/5xMX1QcEDiLfFKXm6" target="_blank" rel="noopener noreferrer" className="text-blush-600 hover:underline">
                    Statek Napořád, Marčovice 3
                  </a>
                </p>
              </div>
            </div>

            {/*<div className="flex items-start space-x-4">*/}
            {/*  <Car className="w-6 h-6 text-blush-500 mt-1 flex-shrink-0" />*/}
            {/*  <div>*/}
            {/*    /!*<h3 className="font-serif text-xl text-gray-800 mb-2">Doprava 🚐</h3>*!/*/}
            {/*    <h3 className="font-serif text-xl text-gray-800 mb-2">Doprava</h3>*/}
            {/*    <p className="text-gray-600">*/}
            {/*      Kdo přijede autem, parkujte prosím podél zdí statku případně na krajnici, tak abychom nepřekáželi místním.*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          
          {/* Location Image */}
          <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-lg">
            {/*<img */}
            {/*  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop"*/}
            {/*  alt="Statek Napořád"*/}
            {/*  className="w-full h-full object-cover"*/}
            {/*/>*/}
            {/*<img*/}
            {/*  src="/assets/statek%20dvur.png"*/}
            {/*  alt="Statek Napořád"*/}
            {/*  className="w-full h-full object-cover"*/}
            {/*/>*/}
            <img
              src="/assets/statek.png"
              alt="Statek Napořád"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
