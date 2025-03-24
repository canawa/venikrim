import React from "react";

const ProductCard = ({ name, image, price, description }) => {
  return (
    <div className="productCard">
      <img className="productImage" src={image} alt={name} />
      <div className="productName"><h4>{name}Веник трехлучевой прошивной ручка</h4></div>
      
      
      <div><p>Цена: {price}</p> </div>
    </div>
  );
};

export default ProductCard;
