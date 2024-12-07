import React from "react";

const Setup = () => {
  return (
    <div className="relative w-full h-auto bg-[#FBF6F0] mt-14 p-10 my-14">
      {/* Header Section */}
      <div className="text-center mb-4">
        <h1 className="text-xl mb-2">Share Your Setup</h1>
        <div className="text-gray-600 text-4xl font-bold">#FuniroFurniture</div>
      </div>

      {/* Image Grid Section */}
      <div className="container mx-auto">
        {/* First Row of Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div className="relative">
            <img
              src="/src/assets/Rectangle 36.jpg"
              alt="Half-visible image"
              className="w-full h-auto rounded shadow-black"
            />
          </div>
          <div className="relative">
            <img
              src="/src/assets/Rectangle 38.jpg"
              alt=""
              className="w-full h-auto object-cover rounded-lg bg-white opacity-70 shadow-md"
            />
          </div>
          <div className="relative">
            <img
              src="/src/assets/Rectangle 40.jpg"
              alt=""
              className="w-full h-auto object-cover rounded-lg bg-white opacity-70 shadow-md"
            />
          </div>
          <div className="relative">
            <img
              src="/src/assets/Rectangle 43.jpg"
              alt=""
              className="w-full h-auto object-cover rounded-lg bg-white opacity-70 shadow-md"
            />
          </div>
          <div className="relative">
            <img
              src="/src/assets/Rectangle 45.jpg"
              alt=""
              className="w-full h-auto object-cover rounded-lg bg-white opacity-70 shadow-md"
            />
          </div>
        </div>

        {/* Second Row of Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="relative">
            <img
              src="/src/assets/Rectangle 37.jpg"
              alt="Half-visible image"
              className="w-full h-auto rounded shadow-black"
            />
          </div>
          <div className="relative">
            <img
              src="/src/assets/Rectangle 39.jpg"
              alt=""
              className="w-full h-auto object-cover rounded-lg bg-white opacity-70 shadow-md"
            />
          </div>
          <div className="relative">
            <img
              src="/src/assets/Rectangle 41.jpg"
              alt=""
              className="w-full h-auto object-cover rounded-lg bg-white opacity-70 shadow-md"
            />
          </div>
          <div className="relative">
            <p className="text-center mb-2">Hello, morning!</p>
            <img
              src="/src/assets/Rectangle 44.jpg"
              alt=""
              className="w-full h-auto object-cover rounded-lg bg-white opacity-70 shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
