"use client";
import React, { useState } from "react";
import ProductCard from "./ui/ProductCard";
import ImageGalleryButton from "./ui/ImageGalleryButton";

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
    <div className="mx-auto px-2 md:px-4 py-8 w-full max-w-7xl">
      {title && (
        <h1 className="font-bold text-4xl text-green-100 mb-6 text-center">
          {title}
        </h1>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="relative flex gap-2 mt-4 md:mt-10 justify-center">
        <ImageGalleryButton variant="left" handleAction={handlePrevPage} />
        <ImageGalleryButton variant="right" handleAction={handleNextPage} />
      </div>
    </div>
  );
}

export default ProductGallery;
