import React from 'react'
import ButtonComp from './ButtonComp'
interface BigBoxCustumProps {
backgroundColorProp?: string;
titleProp?: string;
textProp?: string;
}

const BigBoxCustum = ({backgroundColorProp,titleProp,textProp}:BigBoxCustumProps) => {
  return (
    <div className='flex items-center  justify-start  px-10 bigBoxCustumStyle bordrer rounded-lg border-gray-300  h-[500px] w-[90%] mx-auto bg-red-200'>
<div className={`${backgroundColorProp} text-white bordrer rounded-lg border-gray-300  h-[200px] w-[40%] flex flex-col items-start justify-center gap-3 p-5`}>
<h3 className='text-2xl font-medium'>{titleProp}</h3>
<p>{textProp}</p>
<ButtonComp textProp="Plan your trip"/>
</div>
    </div>
  )
}

export default BigBoxCustum

// Vacation ideas for summer

// Celebrate the summer season your way with sunny destinations and more.