import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BannerSlide = () => {
  const bannerRef = useRef(null);
  const imageRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.from(bannerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
    })
      .from(
        leftContentRef.current,
        {
          x: -100,
          opacity: 0,
          duration: 1,
        },
        "-=0.8"
      )
      .from(
        imageRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 1,
        },
        "-=0.8"
      )
      .from(
        rightContentRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 1,
        },
        "-=0.8"
      );
  }, []);

  return (
    <div
      ref={bannerRef}
      className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-white via-teal-50 to-teal-200 p-8 rounded-lg shadow-2xl overflow-hidden relative"
    >
      {/* Left Content */}
      <div ref={leftContentRef} className="flex flex-col space-y-6 max-w-md">
        <div className="bg-black text-white inline-block px-3 py-1 text-sm font-bold rounded w-max">
          20% OFF
        </div>
        <h1 className="text-6xl font-extrabold text-gray-800 leading-tight">
          New Spring Arrival
        </h1>
        <h2 className="text-2xl text-gray-600">Season Festival Collection</h2>
        <div className="bg-yellow-100 text-yellow-800 inline-block px-5 py-2 rounded-full text-sm font-semibold w-max">
          CATALOGUE 2024
        </div>
        <button className="bg-black text-white px-6 py-3 mt-4 w-max hover:bg-gray-800 rounded-lg">
          Shop Now
        </button>
      </div>

      {/* Center Image */}
      <div className="relative my-10 md:my-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-green-100 rounded-full w-[400px] h-[400px] md:w-[500px] md:h-[500px]"></div>
        </div>
        <img
          ref={imageRef}
          src="/path/to/your/model-image.png"
          alt="Fashion Model"
          className="relative z-10 w-[300px] md:w-[400px] object-contain"
        />
      </div>

      {/* Right Content */}
      <div ref={rightContentRef} className="flex flex-col items-center text-center space-y-4 max-w-xs">
        <h2 className="text-3xl font-bold text-gray-800">Limited Time Offer</h2>
        <a href="#" className="underline text-green-500 font-semibold hover:text-green-700">
          GET THE OFFER
        </a>

        {/* 90+ Websites Badge */}
        <div className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg mt-4">
          90+ Websites
        </div>

        {/* Price Tag */}
        <div className="bg-teal-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg mt-2">
          Only $59. Limited Time
        </div>
      </div>
    </div>
  );
};

export default BannerSlide;
