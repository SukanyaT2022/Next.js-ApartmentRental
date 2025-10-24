import React from 'react'
import InputComp from './InputComp'
import { FaMapPin } from 'react-icons/fa'
import AddressSearch from './Address'
const SearchBoxComp = () => {
  // const data = [
  //   {},
  //   {},
  //   {
  // ]
  
  return (
    // this box  wrap of parent of 3 inputbox again
    <div className='mx-auto w-[80%] md:w-[50%] lg:w-[75%] flex flex-col lg:flex-row  items-center justify-evenly  md:p-5 md:py-10 py-6 mt-0 md:mt-2  text-black text-center rounded-2xl '>
      <InputComp labelProp='Where to?' iconProp = {<FaMapPin className="text-gray-700 text-lg flex-shrink-0" /> } typeProp='Aruba' placeholderProp=''/>
      <InputComp labelProp='' iconProp = {<FaMapPin className="text-gray-700 text-lg flex-shrink-0" /> }  typeProp='' placeholderProp=''/>
      <InputComp labelProp='Travelers' iconProp = {<FaMapPin className="text-gray-700 text-lg flex-shrink-0" />}  typeProp=''  placeholderProp='2 Travelers'/>
      <button className='bg-blue-600 p-4 rounded-2xl font-bold text-white w-[95%] lg:ml-4 lg:mt-0 md:mt-3 mt-3'>Search</button>
      {/* <AddressSearch /> */}
    </div>
  )
}

export default SearchBoxComp