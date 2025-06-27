
const InvitationText = () => {
  return (
    <section className="text-center py-16 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="font-serif text-lg md:text-xl">
            S radostí a láskou vás zveme, abyste se s námi podělili o jeden z nejkrásnějších okamžiků našeho života.
          </p>
          <div className="py-6">
            <p className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
              <span className="font-script text-3xl text-blush-500">Adam</span>
              <span className="mx-4">&</span>
              <span className="font-script text-3xl text-blush-500">Tereza</span>
            </p>
          </div>
          <div className="pt-4">
            <p className="font-serif text-xl md:text-2xl text-gray-800">
              Dne 26. 7. 2025 si řekneme své „ano“
            </p>
            <p className="font-serif text-xl md:text-2xl text-gray-800 mt-2">
              a spojíme své životy v manželství.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationText;
