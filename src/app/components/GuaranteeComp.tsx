import React from "react";
import beach2 from "/public/beach2.jpg";
import { IoHomeOutline } from "react-icons/io5";
const GuaranteeComp = () => {
  return (
    <div className="bg-[#EBF5FF] grid grid-cols-1 lg:grid-cols-3 w-[90%] my-10 mx-auto bordrer rounded-lg border-gray-300  h-[120px]  ">
      <div className="flex items-center justify-center flex-row">
        <div className="h-[50px] w-[50px]  rounded-full bg-linear-to-t from-sky-500 to-indigo-500 flex items-center justify-center m-5">
        <IoHomeOutline  className="text-xl text-white"/>
        </div>

        <div className="w-[70%]">
        <h3 className="font-bold">We know he best place</h3>
        <p className="text-sm">Near the mountain, near the beach, find stays for every occasion.</p>
        </div>
      </div>




      <div className="flex items-center justify-center flex-row">
        <div className="h-[50px] w-[50px]  rounded-full bg-blue-100 flex items-center justify-center m-5">
        <IoHomeOutline  className="text-xl"/>
        </div>

        <div className="w-[70%]">
        <h3>We know he best place</h3>
        <p>Near the mountain, near the beach, find stays for every occasion.</p>
        </div>
      </div>



      

      <div className="flex items-center justify-center flex-row">
        <div className="h-[50px] w-[50px]  rounded-full bg-blue-100 flex items-center justify-center m-5">
        <IoHomeOutline  className="text-xl"/>
        </div>

        <div className="w-[70%]">
        <h3>We know he best place</h3>
        <p>Near the mountain, near the beach, find stays for every occasion.</p>
        </div>
      </div>




    </div>
  );
};

export default GuaranteeComp;
