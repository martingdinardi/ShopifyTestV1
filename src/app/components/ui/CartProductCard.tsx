"use client";
import useProductStore from "@/app/store/cartStore";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

function CartProductCard({ product }: { product: CartItem }) {
  const { removeFromCart } = useProductStore();

  const handleRemove = () => {
    removeFromCart(product.id);
    toast.success("Product successfully deleted");
  };

  const totalPrice =
    parseFloat(product.priceRange.minVariantPrice.amount) * product.quantity;
  return (
    <div className="w-full border-b-2 border-b-green-100 flex justify-between items-center py-2">
      <Image
        src={product.images.edges?.[0]?.node?.originalSrc || "/not-image.webp"}
        alt={product.title}
        width={50}
        height={50}
        className="w-9 h-9 object-cover"
      />
      <p className="text-sm">
        {product.title}{" "}
        {product.quantity > 1 && (
          <span className="text-sm text-gray-500 ml-1">
            (x{product.quantity})
          </span>
        )}
      </p>
      <p className="text-green-500 font-bold">${totalPrice.toFixed(2)}</p>
      <Trash2
        color="#973737eb"
        width={20}
        className="cursor-pointer hover:scale-105 transition-all"
        onClick={handleRemove}
      />
    </div>
  );
}

export default CartProductCard;
