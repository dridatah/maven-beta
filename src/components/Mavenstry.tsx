import Image from "next/image";
import React from "react";

const Mavenstry = () => {
  return (
    <div className="bg-mavenstry bg-cover">
      <div className="container mx-auto flex flex-col  h-[500px] justify-center">
        <div className="relative h-8 w-36">
          <Image src="/images/mavenstry-logo.png" alt="Mavenstry Logo" fill />
        </div>
        <h2 className="text-3xl whitespace-pre-line mt-2 leading-tight font-semibold">{`Combine the Power 
        of Infin and Incorpd.`}</h2>
      </div>
    </div>
  );
};

export default Mavenstry;
