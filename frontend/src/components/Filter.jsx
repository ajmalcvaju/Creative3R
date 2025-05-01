import React from "react";

const Filter = () => {
  return (
    <div className="p-6 bg-gray-300 rounded-md shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Active filters</h2>
        <button className="text-sm text-gray-500 hover:underline">Clear</button>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="inline-flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
          Rated 4 Out Of 5
          <button className="ml-2 text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </span>
      </div>
      <div className="space-y-4 mb-6">
        <h1 className="font-bold text-3xl text-gray-700">Product Filters</h1>

        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="min-w-[400px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select className="min-w-[300px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Any Category</option>
            <option>Clothing</option>
            <option>Electronics</option>
            <option>Accessories</option>
          </select>

          <select className="min-w-[100px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>4 Star</option>
            <option>5 Star</option>
            <option>3 Star</option>
          </select>

          <select className="min-w-[100px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Any Size</option>
          </select>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex flex-col">
              <input
                type="range"
                min="0"
                max="350"
                className="min-w-[200px]  accent-blue-400"
              />
              <span className="text-gray-600 text-sm text-center">
                $9.00 — $350.00
              </span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md text-sm">
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between border-t pt-4">
        <div className="flex items-center gap-2">
          <span className="text-blue-500 font-semibold">Filters:</span>
          <span className="text-gray-700 text-sm">
            Showing 1–12 of 14 results
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-gray-500 text-sm">
            Show
            <span className="mx-1 text-gray-700 font-medium">9</span>/
            <span className="mx-1 text-gray-700 font-medium">12</span>/
            <span className="mx-1 text-gray-700 font-medium">15</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <button className="hover:text-blue-500">
              <i className="fas fa-th"></i>
            </button>
            <button className="hover:text-blue-500">
              <i className="fas fa-th-list"></i>
            </button>
          </div>

          <select className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Default sorting</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
