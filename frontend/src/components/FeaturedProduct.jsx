import React from "react";

const FeaturedProduct = () => {
  return (
    <div className="bg-gray-300 py-10 px-30">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
        <span className="text-blue-500">Featured</span> Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Card 1 */}
        <div className="h-120 bg-white rounded-lg overflow-hidden shadow-xl hover:scale-105 transform transition-all duration-300 flex flex-col border border-gray-200 hover:shadow-2xl">
          <div className="relative">
            <img
              src="https://media-hosting.imagekit.io/9492083853554ba3/20231025-DenimSkirt-Blue7_93bcd4e0-278a-4c53-9d78-7e4449cb3353.webp?Expires=1840338247&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XNmtLHqEVkLYY3WH8gOH~AjKRe6o-BSfJKSg~cw-8y12ln5Cwf3EN6hUIccZc4dFOfdHdIO4ymcx3DbyLoDYZ55YTJiVfrFR7M3QrisD9oJNjhcc~jDtmbwmOZ1CxErlgHCG~Q3gfqUQGyA6sUZiphpsTpTSSg7wnaSMEa3K-nBUaJJc9fJPNxNpDWqVqaSVndmfH5tBKw3VhrZnkwISBhp2bVUMyQmKCZRHj24BO1Hc5JbEAcpeJ98t4KJO7YsjlW7m-3jBjZwSP5LqMHIDESsOntQ~JfOjNg0CmqeJoxNbCGuPQ6crzQD4rtjJvbSfPlbYOLddqXk1Jer29EWObw__"
              alt="Product 2"
              className="h-60 w-full object-cover transition duration-500 transform hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow justify-between">
            <h3 className="text-center text-sm font-semibold text-gray-800 mb-4">
              Elena Floral Eyelet Cross-Stitch Plunge Dress in Sweet Pink
            </h3>
            <div className="text-center text-sm mb-6">
              <span className="line-through text-red-600 mr-2 text-base">
                ₹7500
              </span>
              <span className="text-blue-600 font-bold text-xl">₹5700</span>
            </div>
            <button
              className="bg-gradient-to-r from-blue-500 to-indigo-600 
            hover:from-blue-600 hover:to-indigo-700 text-white py-2 rounded-full 
              transition duration-300 font-semibold shadow-md hover:shadow-xl 
              transform hover:scale-105 active:scale-95"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="h-120 bg-white rounded-lg overflow-hidden shadow-xl hover:scale-105 transform transition-all duration-300 flex flex-col border border-gray-200 hover:shadow-2xl">
          <div className="relative">
            <img
              src="https://media-hosting.imagekit.io/9492083853554ba3/20231025-DenimSkirt-Blue7_93bcd4e0-278a-4c53-9d78-7e4449cb3353.webp?Expires=1840338247&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XNmtLHqEVkLYY3WH8gOH~AjKRe6o-BSfJKSg~cw-8y12ln5Cwf3EN6hUIccZc4dFOfdHdIO4ymcx3DbyLoDYZ55YTJiVfrFR7M3QrisD9oJNjhcc~jDtmbwmOZ1CxErlgHCG~Q3gfqUQGyA6sUZiphpsTpTSSg7wnaSMEa3K-nBUaJJc9fJPNxNpDWqVqaSVndmfH5tBKw3VhrZnkwISBhp2bVUMyQmKCZRHj24BO1Hc5JbEAcpeJ98t4KJO7YsjlW7m-3jBjZwSP5LqMHIDESsOntQ~JfOjNg0CmqeJoxNbCGuPQ6crzQD4rtjJvbSfPlbYOLddqXk1Jer29EWObw__"
              alt="Product 2"
              className="h-60 w-full object-cover transition duration-500 transform hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow justify-between">
            <h3 className="text-center text-sm font-semibold text-gray-800 mb-4">
              Elena Floral Eyelet Cross-Stitch Plunge Dress in Sweet Pink
            </h3>
            <div className="text-center text-sm mb-6">
              <span className="line-through text-red-600 mr-2 text-base">
                ₹7500
              </span>
              <span className="text-blue-600 font-bold text-xl">₹5700</span>
            </div>
            <button
              className="bg-gradient-to-r from-blue-500 to-indigo-600 
            hover:from-blue-600 hover:to-indigo-700 text-white py-2 rounded-full 
              transition duration-300 font-semibold shadow-md hover:shadow-xl 
              transform hover:scale-105 active:scale-95"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="h-120 bg-white rounded-lg overflow-hidden shadow-xl hover:scale-105 transform transition-all duration-300 flex flex-col border border-gray-200 hover:shadow-2xl">
          <div className="relative">
            <img
              src="https://media-hosting.imagekit.io/9492083853554ba3/20231025-DenimSkirt-Blue7_93bcd4e0-278a-4c53-9d78-7e4449cb3353.webp?Expires=1840338247&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XNmtLHqEVkLYY3WH8gOH~AjKRe6o-BSfJKSg~cw-8y12ln5Cwf3EN6hUIccZc4dFOfdHdIO4ymcx3DbyLoDYZ55YTJiVfrFR7M3QrisD9oJNjhcc~jDtmbwmOZ1CxErlgHCG~Q3gfqUQGyA6sUZiphpsTpTSSg7wnaSMEa3K-nBUaJJc9fJPNxNpDWqVqaSVndmfH5tBKw3VhrZnkwISBhp2bVUMyQmKCZRHj24BO1Hc5JbEAcpeJ98t4KJO7YsjlW7m-3jBjZwSP5LqMHIDESsOntQ~JfOjNg0CmqeJoxNbCGuPQ6crzQD4rtjJvbSfPlbYOLddqXk1Jer29EWObw__"
              alt="Product 2"
              className="h-60 w-full object-cover transition duration-500 transform hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow justify-between">
            <h3 className="text-center text-sm font-semibold text-gray-800 mb-4">
              Elena Floral Eyelet Cross-Stitch Plunge Dress in Sweet Pink
            </h3>
            <div className="text-center text-sm mb-6">
              <span className="line-through text-red-600 mr-2 text-base">
                ₹7500
              </span>
              <span className="text-blue-600 font-bold text-xl">₹5700</span>
            </div>
            <button
              className="bg-gradient-to-r from-blue-500 to-indigo-600 
            hover:from-blue-600 hover:to-indigo-700 text-white py-2 rounded-full 
              transition duration-300 font-semibold shadow-md hover:shadow-xl 
              transform hover:scale-105 active:scale-95"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="h-120 bg-white rounded-lg overflow-hidden shadow-xl hover:scale-105 transform transition-all duration-300 flex flex-col border border-gray-200 hover:shadow-2xl">
          <div className="relative">
            <img
              src="https://media-hosting.imagekit.io/9492083853554ba3/20231025-DenimSkirt-Blue7_93bcd4e0-278a-4c53-9d78-7e4449cb3353.webp?Expires=1840338247&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XNmtLHqEVkLYY3WH8gOH~AjKRe6o-BSfJKSg~cw-8y12ln5Cwf3EN6hUIccZc4dFOfdHdIO4ymcx3DbyLoDYZ55YTJiVfrFR7M3QrisD9oJNjhcc~jDtmbwmOZ1CxErlgHCG~Q3gfqUQGyA6sUZiphpsTpTSSg7wnaSMEa3K-nBUaJJc9fJPNxNpDWqVqaSVndmfH5tBKw3VhrZnkwISBhp2bVUMyQmKCZRHj24BO1Hc5JbEAcpeJ98t4KJO7YsjlW7m-3jBjZwSP5LqMHIDESsOntQ~JfOjNg0CmqeJoxNbCGuPQ6crzQD4rtjJvbSfPlbYOLddqXk1Jer29EWObw__"
              alt="Product 2"
              className="h-60 w-full object-cover transition duration-500 transform hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow justify-between">
            <h3 className="text-center text-sm font-semibold text-gray-800 mb-4">
              Elena Floral Eyelet Cross-Stitch Plunge Dress in Sweet Pink
            </h3>
            <div className="text-center text-sm mb-6">
              <span className="line-through text-red-600 mr-2 text-base">
                ₹7500
              </span>
              <span className="text-blue-600 font-bold text-xl">₹5700</span>
            </div>
            <button
              className="bg-gradient-to-r from-blue-500 to-indigo-600 
            hover:from-blue-600 hover:to-indigo-700 text-white py-2 rounded-full 
              transition duration-300 font-semibold shadow-md hover:shadow-xl 
              transform hover:scale-105 active:scale-95"
            >
              View Details
            </button>
          </div>
        </div>

        <div className="h-120 bg-white rounded-lg overflow-hidden shadow-xl hover:scale-105 transform transition-all duration-300 flex flex-col border border-gray-200 hover:shadow-2xl">
          <div className="relative">
            <img
              src="https://media-hosting.imagekit.io/9492083853554ba3/20231025-DenimSkirt-Blue7_93bcd4e0-278a-4c53-9d78-7e4449cb3353.webp?Expires=1840338247&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XNmtLHqEVkLYY3WH8gOH~AjKRe6o-BSfJKSg~cw-8y12ln5Cwf3EN6hUIccZc4dFOfdHdIO4ymcx3DbyLoDYZ55YTJiVfrFR7M3QrisD9oJNjhcc~jDtmbwmOZ1CxErlgHCG~Q3gfqUQGyA6sUZiphpsTpTSSg7wnaSMEa3K-nBUaJJc9fJPNxNpDWqVqaSVndmfH5tBKw3VhrZnkwISBhp2bVUMyQmKCZRHj24BO1Hc5JbEAcpeJ98t4KJO7YsjlW7m-3jBjZwSP5LqMHIDESsOntQ~JfOjNg0CmqeJoxNbCGuPQ6crzQD4rtjJvbSfPlbYOLddqXk1Jer29EWObw__"
              alt="Product 2"
              className="h-60 w-full object-cover transition duration-500 transform hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow justify-between">
            <h3 className="text-center text-sm font-semibold text-gray-800 mb-4">
              Elena Floral Eyelet Cross-Stitch Plunge Dress in Sweet Pink
            </h3>
            <div className="text-center text-sm mb-6">
              <span className="line-through text-red-600 mr-2 text-base">
                ₹7500
              </span>
              <span className="text-blue-600 font-bold text-xl">₹5700</span>
            </div>
            <button
              className="bg-gradient-to-r from-blue-500 to-indigo-600 
            hover:from-blue-600 hover:to-indigo-700 text-white py-2 rounded-full 
              transition duration-300 font-semibold shadow-md hover:shadow-xl 
              transform hover:scale-105 active:scale-95"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
