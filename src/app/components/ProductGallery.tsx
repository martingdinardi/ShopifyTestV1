"use client";
import React, { useState } from "react";
import ProductCard from "./ui/ProductCard";

function ProductGallery({
  products,
  title,
}: {
  products: ShopifyProduct[];
  title?: string;
}) {
  const [page, setPage] = useState(0);
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePrevPage = () => setPage((prev) => (prev > 0 ? prev - 1 : prev));
  const handleNextPage = () =>
    setPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));

  const displayedProducts = products.slice(
    page * productsPerPage,
    (page + 1) * productsPerPage
  );

  return (
    <div className="bg-red-200 mx-auto md:px-4 py-8 w-fit md:text-center">
      {title && (
        <h1 className="font-bold text-[34px] text-green-100 mb-6">{title}</h1>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-wrap justify-items-center">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
