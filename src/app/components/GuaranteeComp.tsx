import React from "react";
import beach2 from "/public/beach2.jpg";
import { IoHomeOutline } from "react-icons/io5";
import { PiHandHeartBold } from "react-icons/pi";
interface GuaranteeCompProps {
iconProp?: React.ReactNode;
titleProp?: string;
textProp?: string;
} 
const AllProp = ({iconProp, titleProp, textProp}:GuaranteeCompProps) => {
  return (
    <div className="flex items-center justify-center flex-row">
    <div className="h-[50px] w-[50px]  rounded-full bg-linear-to-t from-sky-500 to-indigo-500 flex items-center justify-center m-5">
   {iconProp ? iconProp : <IoHomeOutline  className="text-xl text-white"/>}
    </div>

    <div className="w-[70%]">
    <h3 className="font-bold">{titleProp}</h3>
    <p className="text-sm">{textProp}</p>
    </div>
  </div>

  )
};
const GuaranteeComp = () => {
  return (
    <div className="bg-[#EBF5FF] grid grid-cols-1 lg:grid-cols-3 w-[90%] my-10 mx-auto bordrer rounded-lg border-gray-300  h-[120px]  ">
    <AllProp 
    iconProp = {<PiHandHeartBold   className="text-xl text-white"/>}
    titleProp ="We know he best place"
    textProp ="Near the mountain, near the beach, find stays for every occasion."
    />
    <AllProp 
    iconProp = {<IoHomeOutline  className="text-xl text-white"/>}
    titleProp ="We know he best place"
    textProp ="Near the mountain, near the beach, find stays for every occasion."   
    /> 
    <AllProp 
    iconProp = {<IoHomeOutline  className="text-xl text-white"/>}
    titleProp ="We know he best place"
    textProp ="Near the mountain, near the beach, find stays for every occasion."   
    />


      {/* <div className="flex items-center justify-center flex-row">
        <div className="h-[50px] w-[50px]  rounded-full bg-linear-to-t from-sky-500 to-indigo-500 flex items-center justify-center m-5">
        <IoHomeOutline  className="text-xl text-white"/>
        </div>

        <div className="w-[70%]">
        <h3 className="font-bold">We know he best place</h3>
        <p className="text-sm">Near the mountain, near the beach, find stays for every occasion.</p>
        </div>
      </div> */}




    </div>
  );
};

export default GuaranteeComp;
