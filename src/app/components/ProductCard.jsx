import React from "react";
import Link from "next/link";
import Image from 'next/image';
const ProductCard = ({ id, name, image, price, description }) => {
  return (
    
    <div className="productCard">
      <Link className="link" href={`/${id}`}>
      <Image
        className="productImage"
        src={image}
        alt={name}
        placeholder="blur"
        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUUlYuAAABcQDKNaly6QAAAABJRU5ErkJggg=="
        quality={50}
        width={215}
        height={300}
        priority
      />
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
