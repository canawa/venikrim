import React from "react";
import Link from "next/link";
const ProductCard = ({ id, name, image, price, description }) => {
  return (
    
    <div className="productCard">
      <Link className="link" href={`/${id}`}>
      <img className="productImage" src={image} alt={name}  loading="lazy" />
      <div className="productInfo">
      <div className="productPrice">{price} ₽ </div>
      <div className="productName">{name}</div>
      <div className="inStock"> • В наличии</div>
      </div>
      
      
      </Link>
    </div>
  );
};

export default ProductCard;
