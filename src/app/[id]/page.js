'use client'

import React from "react";
import supabase from "../components/Supabase";
import { useEffect } from "react";
import { set } from "react-hook-form";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { Nunito } from "next/font/google";
const marck  = Nunito({
  subsets: ["latin", "cyrillic"],
  weight: ["900"],
});
import Link from "next/link";




export default function ProductPage({params}) {
    let [product, setProduct] = React.useState('')
    
    
    useEffect( ()=> {
        async function fetchData() {
        const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', params.id)
        .single()
    if (error) {
    console.log(error)
    } else {
    console.log(data)
    setProduct(data)
    }
    if (!data?.id) {
      window.location.href = '/'
    }

  
}
fetchData()

    },[])

    
useEffect (() => {
  if (product.Название) {
    document.title = product.Название + ' В Крыму (Симферополе) за ' + product.Цена + '₽'
    document.description = 'Веники и метлы в Крыму! (Симферополь) ' + product.Название + ' за ' + product.Цена + '₽'
  } else {
    document.title = 'Веники и метлы в Крыму! (Симферополь)'
    document.description = 'Веники и метлы в Крыму! (Симферополь) ' + product.Название + ' за ' + product.Цена + '₽'
  }


})

    return (
        
      <div className='productDetails'>
        
        <div>
          <img src={product.Картинка} alt="Product Image" className="productImageOnProductPage"/>
        </div>
        <div className="sideContainer">
        <div className="productDetailsInfo">
        <h1>{product.Название}</h1>
        <h3 className="price">Цена: {product.Цена}₽</h3>
        <div className="buyInfo">
        <h4 className="buyButton"> <Link className='link'href='/order' ><span className={marck.className}>КУПИТЬ</span></Link></h4>
          <h4 className="inStock">• В наличии</h4>
        </div>
        </div>
        <h4 className="description">{product.Описание}</h4>
        </div>
      </div>
    );
  }
  
 
  

