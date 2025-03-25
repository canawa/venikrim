import React from "react";
import Link from "next/link";
const ProductCard = ({ id, name, image, price, description }) => {
  return (
    
    <div className="productCard">
      <Link href={`/${id}`}>
      <img className="productImage" src={image} alt={name} />
      <div className="productPrice"><h3>{price} ₽</h3> </div>
      <div className="productName"><h4>{name}</h4></div>
      <div className="inStock"> • В наличии</div>
      
      
      
      </Link>
    </div>
  );
};

export default ProductCard;
