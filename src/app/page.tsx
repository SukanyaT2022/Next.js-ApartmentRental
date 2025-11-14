import Image from "next/image";
import Header from "./components/Header";
import InputComp from "./components/InputComp";
import Address from "./components/AddressSearch";
import CardComp from "./components/CardComp";
import { data } from "../utils/data";
import IconComp from "./components/IconComp";
// import BigBoxComp from "./components/BigBoxComp";
import BigBoxCustum from "./components/BigBoxCustum";
import GuaranteeComp from "./components/GuaranteeComp";
import AddressSearch from "./components/AddressSearch";
import HomePage from "./homePage/page";
export default function EntryPoint() {
  return (
    <div className="w-full h-[70vh] md:h-[70vh] lg:h-[100vh]">
      <div>
        <Header />
      </div>
      {/* row icon component */}

      <IconComp />
      <HomePage />
      {/* middle sectiton */}
    
    </div>
  );
}
