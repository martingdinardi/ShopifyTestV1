"use client";
import React from "react";
import Modal from "./ui/Modal";
import useProductStore from "../store/cartStore";
import CartProductCard from "./ui/CartProductCard";

function Cart() {
  const {
    isModalOpen,
    setIsModalOpen,
    cartItems,
    getTotalAmount,
    getTotalItems,
  } = useProductStore();

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="flex flex-col justify-between h-full">
        <div>
          <p className="text-green-500 font-bold">BUY NOW</p>
          {!getTotalItems() && (
            <>
              <p className="text-green-700 font-bold text-lg mb-2 mt-4">
                YOUR CART IS EMPTY
              </p>
              <p className="text-lg">
                Take advantage of the offers we have for you!
              </p>
            </>
          )}
          <div className="mt-4">
            {cartItems &&
              cartItems.map((item) => {
                return <CartProductCard product={item} key={item.id} />;
              })}
          </div>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">TOTAL</p>
          <p className="text-green-500 font-bold">
            ${getTotalAmount().toFixed(2)}
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
