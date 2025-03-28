import Image from "next/image";
import { DefaultSeo, NextSeo } from "next-seo";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/productList";




export const metadata = {
  title: "Веники и метлы в Крыму! (Симферополь) ",
  description: "Лучшие веники и мётлы в Крыму (Симферополь) !",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    sitename: "Веники и метлы в Крыму! (Симферополь)",
    title: "Веники и метлы в Крыму! (Симферополь)",
    description: "Лучшие веники и мётлы в Крыму! (Симферополь)",
    url: "https://веникрым.рф",
  },
}


export default function Home() {
  return (
    
    <div className="mainProductPage" > 
       <ProductList/>
       </div>
    
  );
}




