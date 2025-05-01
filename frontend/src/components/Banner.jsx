import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    gsap.fromTo(
      ".circle-image",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".discount-box",
      {
        x: -500, // Start position: off screen to the left
        opacity: 0,
      },
      {
        x: 0, // End position: centered
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      }
    );

    // Animate the first text (40%) coming from the left
    gsap.fromTo(
      ".discount-text-left",
      {
        x: -300, // Start position: off screen to the left
        opacity: 0,
      },
      {
        x: 0, // End position: centered
        opacity: 1,
        duration: 1,
        delay: 2, // Delay to make sure it comes after the box
        ease: "power2.out",
      }
    );

    // Animate the second text (OFFER) coming from the right
    gsap.fromTo(
      ".discount-text-right",
      {
        x: 300, // Start position: off screen to the right
        opacity: 0,
      },
      {
        x: 0, // End position: centered
        opacity: 1,
        duration: 1,
        delay: 2, // Delay to make sure it comes after the box
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".summer-title",
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".season-festival",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" }
    );

    gsap.fromTo(
      ".button",
      { y: -300, opacity: 0 },
      { y: -300, opacity: 1, duration: 1, delay: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      ".limited-time",
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".button-2",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <>
      <div className="h-[80vh] flex flex-col md:flex-row items-center justify-center bg-gray-200 relative overflow-hidden px-4 py-8">
        {/* Left Section */}
        <div className="relative z-10 flex-1 space-y-6 text-center md:text-left">
          {/* Discount Box */}
          <div className="discount-box inline-block bg-black text-white text-3xl sm:text-4xl font-bold px-6 py-3 rounded-md">
            <span className="discount-text-left text-yellow-500">40%</span>
            <span className="discount-text-right ml-2">OFFER</span>
          </div>

          {/* Main Title */}
          <h1 className="summer-title text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800 mt-4">
            Summer
          </h1>

          {/* Subtitle */}
          <h2 className="season-festival text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mt-2">
            Season Festival
          </h2>
        </div>

        {/* Center Image Circle */}
        <div className="relative w-[320px] h-[320px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] bg-teal-100 rounded-full flex items-center justify-center mt-10 md:mt-0 md:mx-8">
          <img
            className="circle-image w-[90%] h-[90%] object-contain rounded-full"
            src="https://media-hosting.imagekit.io/4941fe156a3841bb/young-handsome-hipster-man-standing-talking-phone-removebg-preview.png?Expires=1840429304&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=I2Dulbj8tBcXrpD8vgHu5yi~d5EqttmByCk3S6yzBmu8WzmdCcmBNMBni1x1VtgeDFkZ-KumuQZFyLCVUNZYefv6Uhg8TD1QVDzrP21okIzGu7Lb2Upii8q~IlGKnY1Ke82XISRwGOMXjoi2VPuWHlnydCBQekZ0W7EV8qitomMV6piz0jCYN~rDnvSI1E-av61bx7acDAEykvoyqPLj-h5W2PtmiZQADlVbFOWnRqjXScAqmwdGTWqaJ30mwO6U-2M3amOTeoeoy7ZDIl6Dap8rDqyZr4R2L3z7KiCjN8Ou7SI3Xl28vZ1gAYbsndHqliKA-VSGap6855iSe2Rx0A__"
            alt="Person"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 space-y-6 mt-10 md:mt-0 text-center md:text-left flex flex-col items-center md:items-start justify-center">
          <h3 className="limited-time text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Limited Time Offer
          </h3>

          {/* Button */}
          <button className="button-2 bg-red-500 text-white font-semibold px-6 py-3 rounded-lg mt-4 transition duration-300 hover:bg-yellow-600 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 hover:cursor-pointer">
            <Link to="/products">SHOW PRODUCTS</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
