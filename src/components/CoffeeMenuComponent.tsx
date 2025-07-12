import { Flower2 } from 'lucide-react';
import FloralDivider from './FloralDivider';

const CoffeeMenuComponent = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blush-50 via-white to-sage-50 p-8 print:p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 pb-8">
                    <FloralDivider />

                    <h1 className="font-script text-6xl text-blush-600 mb-6">
                        Kávový lístek
                    </h1>
                </div>

                {/* Hot Drinks */}
                <section className="mb-12">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blush-300 to-transparent"></div>
                            <Flower2 className="w-5 h-5 text-blush-400 mx-3" />
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blush-300 to-transparent"></div>
                        </div>
                        <h2 className="font-script text-3xl text-blush-600 mb-2">
                            Teplé nápoje
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {[
                            'Espresso',
                            'Double Espresso',
                            'Americano',
                            'Macchiato (Cortado)',
                            'Cappuccino',
                            'Caffè Latte',
                            'Babyccino'
                        ].map((drink, index) => (
                            <div key={drink} className={`bg-white/60 backdrop-blur-sm rounded-lg p-4 ${index % 2 === 0 ? 'border-blush-200/30' : 'border-sage-200/30'}`}>
                                <h3 className="font-sans font-medium text-foreground text-center text-gray-900">{drink}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Filtered Drinks */}
                <section className="mb-12">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent"></div>
                            <Flower2 className="w-5 h-5 text-sage-400 mx-3" />
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent"></div>
                        </div>
                        <h2 className="font-script text-3xl text-sage-600 mb-2">
                            Filtrované nápoje
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                        {['Batch Brew', 'V60'].map((drink) => (
                            <div key={drink} className="bg-white/60 backdrop-blur-sm rounded-lg p-4">
                                <h3 className="font-sans font-medium text-foreground text-center text-gray-900">{drink}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Cold Drinks */}
                <section className="mb-12">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blush-300 to-transparent"></div>
                            <Flower2 className="w-5 h-5 text-blush-400 mx-3" />
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blush-300 to-transparent"></div>
                        </div>
                        <h2 className="font-script text-3xl text-blush-600 mb-2">
                            Studené nápoje
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                        {['Cold Brew', 'Ice Latte', 'Espresso Tonic'].map((drink, index) => (
                            <div key={drink} className={`bg-white/60 backdrop-blur-sm rounded-lg p-4 ${index % 2 === 0 ? 'border-blush-200/30' : 'border-sage-200/30'}`}>
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

export default CoffeeMenuComponent;