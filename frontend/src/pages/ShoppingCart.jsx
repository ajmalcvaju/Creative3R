import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HeaderTwo from "../components/HeaderTwo";
import { useSelector } from "react-redux";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "../redux/productSlice";
import Header from "../components/Header";

const ShoppingCart = () => {
  const products = useSelector((state) => state.products.items);
  const [cartedProducts, setCartedProducts] = useState([[]]);
  useEffect(() => {
    const filteredProducts = products.filter((product) => product.cart > 0);
    console.log(filteredProducts);
    setCartedProducts(filteredProducts);
  }, [products]);
  const [value, setValue] = useState(4);
  const dispatch = useDispatch();

  const totalPrice = cartedProducts.reduce((sum, product) => {
    const price = parseFloat(product.price?.replace("₹", "").trim()) || 0;
    const cartCount = Number(product.cart) || 0;
    return sum + price * cartCount;
  }, 0);

  return (
    <>
      <HeaderTwo/>
      <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-200 mb-5 rounded-xl">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-600">
          <h1 className="text-3xl font-bold text-gray-800">My Shopping Cart</h1>
          <nav>
            <Link to="/">Home / </Link>
            <span className="font-semibold text-gray-800">
              My Shopping Cart
            </span>
          </nav>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-lg shadow p-6 overflow-x-auto">
            <div className="hidden sm:grid grid-cols-7 text-sm font-semibold text-gray-600 border-b pb-3 mb-4">
              <span className="col-span-3">Product</span>
              <span className="text-center">Price</span>
              <span className="text-center">Quantity</span>
              <span className="text-center">Subtotal</span>
              <span className="text-center">Delete</span>
            </div>

            {cartedProducts.filter((p) => p.cart > 0).length === 0 ? (
              <p className="text-center text-gray-600 py-8 text-lg">
                No product present in cart
              </p>
            ) : (
              cartedProducts.map((product, index) => (
                <div
                  key={product.id || index}
                  className="grid sm:grid-cols-7 grid-cols-1 sm:items-center gap-4 py-4 border-b"
                >
                  <div className="col-span-3 flex items-center">
                    <img
                      src={product.image?.[0] || products[0].image[0]}
                      alt={product.title || "Product"}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="ml-4">
                      <p className="text-gray-800 text-sm font-medium">
                        {product.title}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 sm:text-center">
                    ₹{product.price}
                  </p>

                  <div className="flex justify-start sm:justify-center items-center space-x-2">
                    <button
                      onClick={() =>
                        dispatch(decrementQuantity({ id: Number(product.id) }))
                      }
                      className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 hover:cursor-pointer"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      readOnly
                      value={product.cart}
                      className="w-10 text-center border border-gray-300 rounded"
                    />
                    <button
                      onClick={() =>
                        dispatch(incrementQuantity({ id: Number(product.id) }))
                      }
                      className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 hover:cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-green-600 font-semibold sm:text-center">
                    ₹
                    {product.price
                      ? parseFloat(product.price.replace("₹", "").trim()) *
                        Number(product.cart || 0)
                      : 0}
                  </p>

                  <div className="flex sm:justify-center">
                    <button
                      onClick={() =>
                        dispatch(removeFromCart({ id: Number(product.id) }))
                      }
                      className="p-2 bg-red-500 rounded hover:bg-red-600 transition text-white"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="text"
                placeholder="Enter coupon"
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded text-sm hover:cursor-pointer">
                Apply Coupon
              </button>
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded text-sm hover:cursor-pointer"
              >
                Clear Cart
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Cart Totals
            </h2>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-800">
                ₹{totalPrice.toFixed(2)}
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
              <span>₹{totalPrice + 40}</span>
            </div>

            <button className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded text-center transition hover:cursor-pointer">
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
