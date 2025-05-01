import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderTwo from "../components/HeaderTwo";
import { useSelector } from "react-redux";
import { TrashIcon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";


const ShoppingCart = () => {
  const products = useSelector((state) => state.products.items);
  const [value, setValue] = useState(4);
  const handleDecrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };
  const handleIncrement = () => {
    setValue(value + 1);
  };

  return (
    <>
      <HeaderTwo />
      <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-200 mb-5 rounded-xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-600">
          <h1 className="text-3xl font-bold text-gray-800">My Shopping Cart</h1>
          <nav>
            <Link to="/">
            Home /{" "}
            </Link>
            <span className="font-semibold text-gray-800">
              My Shopping Cart
            </span>
          </nav>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
            <div className="grid grid-cols-7 text-sm font-semibold text-gray-600 border-b pb-3 mb-4">
              <span className="col-span-3">Product</span>
              <span className="text-center">Price</span>
              <span className="text-center">Quantity</span>
              <span className="text-center">Subtotal</span>
              <span className="text-center">Delete</span>
            </div>

            {/* Product Row */}
            <div className="grid grid-cols-7 items-center gap-4 py-4 border-b">
              <div className="col-span-3 flex items-center">
                <img
                  src={products[0].image[0]}
                  alt="Product"
                  className="w-16 h-16 rounded object-cover"
                />
                <div className="ml-4">
                  <p className="text-gray-800 text-sm font-medium">
                    {products[0].title}
                  </p>
                </div>
              </div>
              <p className="text-center text-gray-700">₹6500.00</p>
              <div className="flex justify-center items-center space-x-2">
                <button
                  onClick={handleDecrement}
                  className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 hover:cursor-pointer"
                >
                  -
                </button>
                <input
                  type="text"
                  readOnly
                  value={value}
                  className="w-10 text-center border border-gray-300 rounded"
                />
                <button
                  onClick={handleIncrement}
                  className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 hover:cursor-pointer"
                >
                  +
                </button>
              </div>
              <p className="text-center text-green-600 font-semibold">
                ₹{parseFloat(products[0].price.replace("₹", "").trim()) * value}
              </p>
              <div className="flex justify-center hover:cursor-pointer">
                <button
                  onClick={() => handleDelete(products[0]._id)}
                  className="p-2 bg-red-500 rounded hover:bg-red-600 hover:cursor-pointer transition text-white"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Coupon */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="text"
                placeholder="Enter coupon"
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded text-sm">
                Apply Coupon
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded text-sm">
                Update Cart
              </button>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Cart Totals
            </h2>

            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-800">
                ₹{parseFloat(products[0].price.replace("₹", "").trim()) * value}
              </span>
            </div>

            <hr className="my-4" />

            <div className="mb-4">
              <p className="font-medium text-gray-700 mb-2">Shipping</p>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Shipping Charge</span>
                <span className="font-medium text-gray-800">₹40</span>
              </div>
            </div>

            <div className="flex justify-between font-semibold text-lg text-green-600 mt-4">
              <span>Total</span>
              <span>
                ₹
                {parseFloat(products[0].price.replace("₹", "").trim()) * value +
                  40}
              </span>
            </div>

            <button className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded text-center transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
