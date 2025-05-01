import React from "react";

const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-10 py-4 bg-indigo-950 backdrop-blur-md shadow-md">
        <div className="flex items-center space-x-3">
          <img
            src="https://media-hosting.imagekit.io/9ca007e48e3049eb/online-fashion-store-logo-design-portfolio-4-removebg-preview3.png?Expires=1840262323&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=h5LtflSXDA9owl~CtVAfygROTrkmX3RKA51HdGhGvt3mBzLN7wCy8f3h3n2pYT8QWTHJuMgxun4JXIUQw67FmdAO0559Uzq3bqOZKYuNzjDoME~L3bCTQPNU2JaF5L9xKWCq~1E9W4OVQN0m4zRpzXETepFKOkUqsVtqo8z915MRg9c3UXKEUvvWyq7eHob-1NagbuU3qR95CAN8QFwxyR08f73YMoe0nTBMNAN0P7eZy7Z5vpEGKMULd-fxd~qgtMSKx1hJy5mqBBXDfGPdM4sMVR0HzWg2B4fGKUvEljQcKSvA6aaD8akRJOQlxZyOBB2JZx3Eap2LGRGDWJmY6Q__"
            alt="Logo"
            className="w-28 h-20 object-contain"
          />
        </div>
        <ul className="flex space-x-10 text-white font-semibold text-lg">
          <li className="hover:text-yellow-400 transition duration-300">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            <a href="/products">Shop</a>
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            <a href="#">About Us</a>
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            <a href="#">Gallery</a>
          </li>
        </ul>
        <div className="flex items-center space-x-6">
          <button className="relative">
            <a href="/cart"/>
            <img
              src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              alt="Cart"
              className="w-8 h-8 invert hover:scale-110 transition-transform duration-300"
            />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              3
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
