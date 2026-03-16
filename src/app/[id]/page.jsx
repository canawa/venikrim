'use client'

import React from "react";
import { useEffect, useState, use } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { Nunito } from "next/font/google";
const marck = Nunito({
  subsets: ["latin", "cyrillic"],
  weight: ["900"],
});

import Link from "next/link";
import { API_URL } from "../config";

export default function ProductPage({ params }) {
  const [product, setProduct] = React.useState({})
  const { id } = use(params) // из params берем id

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch(`${API_URL}/get_products/${id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })
        if (!response.ok) {
          window.location.href = '/'
          return
        }
        const data = await response.json()
        if (data?.id) {
          setProduct(data)
          console.log(data)
        } else {
          window.location.href = '/'
        }
      } catch {
        window.location.href = '/'
      }
    }
    fetchData()
  }, [id])

    
useEffect(() => {
  if (product?.name) {
    document.title = product.name + ' В Крыму (Симферополе) за ' + product.price + '₽'
    document.description = 'Веники и метлы в Крыму! (Симферополь) ' + product.name + ' за ' + product.price + '₽'
  } else {
    document.title = 'Веники и метлы в Крыму! (Симферополь)'
    document.description = 'Веники и метлы в Крыму! (Симферополь)'
  }
}, [product])

    return (
        
      <div className='productDetails'>
        
        <div>
          <img src={`${API_URL}/images/${product?.image}`} alt="Product Image" className="productImageOnProductPage"/> 
        </div>
        <div className="sideContainer">
        <div className="productDetailsInfo">
        <h1>{product?.name}</h1>
        <h3 className="price">Цена: {product?.price}₽</h3>
        <div className="buyInfo">
        <h4 className="buyButton"> <Link className='link'href='/order' ><span className={marck.className}>КУПИТЬ</span></Link></h4>
          <h4 className="inStock">• В наличии</h4>
        </div>
        </div>
        <h4 className="description">{product?.description}</h4>
        </div>
      </div>
    );
  }
  
 
  

