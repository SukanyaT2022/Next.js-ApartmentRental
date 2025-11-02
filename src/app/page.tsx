import Image from "next/image";
import Header from "./components/Header";
import InputComp from "./components/InputComp";
import Address from "./components/AddressSearch";
import CardComp from "./components/CardComp";
import {data} from "../utils/data";
import IconComp from "./components/IconComp";
import BigBoxComp from "./components/BigBoxComp";
import BigBoxCustum from "./components/BigBoxCustum";
import GuaranteeComp from "./components/GuaranteeComp";
import AddressSearch from "./components/AddressSearch";
export default function Home() {
  return (
    <div className="w-full h-[70vh] md:h-[70vh] lg:h-[100vh]">
      <div>
        <Header/>   
      </div>
{/* row icon component */} 

<IconComp/>

  {/* cards comp section- second section  */}
      <div className=" w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 ">    
     {
      data.map((item)=>(
        <CardComp 
        key={item.id}
        imageSrcProp={item.image}
        pricePerNightProp={item.price}
        ratingProp={item.rating}
        reviewsCountProp={item.reviews}
        locationProp={`${item.type} in Paradise`}
        bedroomsProp={item.bedrooms}
        propertyTypeProp={item.type}
        />
      ))
     }
   
      </div>
{/* middle sectiton */}
      <div>
{/* <BigBoxComp/> */}
<BigBoxCustum backgroundColorProp ="bg-linear-to-t from-sky-500 to-indigo-500"
titleProp ="Vacation ideas for summer"
textProp ="Celebrate the summer season your way with sunny destinations and more."
   />
{/* end big box */}

{/* GuaranteeComponent */}
<GuaranteeComp />


  </div> 
    </div>
  );
}
