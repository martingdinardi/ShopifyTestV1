import React from "react";

function DiscountBanner({
  percentage,
  date,
}: {
  percentage: string;
  date: string;
}) {
  return (
    <div className="w-full bg-green-700 text-center p-1">
      <p className="text-xs text-white font-light">
        {`${percentage}% Off All Orders Until ${date}`.toLocaleUpperCase()}
      </p>
    </div>
  );
}

export default DiscountBanner;
