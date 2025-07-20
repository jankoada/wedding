
import { Flower2 } from 'lucide-react';
import FloralDivider from './FloralDivider';

const WineListComponent = () => {
    const drinks = [
        {
            title: 'Pinot Gris',
            summary: 'polosuché, pozdní sběr 2021',
            description: 'Vůně je typicky odrůdová s tóny máslové hrušky a chlebové kůrky doprovázená krémovými tóny. V chuti je šťavnaté s příjemnou kyselinou.',
        },
        {
            title: 'Chardonnay',
            summary: 'suché, pozdní sběr 2023',
            description: 'Vůně se znaky zralého žlutého ovoce a hrušek. Plná chuť s dominující mineralitou.',
        },
        {
            title: 'Tramín červený',
            summary: 'polosladké, pozdní sběr 2023',
            description: 'Tóny kandovaného liči, růžového oleje ale i charakter hřebíčku a skořice. Chuť je postavená na výraznějším zbytkovém cukru.',
        },
        {
            title: 'Pinot noir rosé',
            summary: 'suché, pozdní sběr 2022',
            description: 'Charakter třešňového květu a jasmínu s lehkou mineralitou.',
        },
        {
            title: 'Ryzlink rýnský',
            summary: 'suché, pozdní sběr 2023',
            description: 'Víno kvasilo v sudech o objemu 1000 l pro ideální pro poměr mezi ovocností ryzlinku a stopou charakteru dřeva. Kyselost s tóny limetkové kůry, sušeného zázvoru a výrazné slanosti, která je dána podložím.',
        },
        {
            title: 'Veltlínské zelené',
            summary: 'suché, kabinet 2021',
            description: 'Typicky odrůdová vůně s tóny citrusů, grepové kůry a bílého pepře. Minerální květnatá chuť s tóny žlutého ovoce.',
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blush-50 via-white to-sage-50 p-8 print:p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 pb-8">
                    <FloralDivider />

                    <div>
                        <h2 className="font-script text-6xl text-blush-600 -mt-2">
                            Vinný lístek
                        </h2>
                    </div>
                </div>

                {/* Signature Drinks */}
                <section className="mb-8 -mt-16">
                    <div className="space-y-12 max-w-2xl mx-auto">
                        {drinks.map((drink, index) => (
                            <div key={index} className="text-center">
                                <div className="flex items-center justify-center mb">
                                    {/*<div className={`w-12 h-px bg-gradient-to-r from-transparent ${drink.color === 'blush' ? 'via-blush-300' : 'via-sage-300'} to-transparent`}></div>*/}
                                    {/*<Flower2 className={`w-4 h-4 mx-3 ${drink.color === 'blush' ? 'text-blush-400' : 'text-sage-400'}`} />*/}
                                    {/*<div className={`w-24 h-px bg-gradient-to-r from-transparent ${drink.color === 'blush' ? 'via-blush-300' : 'via-sage-300'} to-transparent`}></div>*/}
                                </div>
                                {/*<p className="text-xs text-gray-500 mb-2">lepek, laktóza</p>*/}
                                <h3 className={`font-sans text-xl mb-2 tracking-wide text-gray-900`}>
                                {/*<h3 className={`font-sans text-xs text-gray-500 mb-2 tracking-wide uppercase ${drink.color === 'blush' ? 'text-gray-900' : 'text-gray-900'}`}>*/}
                                    {drink.title}
                                </h3>
                                <h3 className={`font-sans text-xs text-gray-500 mb-2 tracking-wide uppercase text-gray-900`}>
                                    {drink.summary}
                                </h3>

                                <p className="text-sm font-sans tracking-wide text-gray-900">
                                    {drink.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer decoration */}
                {/*<div className="mt-16">*/}
                {/*    <FloralDivider />*/}
                {/*</div>*/}
                {/*<img src={}*/}
                <div className="flex justify-center">
                    <div className="w-64">
                        <img
                            src="/assets/thaya-logo.jpeg"
                            alt="Thaya"
                            className="w-full h-full"
                        />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default WineListComponent;