import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const product = {
  image: 'https://images.unsplash.com/photo-1606813902911-cb27b3d36c4d?auto=format&fit=crop&w=600&q=80',
  title: 'Wireless Headphones',
  price: 129.99,
  description: 'Experience the freedom of wireless sound with our premium headphones. Crystal-clear audio, long-lasting battery, and a sleek, comfortable design.'
};

const ProductDetails = () => {
  return (
    <>
    <Header/>
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="bg-white rounded-3xl shadow-lg max-w-lg w-full p-8">
        {/* Product Image */}
        <img 
          src={product.image} 
          alt={product.title} 
          className="rounded-xl w-full h-80 object-cover mb-8 shadow-md"
        />

        {/* Product Info */}
        <h1 className="text-4xl font-semibold text-gray-800 mb-3">{product.title}</h1>
        <p className="text-xl text-green-500 font-medium mb-6">${product.price}</p>
        <p className="text-gray-700 mb-8">{product.description}</p>

        {/* Buttons */}
        <div className="flex gap-6">
          <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Add to Cart
          </button>
          <button className="flex-1 bg-gray-300 text-gray-800 py-3 px-6 rounded-xl hover:bg-gray-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            Back to Products
          </button>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default ProductDetails;
