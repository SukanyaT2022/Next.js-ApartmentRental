import React from 'react'
import SearchBoxComp from './SearchBoxComp'

const Header = () => {
  return (
    <div className="headerCustom flex md:justify-center pt-30 md:pt-0 lg:h-[80vh] md:h-[60vh] h-screen flex-col">
      {/* md:mt-[150px] mt-[100px]  */}
         <h1 className='pl-8 md:text-4xl text-2xl font-bold text-blue-600 w-[95%] md:w-[90%] lg:w-[75%] mx-auto  md:text-left text-center mb-5'>Entire place, just for you</h1>
        <SearchBoxComp/>
    </div>
  )
}
export default Header