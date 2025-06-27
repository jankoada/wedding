
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blush-100 via-white to-sage-100 py-12 mt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="font-script text-4xl text-gray-800 mb-4">Děkujeme</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {/*Jsme nesmírně vděční za vaši lásku a podporu, když společně začínáme tuto novou životní etapu.*/}
            {/*Vaše přítomnost v našich životech pro nás znamená celý svět a nemůžeme se dočkat, až to s vámi oslavíme!*/}
          </p>
        </div>
        
        {/*<div className="flex items-center justify-center space-x-6 mb-8">*/}
        {/*  <a href="#" className="text-gray-600 hover:text-blush-600 transition-colors">*/}
        {/*    <Instagram className="w-6 h-6" />*/}
        {/*  </a>*/}
        {/*  <a href="#" className="text-gray-600 hover:text-blush-600 transition-colors">*/}
        {/*    <Facebook className="w-6 h-6" />*/}
        {/*  </a>*/}
        {/*  <a href="#" className="text-gray-600 hover:text-blush-600 transition-colors">*/}
        {/*    <Twitter className="w-6 h-6" />*/}
        {/*  </a>*/}
        {/*</div>*/}
        
        {/*<div className="flex items-center justify-center space-x-2 text-gray-600">*/}
        {/*  <span>Vyrobil s láskou</span>*/}
        {/*  <Heart className="w-4 h-4 text-blush-500 fill-current" />*/}
        {/*  <span>Adam & AI</span>*/}
        {/*</div>*/}
        
        <div className="flex items-center justify-center space-x-2 mt-6 text-sm text-gray-500">
          <span>Vyrobil s láskou</span>
          <Heart className="w-4 h-4 text-blush-500 fill-current" />
          <span>Adam & AI</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
