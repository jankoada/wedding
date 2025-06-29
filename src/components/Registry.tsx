
import {Calendar, Heart} from 'lucide-react';
import { Gift } from 'lucide-react';

const Registry = () => {
  return (
    <section className="py-16 animate-fade-in">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-6">
          <div className="flex items-center justify-center space-x-2">
            <Gift className="w-8 h-8 text-blush-500 flex-shrink-0" />
            <span>Dary</span>
          </div>
          {/*Dary*/}
          {/*<Gift className="w-6 h-6 text-blush-500 mt-1 flex-shrink-0" />*/}
          {/*Dary 🎁*/}
          {/*Dary*/}
        </h2>
        <p className="font-serif text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Je pro nás darem už jen to, že to s vámi můžeme oslavit. A pokud byste nám chtěli přispět na konání svatby, můžete využít QR kód níže a případně nám zanechat milý vzkaz.
        </p>
        <p className="text-gray-600 mb-8 font-medium">
          {/*Děkujeme ze srdce!*/}
        </p>
        
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-sm">
            <div className="w-48 h-48 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
              <img 
                src="/assets/qr_code.png"
                alt="QR kód pro příspěvky na svatbu" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/*<div className="flex items-center justify-center space-x-2 text-blush-600">*/}
              {/*<Heart className="w-5 h-5" />*/}
              {/*<span className="font-serif text-lg">Děkujeme</span>*/}
              {/*<Heart className="w-5 h-5" />*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registry;
