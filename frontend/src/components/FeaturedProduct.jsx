import React from "react";

const FeaturedProduct = () => {
  return (
    <>
      <div className="bg-gray-800 py-14 px-6">
        <h2 className="text-4xl font-bold text-white mb-12 tracking-wide">
          <span className="text-red-500">FEATURED</span> PRODUCTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transform transition duration-500 flex flex-col">
            <img
              src="image-url-1"
              alt="Product 1"
              className="h-96 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow justify-between">
              <h3 className="text-center text-lg font-bold text-gray-800 mb-3 leading-tight">
                Sophie Floral Strappy Drophem Dress in Blue Prints
              </h3>
              <div className="text-center mb-5">
                <span className="line-through text-red-500 mr-2 text-base">
                  ₹7200
                </span>
                <span className="text-black font-bold text-lg">₹4800</span>
              </div>
              <button className="bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition font-semibold">
                View Details
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transform transition duration-500 flex flex-col">
            <img
              src="image-url-2"
              alt="Product 2"
              className="h-96 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow justify-between">
              <h3 className="text-center text-lg font-bold text-gray-800 mb-3 leading-tight">
                Elena Floral Eyelet Cross-Stitch Plunge Dress in Sweet Pink
              </h3>
              <div className="text-center mb-5">
                <span className="line-through text-red-500 mr-2 text-base">
                  ₹7500
                </span>
                <span className="text-black font-bold text-lg">₹5700</span>
              </div>
              <button className="bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition font-semibold">
                View Details
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transform transition duration-500 flex flex-col">
            <img
              src="image-url-3"
              alt="Product 3"
              className="h-96 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow justify-between">
              <h3 className="text-center text-lg font-bold text-gray-800 mb-3 leading-tight">
                Elena Floral Eyelet Cross-Stitch Plunge Dress in Romantic Lilac
              </h3>
              <div className="text-center mb-5">
                <span className="line-through text-red-500 mr-2 text-base">
                  ₹2500
                </span>
                <span className="text-black font-bold text-lg">₹4100</span>
              </div>
              <button className="bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition font-semibold">
                View Details
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transform transition duration-500 flex flex-col">
            <img
              src="image-url-4"
              alt="Product 4"
              className="h-96 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow justify-between">
              <h3 className="text-center text-lg font-bold text-gray-800 mb-3 leading-tight">
                Tessa Key-Hole Pouf Sleeves Dress in Sage Floral
              </h3>
              <div className="text-center mb-5">
                <span className="line-through text-red-500 mr-2 text-base">
                  ₹6800
                </span>
                <span className="text-black font-bold text-lg">₹5200</span>
              </div>
              <button className="bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition font-semibold">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
