
const InvitationText = () => {
  return (
    <section className="text-center py-16 animate-fade-in max-w-4xl mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="font-serif text-lg md:text-xl max-w-4xl">
            {/*S radostí a láskou vás zveme, abyste se s námi podělili o jeden z nejkrásnějších okamžiků našeho života.*/}
            {/*S velkou radostí vás zveme, abyste s námi prožili jeden z nejhezčích dní v našem životě.*/}
            S velkou radostí vás zveme k oslavě našeho svatebního dne.
          </p>
          <div className="y-6">
            <p className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
              <span className="font-script text-3xl text-blush-500">Adam</span>
              <span className="mx-4">&</span>
              <span className="font-script text-3xl text-blush-500">Tereza</span>
            </p>
          </div>
          <div className="y-6 font-serif text-lg md:text-xl">
            <p >
              Dne 26. 7. 2025 započneme společnou cestu manželstvím
              {/*Dne 26. 7. 2025 si řekneme své „ano“*/}
            </p>
            <p>
              a staneme se rodinou.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationText;
