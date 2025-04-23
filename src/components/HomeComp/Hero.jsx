import React from "react";

const Hero = () => {
  return (
    <>
      <section className="heroBanner h-screen flex items-center">

      <div className=" max-w-[700px] text-left">

          <h1 className="text-4xl ">WELCOME TO OUR JEWELLERY SITE</h1>
          <p className="my-10">
          Step into a world of timeless elegance, where every sparkle tells a story. 
          Our jewellery is crafted with passion, inspired by 
          tradition, and designed
           to celebrate your unique beauty. 
           Discover the perfect piece that speaks 
           to your heart and shines as brightly as your soul.
          </p>
          <button className="bg-[#B35107] hover:bg-[#864d21] text-lg text-white py-2 px-16 shadow-md cursor-pointer transition duration-100">
            Read More
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
