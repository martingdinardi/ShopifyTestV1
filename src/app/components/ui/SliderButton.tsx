import { ArrowRight, ArrowLeft } from "lucide-react";
import React from "react";

function SliderButton({
  variant,
  currentSlide,
}: {
  variant: "right" | "left";
  currentSlide: number;
}) {
  let first =
    currentSlide === 0
      ? "text-green-700 border-2 pointer-events-none"
      : "text-white bg-green-700";
  let last =
    currentSlide === 2
      ? "text-green-700 border-2 pointer-events-none"
      : "text-white bg-green-700";
  let style =
    variant === "left" ? `arrow-left ${first}` : `arrow-right ${last}`;
  return (
    <div
      className={`${style} w-fit px-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 flex items-center`}
    >
      {variant === "right" ? (
        <ArrowRight className="w-7 h-8" />
      ) : (
        <ArrowLeft className="w-7 h-8 " />
      )}
    </div>
  );
}

export default SliderButton;
