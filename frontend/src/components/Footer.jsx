import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-gray-300 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="https://media-hosting.imagekit.io/9ca007e48e3049eb/online-fashion-store-logo-design-portfolio-4-removebg-preview3.png?Expires=1840262323&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=h5LtflSXDA9owl~CtVAfygROTrkmX3RKA51HdGhGvt3mBzLN7wCy8f3h3n2pYT8QWTHJuMgxun4JXIUQw67FmdAO0559Uzq3bqOZKYuNzjDoME~L3bCTQPNU2JaF5L9xKWCq~1E9W4OVQN0m4zRpzXETepFKOkUqsVtqo8z915MRg9c3UXKEUvvWyq7eHob-1NagbuU3qR95CAN8QFwxyR08f73YMoe0nTBMNAN0P7eZy7Z5vpEGKMULd-fxd~qgtMSKx1hJy5mqBBXDfGPdM4sMVR0HzWg2B4fGKUvEljQcKSvA6aaD8akRJOQlxZyOBB2JZx3Eap2LGRGDWJmY6Q__"
              alt="Gracey Fashion Logo"
              className="h-20 mb-4"
            />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cart
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-white mb-3">Address</h3>
            <p className="text-sm text-center md:text-left">
              Lucknow Building,
              <br />
              Mayanad, Near Mayanad AUP School, Kochikode,
              <br />
              Pin: 673008
            </p>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-white mb-3">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-center space-x-2">
                <span>📞</span>
                <span>+91-871415-6151</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>✉️</span>
                <span>sales@fashionstore.com</span>
              </p>
              <div className="flex space-x-4 mt-2">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p>©2025 Gracey Fashion. All rights reserved</p>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-white">
                Terms@Conditions
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
