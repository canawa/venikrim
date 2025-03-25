'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import supabase from './Supabase';

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
    <div className="mainProductPage">
      {products.map ((productData)=> ( // используем круглые скобки (типо можно не писать return, он сам возвращает так как значение единственное)
        <ProductCard // наш компонент с карточкой продукта
          key={productData.id} // из массива products объект, который обрабатывается ерез map, и чтобы обращаться к ключам, введем местную переменную productData
          id = {productData.id}
          name={productData.Название}
          image={productData.Картинка} 
          price={productData.Цена}
        />
      ))}
    </div>
  );
};



    export default ProductList;
