import Image from "next/image";
import {Ponomar, Ponomar_Mono} from "next/font/google";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
export default function Home() {
  return (
    <div className="mainProductPage"> 
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       </div>
    
  );
}
