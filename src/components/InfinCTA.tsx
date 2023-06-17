import { ReactElement } from "react";

type CTACardPropsType = {
  title: string;
  desc: string;
  children?: ReactElement;
};
function CTACard({ title, desc, children }: CTACardPropsType) {
  return (
    <div className="group mt-auto h-72 rounded-2xl bg-[#333333] p-0.5 text-center mb-6 md:mb-0">
      <div className="h-full rounded-2xl bg-primary p-6">
        <span className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/40">
          {children}
        </span>
        <h5 className="mt-8 text-base font-bold">{title}</h5>
        <p className="mt-2 text-sm text-font-sec">{desc}</p>
      </div>
    </div>
  );
}

export default function InfinCTA() {
  return (
    <section className="bg-secondary">
      <div className="bg-infin bg-fixed py-20 bg-cover bg-[right_10rem] md:bg-center">
        <div className="container mx-auto">
          <div className="md:grid grid-cols-3 gap-6">
            <CTACard
              title="Get Set Go"
              desc="Add a customer, generate invoices and collect money seamlessly and effortlessly."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-infin/80"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </CTACard>
            <CTACard
              title="Everywhere all the time"
              desc="Access your accounts through the web or mobile application as and when you want."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-infin/80"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                />
              </svg>
            </CTACard>
            <CTACard
              title="Fintelligence"
              desc="Easily get timely data and information to make the best decisions for your business."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-infin/80"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </CTACard>
          </div>

          <div className="flex justify-center">
            <button className="bg-infin/80 text-white pt-4 text-lg pb-3 px-8 rounded-xl mt-16 font-semibold hover:bg-infin/90">
              Manage your business
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
