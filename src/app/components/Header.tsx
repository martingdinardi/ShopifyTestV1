import React from "react";
import DiscountBanner from "./ui/DiscountBanner";
import Menu from "./Menu";

function Header() {
  return (
    <div>
      <DiscountBanner date="4/27" percentage="30" />
      <Menu />
    </div>
  );
}

export default Header;
