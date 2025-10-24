import React, { useState } from 'react'
import { FaMapPin } from 'react-icons/fa'

interface InputCompProps {
  labelProp?: string;
  iconProp: React.ReactNode;
  typeProp: string;
  placeholderProp?: string;

}
const InputComp = ({labelProp,typeProp, placeholderProp,iconProp}:InputCompProps) => {
  // const [destination, setDestination] = useState('Aruba')

  return (
    //belowline ia parent wrap 3 input boxes
    <div className="flex items-center justify-center p-2 w-full ">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-[300px]">
        {/* //below target individual input box */}
        <div className=" bg-white flex flex-col justify-center border-gray-300 border-1 rounded-2xl px-6 py-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-[60px]">
          
          {/* Label - always reserve space for consistency */}
          <div className="h-6 flex items-start mb-1 ">
            {labelProp && <span className="text-sm text-gray-500 font-medium ">{labelProp}</span>}
          </div>
          
          {/* Input Content */}
          <div className="flex items-center w-full flex-1 ">
            {iconProp}
            <input
              type={typeProp}
              className="text-sm border-none outline-none focus:ring-0 bg-transparent p-0 w-full placeholder:text-black"
              placeholder={placeholderProp}
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default InputComp