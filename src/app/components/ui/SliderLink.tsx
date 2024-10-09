import { ChevronRight } from "lucide-react";
import React from "react";

function SliderLink({ title, variant }: { title: string; variant?: "fill" }) {
  let styles;
  switch (variant) {
    case "fill":
      styles = "bg-green-700 text-white";
      break;

    default:
      styles = "text-green-700";
      break;
  }

  return (
    <button
      className={`${styles} text-sm font-extralight md:font-normal p-4 rounded-[10px] border border-green-700 w-44 flex justify-between items-center hover:scale-105 transition-all duration-300`}
    >
      {title}
      <ChevronRight />
    </button>
  );
}

export default SliderLink;
