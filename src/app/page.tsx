import Image from "next/image";
import Header from "./components/Header";
import InputComp from "./components/InputComp";
import Address from "./components/Address";
import CardComp from "./components/CardComp";

export default function Home() {
  return (
    <div className="w-full h-[70vh] md:h-[70vh] lg:h-[100vh]">
      <div>
        <p>test hello</p>
        <Header/>
    
      </div>
  {/* cards comp section- second section  */}
      <div className="bg-red-100 w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">    
      <CardComp/>
      </div>
  {/* <Address/> */}
     
    </div>
  );
}
