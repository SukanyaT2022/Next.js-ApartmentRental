import React from 'react'
interface ButtonCompProps {
textProp?: string;

}
const ButtonComp = ({textProp}:ButtonCompProps) => {
  return (
    <div className=''>
        <button className='py-3 px-7 rounded-3xl bg-white text-black'>{textProp}</button>
    </div>
  )
}

export default ButtonComp