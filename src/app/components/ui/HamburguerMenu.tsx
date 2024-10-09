"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type HamburguerMenuProps = {
  menuItems: string[];
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
};

function HamburguerMenu({
  menuItems,
  selected,
  setSelected,
}: HamburguerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleItem = (index: number) => {
    setSelected(index);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Image
        className="h-10 w-10 md:hidden cursor-pointer"
        aria-hidden="true"
        src={isOpen ? "/close.svg" : "/responsive-menu.svg"}
        width={125}
        height={125}
        alt="Cart"
        quality={100}
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        className={`${
          isOpen ? "opacity-100 top-20" : "opacity-0 -top-96"
        } absolute left-0 right-0 top-16 bg-white shadow-md z-50 transition-all duration-300`}
        id="mobile-menu"
      >
        <div className="flex flex-col gap-8 py-6 items-center">
          {menuItems.map((item, index) => (
            <Link
              key={item}
              href="#"
              className={`w-fit px-3 text-base ${
                index === selected
                  ? "border-green-500 text-green-700 border-b-4 font-bold"
                  : " hover:text-green-500"
              }`}
              onClick={() => handleItem(index)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HamburguerMenu;
