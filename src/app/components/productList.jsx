'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { API_URL } from '../config';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${API_URL}/get_products/`, { method: 'GET', credentials: 'include', headers: { 'Content-Type': 'application/json' } })
        const data = await response.json()
        console.log(data)
        setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <div className="mainProductPage">
      {products.map((productData)=> ( // мапаем по products и он берет каждую запись отдельно и раскидывает по карточке
        <ProductCard // наш компонент с карточкой продукта
          key={productData.id} // из массива products объект, который обрабатывается ерез map, и чтобы обращаться к ключам, введем местную переменную productData
          id = {productData.id}
          name={productData.name}
          image={productData.image} 
          price={productData.price}
        />
      ))}
    </div>
  );
};



    export default ProductList;
