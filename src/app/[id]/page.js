'use client'
import React from "react";
import supabase from "../components/Supabase";
import { useEffect } from "react";
import { set } from "react-hook-form";
import { useRouter } from "next/navigation";


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
    
    return (
        
      <div>
        <h1>{product.Название}</h1>
        <h2>{product.Описание}</h2>
        <h3>{product.Цена}₽</h3>
        <img src={product.Картинка} alt="Product Image" className="productImageOnProductPage"/>
      </div>
    );
  }