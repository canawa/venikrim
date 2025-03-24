import React from "react";

const ProductCard = ({ name, image, price, description }) => {
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <div><h2>{name}</h2></div>
      
      
      <div><p>Цена: {price}</p> </div>
    </div>
  );
};

export default ProductCard;
