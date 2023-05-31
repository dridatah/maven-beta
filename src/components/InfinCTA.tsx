export default function InfinCTA() {
  return (
    <section className="bg-secondary">
      <div className="bg-infin py-24 bg-cover bg-[right_10rem] md:bg-center">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl leading-tight whitespace-pre-line mb-8 font-semibold">
            {`An `}
            <span className="text-infin">Unified portal</span>
            <br />
            {`for all your 
            business queries`}
          </h2>
          <p className="text-lg whitespace-pre-line">
            {`Infin hosts all the out of the box tools which 
            makes you focus on your strategies.`}
          </p>
          <button className="bg-gray-100 text-black pt-3 pb-2 px-6 rounded-xl mt-6 font-semibold">
            Manage your business
          </button>
        </div>
      </div>
    </section>
  );
}
