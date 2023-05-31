import Image from "next/image";
import Badge from "./Badge";

export default function Incorpd() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="flex flex-col items-end order-2 md:order-1">
            <div className="w-full">
              <div className="relative h-52 md:h-72">
                <Image src="/images/incorpd-preview.png" alt="" fill />
              </div>

              <div className="mt-8">
                <div>
                  <Badge title="Business Registration" />
                  <Badge title="Status Tracking" />
                </div>
                <div>
                  <Badge title="Payment Calculator" />
                  <Badge title="One Click Payments" />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="uppercase text-2xl tracking-widest mb-6 text-incorpd">
              Incorpd
            </h2>
            <h3 className="text-4xl md:text-5xl whitespace-pre-line leading-tight mb-10 font-semibold">
              {`A must have
                tool tailored for
                Entrepreneurs.`}
            </h3>
            <p className="text-lg whitespace-pre-line leading-snug">
              {`Are you a Business Owner, Enterpreneur
                or an SME ?. We are the right choice for 
                your incorporation needs.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
