import React from 'react'
import SearchBoxComp from './SearchBoxComp'

const Header = () => {
  return (
    <div className="headerCustom flex md:justify-center pt-60 md:pt-0 lg:h-[80vh] md:h-[60vh] h-[85vh] flex-col">
      {/* md:mt-[150px] mt-[100px]  */}
         <h1 className='md:pl-8 md:text-4xl text-2xl font-bold text-blue-600 w-[80%] md:w-[90%] lg:w-[75%] mx-auto  md:text-left text-center mb-5'>Entire place in paradise, just for you</h1>
        <SearchBoxComp/>
    </div>
  )
}
export default Header