
import { Flower2 } from 'lucide-react';
import FloralDivider from './FloralDivider';

const SignatureDrinksComponent = () => {
    const drinks = [
        {
            title: 'No. 1 - Sour',
            summary: 'lehký - bylinky - zelené jablko',
            description: 'vodka · citron · zelené jablko · soda · máta',
            color: 'sage'
        },
        {
            title: 'No. 2 - Sweet',
            summary: 'květinový - citrusy - spritz',
            description: 'gin · rose cordial (okyselený lehký sirup z růží) · Aperol · Lillet Blanc (aperitivní víno) · prosecco · voda z růží',
            color: 'blush'
        },
        {
            title: 'No. 3 - Bitter',
            summary: 'hořký - uzená sůl - svěží',
            description: 'Malfy Rosa gin · Pampelle (francouzský hořký likér) · klarifikovaný grepový džus · soda · maldonská sůl · grapefruit',
            color: 'sage'
        },
        {
            title: 'No. 4 - Smoky',
            summary: 'červené ovoce - kouř - svěží',
            description: 'Laphroig Select whisky / San Cosme mezcal · portské víno · Creme de Mure - ostružinový likér · Lime Cordial - okyselený lehký sirup z limety',
            color: 'blush'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blush-50 via-white to-sage-50 p-8 print:p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 pb-8">
                    <FloralDivider />

                    <div className="mb-8">
                        <h2 className="font-script text-6xl text-blush-600 -mt-2">
                            Signature drinky
                        </h2>
                    </div>
                </div>

                {/* Signature Drinks */}
                <section className="mb-16">
                    <div className="space-y-12 max-w-2xl mx-auto">
                        {drinks.map((drink, index) => (
                            <div key={index} className="text-center">
                                <div className="flex items-center justify-center mb-4">
                                    {/*<div className={`w-12 h-px bg-gradient-to-r from-transparent ${drink.color === 'blush' ? 'via-blush-300' : 'via-sage-300'} to-transparent`}></div>*/}
                                    {/*<Flower2 className={`w-4 h-4 mx-3 ${drink.color === 'blush' ? 'text-blush-400' : 'text-sage-400'}`} />*/}
                                    {/*<div className={`w-24 h-px bg-gradient-to-r from-transparent ${drink.color === 'blush' ? 'via-blush-300' : 'via-sage-300'} to-transparent`}></div>*/}
                                </div>
                                {/*<p className="text-xs text-gray-500 mb-2">lepek, laktóza</p>*/}
                                <h3 className={`font-sans text-xl mb-2 tracking-wide ${drink.color === 'blush' ? 'text-gray-900' : 'text-gray-900'}`}>
                                {/*<h3 className={`font-sans text-xs text-gray-500 mb-2 tracking-wide uppercase ${drink.color === 'blush' ? 'text-gray-900' : 'text-gray-900'}`}>*/}
                                    {drink.title}
                                </h3>
                                {/*<h3 className={`font-sans text-xs text-gray-500 mb-2 tracking-wide uppercase ${drink.color === 'blush' ? 'text-gray-900' : 'text-gray-900'}`}>*/}
                                {/*    {drink.summary}*/}
                                {/*</h3>*/}

                                <p className="text-sm font-sans tracking-wide uppercase text-gray-900">
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
            </div>
        </div>
    );
};

export default SignatureDrinksComponent;