export default function IncorpdCTA() {
  return (
    <section className="bg-secondary">
      <div className="bg-incorpd bg-fill bg-[right_10rem] md:bg-center py-24">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl leading-tight whitespace-pre-line mb-8 font-semibold">
            <span className="text-incorpd">Kickstart</span>
            {` your
        business and
        gain momentum`}
          </h2>
          <p className="text-lg whitespace-pre-line">
            {`Incorpd helps you start your business 
          without worrying about variables`}
          </p>
          <button className="bg-gray-100 text-black pt-3 pb-2 px-6 rounded-xl mt-6 font-semibold">
            Start a company
          </button>
        </div>
      </div>
    </section>
  );
}
