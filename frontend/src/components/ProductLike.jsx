import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollToPlugin);

gsap.registerPlugin(ScrollToPlugin);

const ProductLike = () => {
  const scrollRef = useRef(null);
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    if (products.length > 4 && scrollRef.current && window.innerWidth >= 768) {
      const scrollContainer = scrollRef.current;
      const scrollWidth = scrollContainer.scrollWidth;
      const visibleWidth = scrollContainer.clientWidth;

      const tl = gsap.to(scrollContainer, {
        scrollTo: { x: scrollWidth - visibleWidth },
        duration: 10,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      return () => tl.kill();
    }
  }, [products]);

  return (
    <div className="flex flex-col mt-5">
      <h1 className="text-4xl font-semibold text-center text-neutral-800 tracking-tight">
        Products You May Like
      </h1>

      <div className="overflow-hidden">
        <div
          ref={scrollRef}
          className="flex lg:flex-row flex-col lg:gap-8 gap-6 p-8 bg-gray-100 lg:overflow-x-auto overflow-x-hidden hide-scrollbar"
          style={{ scrollBehavior: "unset" }}
        >
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
                  <p className="text-gray-500 text-sm mb-1">
                    {product.category}
                  </p>
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
    </div>
  );
};

export default ProductLike;
