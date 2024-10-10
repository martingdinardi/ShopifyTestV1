import React from "react";
import DiscountBanner from "./ui/DiscountBanner";
import Menu from "./Menu";
import Slider from "./Slider";

function Header({ products }: { products: ShopifyProduct[] }) {
  return (
    <div>
      <DiscountBanner date="4/27" percentage="30" />
      <Menu />
      <Slider products={products} />
    </div>
  );
}

export default Header;
