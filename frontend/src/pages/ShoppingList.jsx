import React from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import HeaderTwo from "../components/HeaderTwo";

const ShoppingList = () => {
  const products = [
    {
      id: 1,
      name: "Sophie Floral Strappy Dropthem Dress in Blue Prints",
      oldPrice: "₹4300",
      newPrice: "₹3800",
      img: "https://link_to_image_1.webp",
    },
    {
      id: 2,
      name: "Elena Floral Eyelet Cross-Stitch Plunge Dress in Sweet Pink",
      oldPrice: "₹7500",
      newPrice: "₹5700",
      img: "https://link_to_image_2.webp",
    },
    {
      id: 3,
      name: "Elena Floral Eyelet Cross-Stitch Plunge Dress in Romantic Lilac",
      oldPrice: "₹5200",
      newPrice: "₹4100",
      img: "https://link_to_image_3.webp",
    },
    {
      id: 4,
      name: "Mehendi kurta set with aabis work on yoke",
      oldPrice: "₹5300",
      newPrice: "₹5000",
      img: "https://link_to_image_4.webp",
    },
    {
      id: 5,
      name: "Brown textured cotton coat suit for men",
      oldPrice: "₹7500",
      newPrice: "₹5200",
      img: "https://link_to_image_5.webp",
    },
    {
      id: 6,
      name: "Sophie Floral Strappy Dropthem Dress in Blue Prints",
      oldPrice: "₹7500",
      newPrice: "₹7000",
      img: "https://link_to_image_6.webp",
    },
  ];
  return (
    <>
      <HeaderTwo/>
      <Filter/>
      <div className="flex min-h-screen bg-gray-300">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-6 text-gray-800 space-y-10 border-r border-gray-300">
          {/* Price Filter */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Price</h2>
            <input
              type="range"
              min="0"
              max="12000"
              className="w-full accent-indigo-600"
            />
            <div className="mt-3 text-sm text-gray-600">
              Up to <span className="font-bold text-indigo-600">₹12,000</span>
            </div>
          </div>

          {/* Sort By */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Sort By
            </h2>
            <select className="w-full bg-white border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Name: A-Z</option>
            </select>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 flex flex-col"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-72 w-full object-cover"
                />
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <h3 className="text-center text-gray-800 font-semibold text-sm mb-4">
                    {product.name}
                  </h3>
                  <div className="text-center mb-6 text-sm">
                    <span className="line-through text-red-500 mr-2">
                      {product.oldPrice}
                    </span>
                    <span className="text-blue-600 font-bold text-lg">
                      {product.newPrice}
                    </span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2 rounded-full font-semibold shadow-md hover:shadow-xl transition-transform transform hover:scale-105 active:scale-95">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4 mt-10">
            <button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              1
            </button>
            <button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded">
              2
            </button>
            <button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded">
              Next
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default ShoppingList;
