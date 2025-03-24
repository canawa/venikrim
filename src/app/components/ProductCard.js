import React from "react";

const ProductCard = ({ name, image, price, description }) => {
  return (
    <div className="productCard">
      <img className="productImage" src={image} alt={name} />
      <div className="productPrice"><h3>{price} ₽</h3> </div>
      <div className="productName"><h4>{name}</h4></div>
      
      
      
    </div>
  );
};

export default ProductCard;
