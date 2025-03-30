import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ id, name, image, price, description }) => {
  return (
    <div className="productCard">
      <Link className="link" href={`/${id}`}>
        <div className="productImageWrapper">
          <Image
            className="productImage"
            src={image}
            alt={name}
            
            loading="lazy" // по умолчанию lazy loading
            placeholder="blur" // добавление эффекта размытия до загрузки
            blurDataURL="data:image/png;base64,..." // опционально: маленькое размытие
          />
        </div>
        <div className="productInfo">
          <div className="productPrice">{price} ₽</div>
          <div className="productName">{name}</div>
          <div className="inStock">• В наличии</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
