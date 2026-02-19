import React from "react";

const ProductCard = ({ product }) => {
  return (
    // We remove the nested card styling and just return the image
    // The parent in ProductList handles the container and aspect ratio
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  );
};

export default ProductCard;
