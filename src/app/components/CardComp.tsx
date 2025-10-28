import React from 'react'
import { FaRegHeart } from "react-icons/fa";
interface CardCompProps {
imageSrcProp?: string;
pricePerNightProp?: number;
ratingProp?: number;
reviewsCountProp?: number;
locationProp?: string;
bedroomsProp?: number;
propertyTypeProp?: string;
}
const CardComp = ({imageSrcProp, pricePerNightProp, ratingProp, reviewsCountProp, locationProp, bedroomsProp, propertyTypeProp}:CardCompProps) => {
  return (

<div className=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <div className='relative'>
  <a href="#">
    <img
      className="rounded-t-lg h-[200px] w-full object-cover "
      src={imageSrcProp}
      alt="Tech article thumbnail"
    />
  </a>
  <div className='absolute top-3 right-3 z-2 bg-white p-2 rounded-full'>
  <FaRegHeart className='text-xl text-red-500  '/>
  </div>
  </div>
  <div className="p-5">
  <p className="text-sm text-gray-700 dark:text-gray-400">
   {propertyTypeProp}
    </p>
    <a href="#">
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
{locationProp}
      </h5>
    </a>
    <p className=" text-sm text-gray-700 dark:text-gray-400">
   {bedroomsProp} bedrooms
    </p>
   {/* main div for price and rate */}
   <div className='text-sm flex justify-between'>
 {/* reviews */}   
<div className='flex gap-2 items-end'>
<p className='bg-green-600 p-0.5 rounded'>{ratingProp}</p>
<p>{reviewsCountProp}reviews</p>
</div>
{/* price per night */}
<div className='text-right'>
<p className='text-xl font-bold'>${pricePerNightProp}</p>
<p>avg per night</p>  
</div>

   </div>
   {/* //end div for price and rate */}
  </div>
</div>
  )
}

export default CardComp