import { ReactElement } from "react";

type CTACardPropsType = {
  title: string;
  desc: string;
  children?: ReactElement;
};
function CTACard({ title, desc, children }: CTACardPropsType) {
  return (
    <div className="group mt-auto h-72 rounded-2xl bg-[#333333] p-0.5 text-center">
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

export default function IncorpdCTA() {
  return (
    <section className="bg-secondary">
      <div className="bg-incorpd bg-fixed bg-fill bg-[right_10rem] md:bg-center py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-6">
            <CTACard
              title="Automated Process"
              desc="Enter your information, upload essential documents, then sit back & watch your company come to life."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-8 h-8 text-incorpd/80"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </CTACard>

            <CTACard
              title="Full Information View"
              desc="See the progress of your company registration paperwork in
              real-time, access and save important information and documents
              in a single online location."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-incorpd/80"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                />
              </svg>
            </CTACard>

            <CTACard
              title="Transparent and Professional"
              desc="Transparent pricing: pay what you see, with milestone-based
              payments and all-inclusive legal and professional fees."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-incorpd/80"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </CTACard>
          </div>

          <div className="flex justify-center">
            <button className="bg-incorpd/70 text-white pt-4 text-lg pb-3 px-8 rounded-xl mt-16 font-semibold hover:bg-incorpd/90">
              Start a company
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
