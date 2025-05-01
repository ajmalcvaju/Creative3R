import React, { useEffect, useMemo, useState } from "react";
import Filter from "../components/Filter";
import ShoppingList from "./ShoppingList";
import HeaderTwo from "../components/HeaderTwo";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ShoppingListTwo = () => {
  const [maxPrice, setMaxPrice] = useState(12000);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("Default");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const products = useSelector((state) => state.products.items);

  const getNumericPrice = (price) => {
    if (price.includes("₹")) return parseFloat(price.replace(/[₹$,]/g, ""));
    if (price.includes("$"))
      return parseFloat(price.replace(/[₹$,]/g, "")) * 83;
    return parseFloat(price);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const withinPrice = getNumericPrice(product.price) <= maxPrice;
      const inCategory =
        categoryFilter === "All" || product.category === categoryFilter;
      return withinPrice && inCategory;
    });

    if (sortOption === "Price: Low to High") {
      filtered.sort(
        (a, b) => getNumericPrice(a.price) - getNumericPrice(b.price)
      );
    } else if (sortOption === "Price: High to Low") {
      filtered.sort(
        (a, b) => getNumericPrice(b.price) - getNumericPrice(a.price)
      );
    } else if (sortOption === "Name: A-Z") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [products, maxPrice, categoryFilter, sortOption]);

  // Pagination
  const PRODUCTS_PER_PAGE = 6;
  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / PRODUCTS_PER_PAGE
  );
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = filteredAndSortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const reset = () => {
    setMaxPrice(12000);
    setCurrentPage(1);
    setSortOption("Default");
    setCategoryFilter("All");
  };

  return (
    <>
      <HeaderTwo />
      <div className="flex flex-col min-h-screen">
        {/* Wrapper for Sidebar + Content */}
        <div className="flex flex-col md:flex-row flex-grow bg-gray-200">
          {/* Sidebar */}
          <aside className="w-full md:w-64 bg-gray-300 p-6 text-gray-800 space-y-10 border-b md:border-b-0 md:border-r border-gray-300">
            {/* Price Filter */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Price
              </h2>
              <input
                type="range"
                min="0"
                max="12000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
              <div className="mt-3 text-md text-gray-600">
                <span className="font-bold text-indigo-600">₹{maxPrice}</span>
              </div>
            </div>

            {/* Sort By */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Sort By
              </h2>
              <select
                className="w-full bg-white border border-gray-200 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={sortOption}
                onChange={(e) => {
                  console.log(e.target.value);
                  setSortOption(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A-Z</option>
              </select>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Filter by Category
              </h2>
              <select
                className="w-full bg-white border border-gray-200 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={categoryFilter}
                onChange={(e) => {
                  setCategoryFilter(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="All">All</option>
                {Array.from(
                  new Set(products.map((product) => product.category))
                ).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </aside>

          {/* Product Grid */}
          {currentProducts.length > 0 ? (
            <div className="flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center p-6 bg-gray-200 flex-grow">
                {currentProducts.map((product) => (
                  <Link to={`/product/${product.id}`}>
                  <div
                    key={product.id}
                    className="group relative w-80 sm:w-72 lg:w-80 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg bg-gray-200"
                  >
                    {/* Badge */}
                    {product.badge && (
                      <div
                        className={`absolute top-3 right-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded z-10`}
                      >
                        {product.badge}
                      </div>
                    )}

                    {/* Product Image */}
                    <div className="relative">
                      <img
                        src={product.image[0]}
                        alt={product.alt}
                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-lg"
                      />
                      <img
                        src={product.image[1]}
                        alt={product.alt}
                        className="w-full h-80 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:scale-105 rounded-t-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                        <span className="font-semibold">View Details</span>
                      </div>
                    </div>

                    {/* Product Details */}
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
              <div className="hidden sm:block bg-gray-200">
                {filteredAndSortedProducts.length > PRODUCTS_PER_PAGE && (
                  <div className="flex justify-center items-center space-x-4 my-6 bg-gray-200 p-4 rounded-md shadow-md w-fit mx-auto">
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className="hover:cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-500 hover:bg-blue-600 transition duration-200"
                    >
                      Prev
                    </button>

                    <span className="px-4 py-2 text-blue-700 font-medium">
                      Page {currentPage} of {totalPages}
                    </span>

                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className="hover:cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-500 hover:bg-blue-600 transition duration-200"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center w-full min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl border border-blue-300 shadow-inner p-8">
              <div className="mb-6 p-4 bg-white/70 rounded-full shadow">
                <svg
                  className="w-12 h-12 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">
                No Products Found
              </h2>
              <p className="text-base text-blue-800 mt-3 max-w-md">
                There are currently no products matching your filter. Try
                changing your category, price range, or sort option.
              </p>
              <button
                onClick={reset}
                className="mt-6 px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow transition duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ShoppingListTwo;
