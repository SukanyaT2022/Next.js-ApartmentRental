import React from 'react'
import SearchBoxComp from './SearchBoxComp'

const Header = () => {
  return (
    <div className="headerCustom flex md:justify-center  pt-26 md:pt-20 lg:pt-0 xl:pt-0 xl:h-[70vh] lg:h-[40vh] md:h-[60vh] h-[70vh] flex-col">
      {/* md:mt-[150px] mt-[100px]  */}
         <h1 className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent md:pl-8 lg:text-4xl md:text-3xl text-2xl  font-bold w-[80%] md:w-[90%] lg:w-[75%] mx-auto lg:text-left text-center mb-5 xl:mt-0 lg:mt-[-30px]'>Entire place in paradise, just for you</h1>
        <SearchBoxComp/>
    </div>
  )
}
export default Header

// titleGradient 