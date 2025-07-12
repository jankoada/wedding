import { Flower2 } from 'lucide-react';
import FloralDivider from './FloralDivider';

const BeverageMenuComponent = () => {
    const alkoDrinks = [
        'Točený Kozel 11°',
        'Prosecco',
        'Aperol',
        'Víno',
        'Gin klasický / růžový',
        'Vodka',
        'Captain Morgan Spiced',
        'Jägermeister',
        'Legendario Elixír 34 %',
        'R. Jelínek Moravská švestka 38 %'
    ];

    const nealkoDrinks = [
        'Točený Birell Pomelo Grep',
        'Birell IPA',
        'Džus jablko / pomeranč',
        'Domácí limonáda',
        'Cola',
        'Sprite',
        'Tonic',
        'Red Bull'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blush-50 via-white to-sage-50 p-8 print:p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 pb-8">
                    <FloralDivider />

                    <h1 className="font-script text-6xl text-blush-600 mb-6">
                        Nápojový lístek
                    </h1>
                </div>

                {/* Alcoholic Drinks */}
                <section className="mb-12">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blush-300 to-transparent"></div>
                            <Flower2 className="w-5 h-5 text-blush-400 mx-3" />
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blush-300 to-transparent"></div>
                        </div>
                        <h2 className="font-script text-4xl text-blush-600 mb-2">
                            Alkoholické nápoje
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        {alkoDrinks.map((drink, index) => (
                            <div key={drink} className={`bg-white/60 backdrop-blur-sm rounded-lg p-4 ${index % 2 === 0 ? 'border-blush-200/30' : 'border-sage-200/30'}`}>
                                <h3 className="font-sans font-medium text-foreground text-center text-gray-900">{drink}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Non-Alcoholic Drinks */}
                <section className="mb-12">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent"></div>
                            <Flower2 className="w-5 h-5 text-sage-400 mx-3" />
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent"></div>
                        </div>
                        <h2 className="font-script text-4xl text-sage-600 mb-2">
                            Nealkoholické nápoje
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        {nealkoDrinks.map((drink, index) => (
                            <div key={drink} className={`bg-white/60 backdrop-blur-sm rounded-lg p-4 ${index % 2 === 0 ? 'border-sage-200/30' : 'border-blush-200/30'}`}>
                                <h3 className="font-sans font-medium text-foreground text-center text-gray-900">{drink}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer decoration */}
                <FloralDivider />
            </div>
        </div>
    );
};

export default BeverageMenuComponent;