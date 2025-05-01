import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiUser, FiMenu, FiX,FiHome,FiShoppingBag,FiInfo,FiPhone } from "react-icons/fi";
import { useSelector } from "react-redux";

const HeaderTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const products = useSelector((state) => state.products.items);
  useEffect(() => {
    console.log(products);
  }, []);
  return (
    <>
      <div className="relative w-full bg-gray-50 overflow-hidden">
        <nav className="flex items-center justify-between px-4 sm:px-8 py-4 shadow-md bg-white relative">
          {/* Logo */}
          <div className="flex items-center justify-center p-3 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-xl shadow-lg">
            <img
              src="https://media-hosting.imagekit.io/9ca007e48e3049eb/online-fashion-store-logo-design-portfolio-4-removebg-preview3.png?Expires=1840262323&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=h5LtflSXDA9owl~CtVAfygROTrkmX3RKA51HdGhGvt3mBzLN7wCy8f3h3n2pYT8QWTHJuMgxun4JXIUQw67FmdAO0559Uzq3bqOZKYuNzjDoME~L3bCTQPNU2JaF5L9xKWCq~1E9W4OVQN0m4zRpzXETepFKOkUqsVtqo8z915MRg9c3UXKEUvvWyq7eHob-1NagbuU3qR95CAN8QFwxyR08f73YMoe0nTBMNAN0P7eZy7Z5vpEGKMULd-fxd~qgtMSKx1hJy5mqBBXDfGPdM4sMVR0HzWg2B4fGKUvEljQcKSvA6aaD8akRJOQlxZyOBB2JZx3Eap2LGRGDWJmY6Q__"
              alt="Ciyashop Logo"
              className="h-14 sm:h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 text-gray-600">
            <li className="hover:text-green-400 cursor-pointer">
              <Link to="/">HOME</Link>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              <Link to="/products">SHOP</Link>
            </li>
            <li className="hover:text-green-400 cursor-pointer">ABOUT</li>
            <li className="hover:text-green-400 cursor-pointer">CONTACT US</li>
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-4 text-2xl hover:text-blue-600">
            <span className="cursor-pointer">
              <FiHeart />
            </span>
            <div className="relative cursor-pointer">
              <Link to="/cart">
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full shadow-lg">
                  3
                </span>
                <FiShoppingCart className="text-3xl text-gray-700 hover:text-blue-600 transition duration-300" />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link to="/login">
                <FiUser className="text-3xl text-gray-700 hover:text-blue-600 transition duration-300" />
              </Link>
            </div>
            {/* Hamburger Icon */}
            <button
              className="md:hidden text-3xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <ul
            className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-green-100 via-green-200 to-green-300 shadow-2xl rounded-r-2xl flex flex-col items-start px-6 pt-24 space-y-6 text-gray-800 font-medium z-50 transform transition-transform duration-300 ease-in-out
              ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
          >
            <li className="flex items-center gap-3 hover:text-green-600 hover:translate-x-1 transition-transform duration-200 cursor-pointer">
              <FiHome />
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="flex items-center gap-3 hover:text-green-600 hover:translate-x-1 transition-transform duration-200 cursor-pointer">
              <FiShoppingBag />
              <Link to="/products" onClick={() => setIsOpen(false)}>Shop</Link>
            </li>
            <li className="flex items-center gap-3 hover:text-green-600 hover:translate-x-1 transition-transform duration-200 cursor-pointer">
              <FiInfo />
              <span onClick={() => setIsOpen(false)}>About</span>
            </li>
            <li className="flex items-center gap-3 hover:text-green-600 hover:translate-x-1 transition-transform duration-200 cursor-pointer">
              <FiPhone />
              <span onClick={() => setIsOpen(false)}>Contact Us</span>
            </li>
          </ul>
          )}
        </nav>
      </div>
    </>
  );
};

export default HeaderTwo;
