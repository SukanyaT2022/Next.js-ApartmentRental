import React from 'react'
import InputComp from './InputComp'
import { FaMapPin } from 'react-icons/fa'
import AddressSearch from './AddressSearch'

const SearchBoxComp = () => {

  return (
    // this box  wrap of parent of 3 inputbox again
    // <div className='mx-auto w-[100%] md:w-[50%] lg:w-[75%] flex flex-col lg:flex-row  items-center justify-evenly  md:p-5 md:py-10 py-6 mt-0 md:mt-2  text-black text-center rounded-2xl '>
         <div className='mx-auto w-[100%] md:w-[50%] lg:w-[75%] flex flex-col lg:flex-row  items-center justify-evenly  md:p-5 md:py-10 py-6 mt-0 md:mt-2  text-black text-center rounded gap-4'>
      <AddressSearch className="w-[30%]" />
      <InputComp  className = "w-[30%]" labelProp='' iconProp = {<FaMapPin className="text-gray-700 text-lg flex-shrink-0" /> }  typeProp='' placeholderProp=''/>
      <InputComp  className="w-[30%]" labelProp='Travelers' iconProp = {<FaMapPin className="text-gray-700 text-lg flex-shrink-0" />}  typeProp=''  placeholderProp='2 Travelers'/>
      <button className= 'bg-blue-600 p-4 rounded-2xl font-bold text-white w-[10%] lg:ml-4 lg:mt-0 md:mt-3 mt-3'>Search</button>
    </div>
  )
}

export default SearchBoxComp