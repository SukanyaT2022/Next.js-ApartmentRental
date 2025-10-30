'use client'
import React from 'react'
import { MdOutlineBeachAccess } from "react-icons/md";
import { iconData } from '../../utils/data';
import { JSX } from 'react/jsx-runtime';


const IconComp = () => {
const [changeColor, setChangeColor] = React.useState(0);

    return (
      // <div className='grid grid-cols-4 md:grid-cols-4 lg:grid-cols-12 gap-2 w-[90%] m-auto py-10 overflow-scroll'>
    <div className='flex xl:grid xl:grid-cols-12 gap-2 w-[90%] m-auto py-10 overflow-x-scroll xl:overflow-x-hidden'>
      {
        iconData.map((item)=>(
          <div  onClick={()=>setChangeColor(item.id)} key={item.id} className='styleIcon text-[#191E3B] min-w-[100px] md:min-w-[100px] lg:min-w-[100px]'>
            {/* <item.icon className={`text-3xl ${selectedProp && ' text-blue-500'} `}/> */}
            <item.icon className={`text-3xl ${changeColor === item.id ? ' text-blue-500': 'text-[#191E3B]'} `}/>
            <p className={`text-sm font-bold ${changeColor === item.id ? ' text-blue-500': 'text-[#191E3B]'}`}>{item.label}</p>
          </div>
        ))
      }
       
          {/* #134FAB */}
        {/* <div className='styleIcon text-[#191E3B]'>
         <MdOutlineBeachAccess className='text-3xl'/>
         <p className='text-sm font-bold'>Beachfront</p>
        </div>

        <div className='styleIcon text-[#191E3B]'>
         <MdOutlineBeachAccess className='text-3xl'/>
         <p className='text-sm font-bold'>Beachfront</p>
        </div>

        <div className='styleIcon text-[#191E3B]'>
         <MdOutlineBeachAccess className='text-3xl'/>
         <p className='text-sm font-bold'>Beachfront</p>
        </div>

        <div className='styleIcon text-[#191E3B]'>
         <MdOutlineBeachAccess className='text-3xl'/>
         <p className='text-sm font-bold'>Beachfront</p>
        </div>

        <div className='styleIcon text-[#191E3B]'>
         <MdOutlineBeachAccess className='text-3xl'/>
         <p className='text-sm font-bold'>Beachfront</p>
        </div>

        <div className='styleIcon text-[#191E3B]'>
         <MdOutlineBeachAccess className='text-3xl'/>
         <p className='text-sm font-bold'>Beachfront</p>
        </div>

        <div className='styleIcon text-[#191E3B]'>
         <MdOutlineBeachAccess className='text-3xl'/>
         <p className='text-sm font-bold'>Beachfront</p>
        </div>

        <div className='styleIcon text-[#191E3B]'>
         <MdOutlineBeachAccess className='text-3xl'/>
         <p className='text-sm font-bold'>Beachfront</p>
        </div>

        <div className='styleIcon text-[#191E3B]'>
         <MdOutlineBeachAccess className='text-3xl'/>
         <p className='text-sm font-bold'>Beachfront</p>
        </div>

        <div className='styleIcon text-[#191E3B]'>
         <MdOutlineBeachAccess className='text-3xl'/>
         <p className='text-sm font-bold'>Beachfront</p>
        </div>

        <div className='styleIcon text-[#191E3B]'>
         <MdOutlineBeachAccess className='text-3xl'/>
         <p className='text-sm font-bold'>Beachfront</p>
        </div>
 */}

    </div>
  )
}

export default IconComp