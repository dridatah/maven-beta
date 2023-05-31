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
            <div className="md:grid md:grid-cols-2 gap-14 mb-16 ">
              <div className="flex justify-between gap-6 md:gap-10 bg-[#1f1f1f] px-8 py-10 rounded-xl w-72 md:w-96 ml-auto">
                <div>
                  <Image
                    src="/images/incorpd-logo.png"
                    alt="Incorpd Logo"
                    width={70}
                    height={10}
                  />
                </div>
                <div>
                  <h2 className="uppercase text-right tracking-widest font-semibold">
                    Incorpd
                  </h2>
                  <p className="text-sm mt-10 md:mt-16 text-right text-[#BBBBBB]">
                    Get started with the first step. Set up your business.
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-6 md:gap-10 bg-[#1f1f1f] px-8 py-10 rounded-xl w-72 md:w-96 mt-8 md:mt-0">
                <div>
                  <Image
                    src="/images/infin-logo.png"
                    alt="Incorpd Logo"
                    width={75}
                    height={75}
                  />
                </div>
                <div>
                  <h2 className="uppercase text-right tracking-widest font-semibold">
                    Infin
                  </h2>
                  <p className="text-sm mt-10 md:mt-16 text-right text-[#BBBBBB]">
                    Get started with the first step. Set up your business.
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-gray-100 py-1.5 px-6 rounded-xl w-44">
              <p className="text-transparent bg-clip-text text-sm bg-gradient-to-r from-[#ED3446] to-[#2A69C4]  font-semibold">
                Download Report
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
