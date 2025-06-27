
import { Clock, Music, Utensils, Camera, Shirt, Bed, Car, Coffee, Wine } from 'lucide-react';

const Schedule = () => {
  const sections = [
    {
      // title: "Dress Code 👗",
      title: "Dress Code",
      icon: <Shirt className="w-6 h-6" />,
      content: "Tak abyste se cítili krásně a dobře. Bude horko a muži se nemusí trápit v saku, proto košile třeba s motýlkem bohatě stačí. Ale neberte prosím bílé šaty ani světlé obleky."
    },
    // {
    //   // title: "Bazén i sauna 🏊",
    //   title: "Bazén i sauna",
    //   icon: <Waves className="w-6 h-6" />,
    //   content: "Kdo bude chtít využít tak plavky a do sauny prostěradla s sebou."
    // },
    {
      // title: "Bazén i sauna 🏊",
      title: "Doprava",
      icon: <Car className="w-6 h-6" />,
      content: "Kdo přijede autem, parkujte prosím podél zdí statku případně na krajnici, tak abychom nepřekáželi místním."
    },
    {
      title: "Ubytování",
      icon: <Bed className="w-6 h-6" />,
      content: "Vzhledem k omezené kapacitě ubytování jsou zajištěni hlavně lidi z Prahy a zahraničí. Pro přespolní držáky z Volyně a Strakonic, kteří zůstanou do rána, je ještě k dispozici společná místnost s kapacitou 14 lidí."
    },
    // <h3 className="font-serif text-xl text-gray-800 mb-2">Doprava</h3>
    // <p className="text-gray-600">
    //   Kdo přijede autem, parkujte prosím podél zdí statku případně na krajnici, tak abychom nepřekáželi místním.
    // </p>
    {
      // title: "Catering 🍔",
      title: "Catering",
      icon: <Utensils className="w-6 h-6" />,
      content: "Celodenní občerstvení přijede zajistit Food truck Dog n Roll. Při příchodu dostanete welcome drink a malé občerstvení. Po obřadu se otevře celodenní raut a výdej z food trucku. A večerní speciality budou přímo z food trucku od 18 do 22 hodin."
    },
    {
      // title: "Kafe ☕",
      title: "Kafe",
      icon: <Coffee className="w-6 h-6" />,
      content: "Baristka z Hope Roastery vám kromě vynikajícího espressa udělá klidně i filtr nebo flat-white."
    },
    {
      // title: "Bar 🍷",
      title: "Bar",
      icon: <Wine className="w-6 h-6" />,
      content: "S Lukášem z L'Fleur baru jsme připravili menu s jeho signature drinky, se kterými mu pomůžou kluci ze strakonického Moonu."
    }
  ];

  return (
    <section className="py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-gray-800 mb-12">
          Informace pro hosty
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div key={index} className="p-6 bg-white/50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center text-blush-600">
                    {section.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-gray-800 mb-3">{section.title}</h3>
                  <p className="font-serif text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
