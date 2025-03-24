'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://eddnkmvlagibcvzmmgeu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkZG5rbXZsYWdpYmN2em1tZ2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1NzE2MzcsImV4cCI6MjA1ODE0NzYzN30.cI8b0epxKevEvBj1ioEXt8LwWJtQu5-YTrKUt7H7tkQ'
const supabase = createClient(supabaseUrl,supabaseKey)

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchProducts = async() => {
        const {data,error} = await supabase.from('products').select('*')
        if (error) {
            console.log(error)
        } else {
            setProducts(data)
            console.log(data)
        }
    }
    fetchProducts()
    
  },[])


  return (
    <div className="productsContainer">
      {products.map ((productData)=> ( // используем круглые скобки (типо можно не писать return, он сам возвращает так как значение единственное)
        <ProductCard // наш компонент с карточкой продукта
          key={productData.id} // из массива products объект, который обрабатывается ерез map, и чтобы обращаться к ключам, введем местную переменную productData
          name={productData.Название}
          image={productData.Картинка} 
          price={productData.Цена}
        />
      ))}
    </div>
  );
};



    export default ProductList;
