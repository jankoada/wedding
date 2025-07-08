
import { Clock, Music, Utensils, Camera, Shirt, Bed, Car, Coffee, Wine } from 'lucide-react';

const Schedule = () => {
  const sections = [
    {
      // title: "Dress Code 👗",
      title: "Dress Code",
      icon: <Shirt className="w-6 h-6" />,
      // content: "Oblékněte se tak, abyste se cítili krásně a pohodlně. Oblékněte, v čem se cítíte nejlépe. Doufáme, že bude horko, není proto potřeba sako – košile, případně s motýlkem, bohatě postačí. Barevné kombinace jsou neomezené, pouze prosíme, nevolte bílé šaty ani světle béžový oblek.",
      content: "Důležité pro nás je, abyste se cítili krásně a pohodlně. Oblékněte, v čem se cítíte nejlépe. Doufáme, že bude horko, není proto potřeba sako – košile, případně s motýlkem, bohatě postačí. Barevné kombinace jsou neomezené, pouze prosíme, nevolte bílé šaty ani světle béžový oblek.",
      showColors: true
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
      content: "Pokud přijedete autem, parkujte prosím podél zdí statku, případně na krajnici, abychom neomezovali místní.",
      showParkingLink: true
    },
    {
      title: "Ubytování",
      icon: <Bed className="w-6 h-6" />,
      content: "Ubytování je kvůli omezené kapacitě primárně zajištěno pro hosty z Prahy a zahraničí. Pro místní držáky z Volyně a Strakonic, kteří budou potřebovat zůstat přes noc, je k dispozici ještě společná místnost s lůžky pro 14 lidí."
    },
    // <h3 className="font-serif text-xl text-gray-800 mb-2">Doprava</h3>
    // <p className="text-gray-600">
    //   Kdo přijede autem, parkujte prosím podél zdí statku případně na krajnici, tak abychom nepřekáželi místním.
    // </p>
    {
      // title: "Catering 🍔",
      title: "Catering",
      icon: <Utensils className="w-6 h-6" />,
      content: "Celodenní catering zajistí Food truck Dog'n'Roll. Hned po příchodu na Vás bude čekat welcome drink a malé občerstvení. Po obřadu se otevře raut, který bude k dispozici po celý den. Obědové a večerní speciality pak budou vydávány přímo z Food trucku. Na statku nenajdete zasedací pořádek. Kromě sálu bude k dispozici sezení na terasách, v zahradě nebo v sadu.",
      showMenuLink: true
    },
    {
      // title: "Kafe ☕",
      title: "Kafe",
      icon: <Coffee className="w-6 h-6" />,
      content: "Baristka Eliška z pražírny Hope Roastery Vám připraví kávu podle Vaší chuti: espresso, batch nebo i flat white."
    },
    {
      // title: "Bar 🍷",
      title: "Bar",
      icon: <Wine className="w-6 h-6" />,
      content: "S Lukášem z L'Fleur baru jsme připravili speciální menu s jeho signature drinky. Na baru Vás kromě Lukáše přivítají i kluci ze strakonického Moonu."
    }
  ];

  const dressColors = [
    { color: '#ae4c16', name: 'Warm Brown' },
    { color: '#b16f44', name: 'Terracotta' },
    { color: '#718493', name: 'Dusty Blue' },
    { color: '#9ca9bc', name: 'Soft Blue' },
    { color: '#cebba1', name: 'Beige' }
  ];

  return (
    <section className="py-16 animate-fade-in max-w-4xl mx-auto">
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
              {/*{section.showColors && (*/}
              {/*    <div className="flex space-x-3 mt-4 justify-center">*/}
              {/*      {dressColors.map((colorItem, colorIndex) => (*/}
              {/*          <div*/}
              {/*              key={colorIndex}*/}
              {/*              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"*/}
              {/*              style={{ backgroundColor: colorItem.color }}*/}
              {/*              title={colorItem.name}*/}
              {/*          />*/}
              {/*      ))}*/}
              {/*    </div>*/}
              {/*)}*/}
              {section.showMenuLink && (
                  <div className="flex space-x-3 mt-4 justify-center">
                    <a href="/menu" target="_blank" rel="noopener noreferrer" className="text-blush-600 hover:underline">
                      Zobrazit menu
                    </a>
                  </div>
              )}
              {/*{section.showParkingLink && (*/}
              {/*    <div className="flex space-x-3 mt-4 justify-center">*/}
              {/*      <a*/}
              {/*          // href="/parking"*/}
              {/*          disabled="disabled" target="_blank" rel="noopener noreferrer" className="text-gray-600*/}
              {/*          ">*/}
              {/*          /!*hover:underline*!/*/}
              {/*        Mapa bude připravena později*/}
              {/*      </a>*/}
              {/*    </div>*/}
              {/*)}*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
