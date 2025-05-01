import React from "react";

const QualityBanner = () => {
  return (
    <div className="bg-gray-100 rounded-lg px-4 py-6 mt-10 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-gray-800">
        <div className="space-y-2 border-gray-700 bg-yellow-200 p-5 rounded-3xl md:last:border-none">
          <div className="flex justify-center">
            <img
              src="https://pictures.uatkartmax.com/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/box-outline-548af8d2-0a86-42fd-97df-21dafbb1f282.svg"
              alt="Exchange & Return"
              className="w-10 h-10 object-contain"
            />
          </div>
          <h3 className="font-semibold text-base md:text-lg">
            Easy Exchange & Return
          </h3>
          <p className="text-sm text-gray-600">Available on All Order</p>
        </div>

        <div className="space-y-2 border-gray-700 bg-yellow-200 p-12 rounded-3xl md:last:border-none">
          <div className="flex justify-center items-center space-x-2">
            <img
              src="https://pictures.uatkartmax.com/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/magic-stick-linear-e7b9c25c-5e85-4b65-ae1c-cf6771e740b4.svg"
              alt="Trustpilot"
              className="w-5 h-5 object-contain"
            />
            <span className="font-semibold">4.9/5</span>
            <span className="text-green-500 font-semibold">★</span>
            <span>Trusted Customer</span>
          </div>
          <p className="text-md font-bold text-gray-600">
            8,477 Happy Customer
          </p>
        </div>

        <div className="space-y-2 bg-yellow-200 rounded-3xl p-5">
          <div className="flex justify-center">
            <img
              src="https://pictures.uatkartmax.com/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/shield-check-outline-0ee43f44-5551-468c-8bc1-d08cd67a7422.svg"
              alt="Secure Payment"
              className="w-10 h-10 object-contain"
            />
          </div>
          <h3 className="font-semibold text-base md:text-lg">
            Safe & Secure Payment
          </h3>
          <p className="text-sm text-gray-600">100% Trusted</p>
        </div>
      </div>
    </div>
  );
};

export default QualityBanner;
