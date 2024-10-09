"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburguerMenu from "./ui/HamburguerMenu";
import useProductStore from "../store/cartStore";
import CartCount from "./ui/CartCount";

const menuItems = ["HOME", "ITEM 1", "ITEM 2", "ITEM 3", "ITEM 4", "ITEM 5"];

export default function Menu() {
  const [selected, setSelected] = useState(0);
  const { setIsModalOpen, getTotalItems } = useProductStore();

  return (
    <nav className="bg-white shadow-md max-w-full mx-auto px-1 md:px-4 lg:px-8">
      <div className="flex md:justify-center items-center relative h-16">
        <HamburguerMenu
          menuItems={menuItems}
          selected={selected}
          setSelected={setSelected}
        />
        <div className="menu hidden md:ml-6 md:flex sm:space-x-8 text-green-700">
          {menuItems.map((item, index) => (
            <Link
              key={item}
              href="#"
              className={`px-2 inline-flex items-center pt-2 text-base h-fit ${
                index === selected &&
                "border-green-500 text-green-700 border-b-4 font-bold"
              }`}
              onClick={() => setSelected(index)}
            >
              {item}
            </Link>
          ))}
        </div>
        <div
          className="cart sm:ml-6 flex items-center absolute right-0 h-full cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <CartCount getTotalItems={getTotalItems} />
          <button type="button" className="bg-white p-1">
            <Image
              className="h-10 w-10"
              aria-hidden="true"
              src={"/cart.svg"}
              width={125}
              height={125}
              alt="Cart"
              quality={100}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
