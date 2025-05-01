import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import HeaderTwo from "../components/HeaderTwo";
import { useSelector, useDispatch } from "react-redux";
import { gsap } from "gsap";
import ProductLike from "../components/ProductLike";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../redux/productSlice";
import Header from "../components/Header";

export default function ProductDetailsTwo() {
  const { id } = useParams();
  const productIndex = Number(id);
  const [quantity, setQuantity] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState("center");
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef(null);
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.items);
  const product = products[productIndex - 1];
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  const handleMouseLeave = () => {
    setTransformOrigin("center");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % product.image.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [product.image.length]);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1 }
      );
    }
  }, [currentIndex]);
  useEffect(() => {
    console.log(products);
  }, []);

  return (
    <>
      <HeaderTwo/>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gray-200 w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14"
      >
        <div className="space-y-6">
          <div
            className="overflow-hidden rounded-2xl shadow-xl"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              ref={imageRef}
              src={product.image[currentIndex]}
              alt={`product-${currentIndex}`}
              style={{ transformOrigin }}
              className="w-full h-[28rem] object-cover rounded-2xl transform transition-transform duration-300 ease-out hover:scale-150 cursor-grabbing"
            />
          </div>

          <div className="flex gap-4 overflow-x-auto">
            {product.image.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setCurrentIndex(i)} // 🔁 This sets the main image
                className={`w-20 h-20 object-cover rounded-lg border ${
                  currentIndex === i
                    ? "border-blue-500 ring-2 ring-blue-300"
                    : "border-gray-300"
                } hover:shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-10">
          <div>
            <p className="text-xs text-blue-500 uppercase tracking-wider font-semibold mb-2">
              {product.category}
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              {product.title}
            </h2>
            <p className="text-blue-600 text-3xl font-extrabold mb-6">
              {product.price}
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              {product.description}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200 transition hover:cursor-pointer"
              >
                −
              </button>
              <span className="px-6 py-2 text-lg font-semibold">
                {quantity}
              </span>
              <button
                onClick={() =>
                  setQuantity((q) => {
                    if (q < product.quantity) {
                      return q + 1;
                    }
                    return q;
                  })
                }
                className="px-4 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200 transition hover:cursor-pointer"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                dispatch(addToCart({ id: Number(product.id), quantity }));
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-shadow shadow-md hover:shadow-lg hover:cursor-pointer"
            >
              Add to Cart
            </button>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex w-full items-center gap-2 text-sm bg-gray-800 text-white hover:text-gray-200 cursor-pointer transition px-3 py-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Products
          </button>
        </div>
      </motion.div>
      <ProductLike />
      <Footer />
    </>
  );
}
