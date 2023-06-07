import Image from "next/image";

type TestimonialPropsType = {
  name: string;
  role: string;
  desc: string;
};
function Testimonial({ name, role, desc }: TestimonialPropsType) {
  return (
    <div className="bg-[#212121] p-6 rounded-3xl relative mb-6 md:mb-0">
      <div className="h-9 md:h-10 w-9 md:w-10 absolute right-7 md:right-6 -top-4 md:-top-6">
        <Image src="/images/testimonial.png" alt="" fill />
      </div>
      <h4 className="mb-3">{name}</h4>
      <p className="text-sm mb-6 text-[#BBBBBB]">{role}</p>
      <p className="text-sm text-[#BBBBBB]">{desc}</p>
    </div>
  );
}

export default function Community() {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto">
        <div className="">
          <div className="mb-24">
            <p className="mb-6 tracking-widest">YOU ARE IN GOOD COMPANY</p>
            <h2 className="text-4xl md:text-5xl whitespace-pre-line leading-tight font-semibold">
              {`Join the Community 
                by using our app to 
                grow faster`}
            </h2>
          </div>
          <div className="md:grid md:grid-cols-3 gap-8">
            <Testimonial
              name="John Oliver, Manager"
              role="TCS, Chennai"
              desc="Submit all your business documents under one portal. It will be stored securely and private."
            />
            <Testimonial
              name="Tom Crank, Freelancer"
              role="Trivandrum"
              desc="Infin made my life easier. I focus on getting more clients and not about insurance renewal. "
            />
            <Testimonial
              name="Tom Crank, Freelancer"
              role="Trivandrum"
              desc="Infin made my life easier. I focus on getting more clients and not about insurance renewal. "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
