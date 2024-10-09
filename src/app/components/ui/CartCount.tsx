"use client";
import React from "react";

function CartCount({ getTotalItems }: { getTotalItems: () => number }) {
  return (
    <div className="bg-green-700 text-white text-sm rounded-full p-2 w-6 h-6 text-center flex justify-center items-center absolute right-0 top-2">
      {getTotalItems()}
    </div>
  );
}

export default CartCount;
