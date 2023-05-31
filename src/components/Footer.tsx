import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-primary py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-7">
          <div className="col-span-3">
            <div className="relative h-8 w-36">
              <Image
                src="/images/mavenstry-logo.png"
                alt="Mavenstry Logo"
                fill
              />
            </div>
            <p className="whitespace-pre-line leading-relaxed mt-6 text-font-sec text-sm">{`S42, 8th Floor
              Centre A, MG Road
              Kochi, Kerala - 683025`}</p>

            <h6 className="mt-10 font-semibold">Secure. Fast. Robust</h6>
            <p className="whitespace-pre-line leading-relaxed mt-6 text-font-sec text-sm">{`Mavenstry uses a highly secure
            platform where your documents are safe.`}</p>
            <p className="leading-relaxed mt-6 text-font-sec text-sm">
              contact@mavenstry.com
            </p>
            <p className="leading-relaxed text-font-sec text-sm">
              +91 8078975000
            </p>
          </div>
          <div className="col-span-2">
            <h6 className="text-sm font-semibold">Products</h6>
            <p className="leading-relaxed mt-6 text-font-sec text-sm">
              Incorpd
            </p>
            <p className="leading-relaxed mt-2 text-font-sec text-sm">Infin</p>

            <h6 className="text-sm mt-8 font-semibold">Infin</h6>
            <p className="leading-relaxed mt-6 text-font-sec text-sm">
              Technical Support
            </p>
            <p className="leading-relaxed mt-2 text-font-sec text-sm">
              Raise Invoice
            </p>
            <p className="leading-relaxed mt-2 text-font-sec text-sm">
              Renew Tax Filing
            </p>
            <p className="leading-relaxed mt-2 text-font-sec text-sm">
              Download Monthly Report
            </p>
          </div>
          <div className="col-span-2">
            <h6 className="text-sm font-semibold">Incorpd</h6>
            <p className="leading-relaxed mt-6 text-font-sec text-sm">
              Calculate Pricing
            </p>
            <p className="leading-relaxed mt-2 text-font-sec text-sm">
              Submit Asset Papers
            </p>
            <p className="leading-relaxed mt-2 text-font-sec text-sm">
              View Status
            </p>
            <p className="leading-relaxed mt-2 text-font-sec text-sm">FAQ</p>

            <h6 className="text-sm mt-8 font-semibold">Resources</h6>
            <p className="leading-relaxed mt-6 text-font-sec text-sm">
              Articles
            </p>
            <p className="leading-relaxed mt-2 text-font-sec text-sm">
              Contact Support
            </p>
          </div>
        </div>
        <div className="md:flex justify-between text-font-sec mt-24">
          <p className="text-sm">copyright © 2023 Mavenstry</p>
          <p className="text-sm mt-4 md:mt-0">
            Privacy policy <span className="mx-4">|</span> Terms & Conditions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
