'use client'
import React from "react";
import supabase from "../components/Supabase";
import { useEffect } from "react";
import { set } from "react-hook-form";



export default function ProductPage({params}) {
    let [productName, setProductName] = React.useState('')
    let [productDescription, setProductDescription] = React.useState('')
    let [productPrice, setProductPrice] = React.useState('')
    let [productImage, setProductImage] = React.useState('')
    
    useEffect( async ()=> {
        
        const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', params.id)
        .single()
    if (error) {
    console.log(error)
    } else {
    console.log(data)
    setProductName(data.Название)
    setProductDescription(data.Описание)
    setProductPrice(data.Цена)
    setProductImage(data.Картинка)
    console.log(productImage)
}

    },[])
    
    return (
        
      <div>
        <h1>{productName}</h1>
        <h2>{productDescription}</h2>
        <h3>{productPrice}₽</h3>
        <img src={productImage} alt="Product Image" className="productImageOnProductPage"/>
      </div>
    );
  }