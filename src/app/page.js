import Image from "next/image";

import Link from "next/link";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/productList";
export default function Home() {
  return (
    <div className="mainProductPage"> 
       <ProductList/>
       </div>
    
  );
}




