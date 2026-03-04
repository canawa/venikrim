'use client'

import React from "react";
import { useEffect } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { Nunito } from "next/font/google";
const marck = Nunito({
  subsets: ["latin", "cyrillic"],
  weight: ["900"],
});
import Link from "next/link";

export default function ProductPage({ params }) {
  const [product, setProduct] = React.useState({})

  useEffect(() => {
    async function fetchData() {
      // TODO: загрузка товара по id из локальной БД (API)
      const data = null
      if (data?.id) {
        setProduct(data)
      } else {
        window.location.href = '/'
      }
    }
    fetchData()
  }, [params.id])

    
useEffect(() => {
  if (product?.Название) {
    document.title = product.Название + ' В Крыму (Симферополе) за ' + product.Цена + '₽'
    document.description = 'Веники и метлы в Крыму! (Симферополь) ' + product.Название + ' за ' + product.Цена + '₽'
  } else {
    document.title = 'Веники и метлы в Крыму! (Симферополь)'
    document.description = 'Веники и метлы в Крыму! (Симферополь)'
  }
}, [product])

    return (
        
      <div className='productDetails'>
        
        <div>
          <img src={product?.Картинка} alt="Product Image" className="productImageOnProductPage"/>
        </div>
        <div className="sideContainer">
        <div className="productDetailsInfo">
        <h1>{product?.Название}</h1>
        <h3 className="price">Цена: {product?.Цена}₽</h3>
        <div className="buyInfo">
        <h4 className="buyButton"> <Link className='link'href='/order' ><span className={marck.className}>КУПИТЬ</span></Link></h4>
          <h4 className="inStock">• В наличии</h4>
        </div>
        </div>
        <h4 className="description">{product?.Описание}</h4>
        </div>
      </div>
    );
  }
  
 
  

