import Image from "next/image";
import Header from "./components/Header";
import InputComp from "./components/InputComp";
import Address from "./components/Address";
import CardComp from "./components/CardComp";
import {data} from "../utils/data";
import IconComp from "./components/IconComp";
export default function Home() {
  return (
    <div className="w-full h-[70vh] md:h-[70vh] lg:h-[100vh]">
      <div>
        <p>test hello</p>
        <Header/>
    
      </div>
{/* row icon component */}

<IconComp/>

  {/* cards comp section- second section  */}
      <div className="bg-red-100 w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">    
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
  {/* <Address/> */}
     
    </div>
  );
}
