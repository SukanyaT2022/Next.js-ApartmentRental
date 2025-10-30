import React from 'react'

interface BigBoxCompProps {
  backgroundImageProp?: string;
  titleProp?: string;
  descriptionProp?: string;
  buttonTextProp?: string;
  onButtonClickProp?: () => void;
}

const BigBoxComp = ({
  backgroundImageProp = "../../public/beach3.jpg",
  titleProp = "Rent your property confidently with Vrbo",
  descriptionProp = "With live-support, quick signup, and highly-rated guests, hosting on Vrbo can feel like a vacation.",
  buttonTextProp = "List your property",
  onButtonClickProp
}: BigBoxCompProps) => {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg">
      {/* Background Image */}
      <img
        src={backgroundImageProp}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center sm:justify-start px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-[90%] sm:w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 sm:p-6 md:p-8 bg-white bg-opacity-95 rounded-xl sm:rounded-2xl shadow-xl">
          {/* Title */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
            {titleProp}
          </h2>
          
          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
            {descriptionProp}
          </p>
          
          {/* Button */}
          <button
            onClick={onButtonClickProp}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base rounded-full transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {buttonTextProp}
          </button>
        </div>
      </div>
    </div>
  )
}

export default BigBoxComp
