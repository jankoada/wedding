import FloralDivider from "@/components/FloralDivider.tsx";

const WeddingMenu = () => {
    return (
        <div className="min-h-screen bg-white p-8 print:p-6">
            <div className="max-w-4xl mx-auto">
                {/*<FloralDivider></FloralDivider>*/}
                {/* Welcome Food */}
                <section className="mb-8">
                    {/*<h2 className="font-serif text-2xl font-semibold text-gray-800 mb-4 text-center bg-gray-100 py-2">*/}
                    {/*    WELCOME FOOD 11:00 - 12:30*/}
                    {/*</h2>*/}
                    <h2 className="floral-divider font-script text-4xl font-semibold text-gray-800 mb-4 text-center  py-2">
                        Welcome Food 11:00 - 12:30
                    </h2>

                    <div className="space-y-4">
                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">KANAPKY S HOVĚZÍM TATARÁKEM</h3>
                            <p className="text-xs text-gray-500 mb-2">lepek, laktóza</p>
                            <p className="text-sm text-gray-600">Smetana, bazalka, kapary, limetková šťáva, šalotka, vše na naší opečené mléčné briošce.</p>
                        </div>

                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">KANAPKY S HUMMUSEM Z BÍLÝCH FAZOLÍ</h3>
                            <p className="text-xs text-gray-500 mb-2">lepek, vegan</p>
                            <p className="text-sm text-gray-600">Sezamová pasta tahini, grilovaná paprika, olivová tapenáda, sezamová sůl gomasio, podáváme na mini pitě.</p>
                        </div>
                    </div>
                </section>

                {/* Ceremony */}
                <section className="mb-8 floral-divider">
                    {/*<h2 className="font-serif text-2xl font-semibold text-center bg-gray-800 text-white py-2">*/}
                    {/*    OBŘAD 12:30-13:00*/}
                    {/*</h2>*/}
                    {/*<FloralDivider></FloralDivider>*/}
                    <h2 className="font-script text-4xl font-semibold text-gray-800 mb-4 text-center  py-2">
                        Obřad 12:30 - 13:00
                    </h2>
                    {/*<FloralDivider></FloralDivider>*/}
                </section>

                {/* Raut */}
                <section className="mb-8">
                    {/*<h2 className="font-serif text-2xl font-semibold text-gray-800 mb-4 text-center bg-gray-100 py-2">*/}
                    {/*    RAUT 12:45 - 22:00*/}
                    {/*</h2>*/}
                    <h2 className="floral-divider font-script text-4xl font-semibold text-gray-800 mb-4 text-center  py-2">
                        Celodenní raut 13:00 - 22:00
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">MIX ŘÍZKŮ OBALOVANÝCH V NAŠÍ BYLINKOVÉ STROUHANCE, VÍDEŇSKÝ BRAMBOROVÝ SALÁT</h3>
                            <p className="text-xs text-gray-500 mb-2">lepek</p>
                            <p className="text-sm text-gray-600">Vepřová panenka a krůtí prsa, citrón.</p>
                        </div>

                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">MINI PITA</h3>
                            <p className="text-xs text-gray-500 mb-2">lepek, laktóza</p>
                            <p className="text-sm text-gray-600">Grilovaná sezónní zelenina, kyperský sýr halloumi z lokální farmy Moravec z Neumětel.</p>
                        </div>

                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">PLATE S PÁLENÝM LILKEM</h3>
                            <p className="text-xs text-gray-500 mb-2">laktóza, bez tortilly bezlepkové - tortilla bude zvlášť v misce</p>
                            <p className="text-sm text-gray-600">Spread ze sýru feta, na ohni opalovaný lilek, granátové jablko, pasta harrisa, koření sumah, extra panenský olivový olej, čerstvý kopr, podáváme se smaženou pšeničnou tortillou.</p>
                        </div>

                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">HUMMUS PLATE</h3>
                            <p className="text-xs text-gray-500 mb-2">vegan, bez pity bezlepkové - pita bude zvlášť</p>
                            <p className="text-sm text-gray-600">Hummus z bílých fazolí a sezamové pasty tahini, sezamová sůl gomasio, pálená paprika, restovaná cizrna, koření sumah, extra panenský olivový olej, olivy kalamata + náš chléb pita.</p>
                        </div>

                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">HOVĚZÍ TATARÁK</h3>
                            <p className="text-xs text-gray-500 mb-2">lepek, laktóza</p>
                            <p className="text-sm text-gray-600">Se smetanou, bazalkou, kapary, extra panenský olivový olej, šalotka, limetková šťáva, na opečené francouzské bagetce.</p>
                        </div>

                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">PULLED PORK SANDWICH</h3>
                            <p className="text-xs text-gray-500 mb-2">lepek, laktóza</p>
                            <p className="text-sm text-gray-600">Trhané vepřové ramínko, naše ovocná bbq omáčka, krémový coleslaw s modrým sýrem, vše v našich barevných sezamových brioškách.</p>
                        </div>

                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">CAPRESE PLATE</h3>
                            <p className="text-xs text-gray-500 mb-2">laktóza</p>
                            <p className="text-sm text-gray-600">Mozzarella bocconcini, cherry rajčata, olivy kalamata, čerstvá bazalka, panenský olivový olej.</p>
                        </div>

                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">BRUSCHETTA SE SICILSKOU CAPONATOU</h3>
                            <p className="text-xs text-gray-500 mb-2">laktóza, lepek</p>
                            <p className="text-sm text-gray-600">S rozinkami a piniovými oříšky a sýrem taleggio, podáváme s česnekovými crostini.</p>
                        </div>

                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">MELOUNOVÝ PLATE</h3>
                            <p className="text-sm text-gray-600">Plate s vodním melounem.</p>
                        </div>
                    </div>
                </section>

                {/* Food Truck Lunch */}
                <section className="mb-8 page-break-before">
                    {/*<h2 className="font-serif text-2xl font-semibold text-gray-800 mb-4 text-center bg-gray-100 py-2">*/}
                    {/*    OBĚD Z FOOD TRUCKU 13:00 - 16:00*/}
                    {/*</h2>*/}
                    <h2 className="floral-divider font-script text-4xl font-semibold text-gray-800 mb-4 text-center  py-2">
                        Oběd z Food Trucku 13:00 - 16:00
                    </h2>

                    <div className="space-y-4">
                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">FILÍROVANÝ ASIJSKÝ BŮČEK</h3>
                            <p className="text-sm text-gray-600">Zprudka pečené plátky křehkého bůčku s čínskou omáčkou „master sauce" s badyánem a suchým cherry, listový salát s čerstvým koriandrem, thajskou bazalkou a zeleninou, sladko-kyselá zálivka Nuoc cham, podáváme s jasmínovou rýží.</p>
                        </div>

                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">SMAŽENÉ ČOČKOVÉ KULIČKY</h3>
                            <p className="text-xs text-gray-500 mb-2">vegan, lepek</p>
                            <p className="text-sm text-gray-600">Čínská omáčka „master sauce" s badyánem a suchým cherry, listový salát s čerstvým koriandrem, thajskou bazalkou a zeleninou, sladko-kyselá zálivka Nuoc cham, podáváme s jasmínovou rýží.</p>
                        </div>

                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">SMAŽENÉ BRAMBOROVÉ KROKETY SE SÝREM ČEDAR</h3>
                            <p className="text-xs text-gray-500 mb-2">lepek, laktóza</p>
                            <p className="text-sm text-gray-600">Podáváme s kubánským kečupem s třtinovou melasou a paprikami ancho a chipotle majonézou.</p>
                        </div>
                    </div>
                </section>

                {/* Food Truck Evening */}
                <section className="mb-8">
                    {/*<h2 className="font-serif text-2xl font-semibold text-gray-800 mb-4 text-center bg-gray-100 py-2">*/}
                    {/*<h2 className="font-serif text-2xl font-semibold text-gray-800 mb-4 text-center  py-2">*/}
                    {/*    VEČERNÍ VÝDEJ Z FOOD TRUCKU 18:00 - 22:00*/}
                    {/*</h2>*/}
                    <h2 className="floral-divider font-script text-4xl font-semibold text-gray-800 mb-4 text-center  py-2">
                        Večerní výdej z Food Trucku 18:00 - 22:00
                    </h2>

                    <div className="space-y-4">
                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">MEXICKÉ TACOS</h3>
                            <div className="text-sm text-gray-600 space-y-1">
                                <p>• Vepřové carnitas (pomalu pečené vepřové v pomerančové a limetkové šťávě s římským kmínem a česnekem)</p>
                                <p>• Podáváme v kukuřičných plackách, čerstvě nasekaná bílá cibule, segment limetky, čerstvý koriandr</p>
                                <p>• Na výběr ze tří druhů sals: avokádová salsa guacamole, rajčatová salsa pico de gallo a salsa verde z mexických zelených rajčátek tomatillos</p>
                            </div>
                        </div>

                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">MEXICKÉ TACOS VEGE</h3>
                            <p className="text-xs text-gray-500 mb-2">vegan</p>
                            <div className="text-sm text-gray-600 space-y-1">
                                <p>• Quinoa chorizo v kukuřičné placce, čerstvě nasekaná bílá cibule, segment limetky, čerstvý koriandr</p>
                                <p>• Na výběr ze tří druhů sals: avokádová salsa guacamole, rajčatová salsa pico de gallo a salsa verde z mexických zelených rajčátek tomatillos</p>
                            </div>
                        </div>

                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">PAPAS RELLENAS</h3>
                            <p className="text-xs text-gray-500 mb-2">lepek, laktóza</p>
                            <p className="text-sm text-gray-600">Bolivijské bramborové krokety plněné hovězím masem dušeným s mexickými paprikami guajillo, podáváme s chipotle zauzenou majonézou, pošírovaná červená cibule v pomerančové šťávě.</p>
                        </div>

                        <div className="border-l-4 border-blush-300 pl-4">
                            <h3 className="font-semibold text-gray-800">BAO BUNS VEGE</h3>
                            <p className="text-xs text-gray-500 mb-2">lepek</p>
                            <p className="text-sm text-gray-600">Asijské nadýchané bochánky plněné tofu, kimchi s jablky, korejská majonéza s chilli pastou gochujang, thajská bazalka.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default WeddingMenu;
