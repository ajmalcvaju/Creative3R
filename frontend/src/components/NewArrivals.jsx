import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function NewArrivals() {
  const carouselRef = useRef(null);
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    const element = carouselRef.current;
    const animation = gsap.to(element, {
      x: -500,
      ease: "power1.out",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    return () => {
      animation.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden w-full py-16">
      <h1 className="text-4xl font-semibold text-center text-neutral-800 tracking-tight">
        New Arrivals
      </h1>

      <div ref={carouselRef} className="flex gap-6 px-6 w-max mt-10">
        {products.map((product) => (
          <Link to={`/product/${product.id}`}>
            <div
              key={product.id}
              className="group relative w-full lg:min-w-[300px] lg:max-w-[300px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg bg-gray-200 mx-auto"
            >
              {product.badge && (
                <div
                  className={`absolute top-3 right-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded z-10`}
                >
                  {product.badge}
                </div>
              )}

              <div className="relative">
                <img
                  src={product.image[0]}
                  alt={product.alt}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-lg"
                />
                <img
                  src={product.image[1]}
                  alt={product.alt}
                  className="w-full h-72 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:scale-105 rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-70 text-white text-center py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg hover:cursor-pointer">
                  <span className="font-semibold">View Details</span>
                </div>
              </div>

              <div className="bg-gray-300 p-4 rounded-b-lg">
                <p className="text-gray-500 text-sm mb-1">{product.category}</p>
                <h3 className="text-gray-800 font-semibold text-lg leading-tight mb-2 truncate">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xl font-bold text-gray-900">
                    {product.price}
                  </span>
                  <div className="text-yellow-400 text-sm">
                    {product.rating}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
