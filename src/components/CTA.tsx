const CTA = () => {
  return (
    <div className="grid bg-cta p-6 md:flex justify-center gap-6 items-center">
      <p className="text-center md:text-left">
        Download this report to know how efficient we produce results.
      </p>
      <div className="w-44 m-auto md:m-0 bg-gradient-to-r rounded-2xl from-[#ED3446] to-[#2A69C4] p-[1px]">
        <div className="bg-black rounded-2xl flex justify-center">
          <button className="py-1.5 px-6 text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#ED3446] to-[#2A69C4]">
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
