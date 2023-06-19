import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-primary">
      <div className="bg-hero bg-fill  md:bg-center">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between p-20">
            <p className="text-2xl text-center md:text-left md:text-xl mb-12">
              Pick an app to get started
            </p>
            <div className="md:grid md:grid-cols-2 gap-6 mb-16">
              <a href="https://incorpd.ai/">
                <div className="bg-[#1f1f1f] px-8 pt-10 pb-8 rounded-xl  min-h-[220px]">
                  <div className="flex justify-between">
                    <div className="relative w-16 h-12">
                      <Image
                        src="/images/incorpd-logo.png"
                        alt="Incorpd Logo"
                        fill
                      />
                    </div>

                    <h2 className="uppercase text-right text-2xl tracking-widest font-semibold">
                      Incorpd
                    </h2>
                  </div>
                  <div>
                    <p className="mt-10 text-right text-[#BBBBBB]">
                      Register your Business Hassle-free with incorpd.
                    </p>
                  </div>
                </div>
              </a>
              <a href="https://app.infin.one/login/">
                <div className="bg-[#1f1f1f] px-8 pt-10 pb-8 rounded-xl mt-8 md:mt-0 min-h-[220px]">
                  <div className="flex justify-between">
                    <div className="relative w-16 h-10">
                      <Image
                        src="/images/infin-logo.png"
                        alt="Incorpd Logo"
                        fill
                      />
                    </div>
                    <h2 className="uppercase text-right text-2xl tracking-widest font-semibold">
                      Infin
                    </h2>
                  </div>
                  <div>
                    <p className="mt-10 text-right text-[#BBBBBB]">
                      Make bookkeeping a breeze.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            {/* <button className="bg-gray-100 py-1.5 px-6 rounded-xl w-44">
              <p className="text-transparent bg-clip-text text-sm bg-gradient-to-r from-[#ED3446] to-[#2A69C4]  font-semibold">
                Download Report
              </p>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
