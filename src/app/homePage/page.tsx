import { data } from "@/utils/data";
import Header from "../components/Header";
import IconComp from "../components/IconComp";
import CardComp from "../components/CardComp";
import GuaranteeComp from "../components/GuaranteeComp";
import BigBoxCustum from "../components/BigBoxCustum";

export default function HomePage() {
  return (
    <div>

      <div className=" w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 ">    
     {
      data.map((item)=>(
        <CardComp 
          key = {item.id}
          idProp = {item.id}
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
        <div>
        <BigBoxCustum
          backgroundColorProp="bg-linear-to-t from-sky-500 to-indigo-500"
          titleProp="Vacation ideas for summer"
          textProp="Celebrate the summer season your way with sunny destinations and more."
        />
        <GuaranteeComp/>
      </div>
      </div>

  );
}
