import useProductStore from "@/app/store/cartStore";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

function ProductCard({ product }: { product: ShopifyProduct }) {
  const { addToCart } = useProductStore();

  const handleButton = () => {
    addToCart(product);
    toast.success("Product added to cart successfully");
  };
  return (
    <div className="bg-white rounded-3xl card-shadow flex flex-col h-[26rem] p-4 w-64">
      <div className="h-full">
        <Image
          src={
            product.images.edges?.[0]?.node?.originalSrc || "/not-image.webp"
          }
          alt={product.title}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pt-2 text-start">
        <p className="text-sm mb-2">{product.title}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">
            ${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}
          </span>
          <div
            className="bg-green-700 text-white px-3 py-[2px] h-fit rounded-2xl shadow hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={handleButton}
          >
            <span className="text-shadow font-light">BUY NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
