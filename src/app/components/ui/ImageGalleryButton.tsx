import { ArrowRight, ArrowLeft } from "lucide-react";
import React from "react";

function ImageGalleryButton({
  variant,
  handleAction,
}: {
  variant: "right" | "left";
  handleAction: () => void;
}) {
  return (
    <div
      className={`w-fit px-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 flex items-center text-green-700 border-2 pointer-events-none`}
      onClick={handleAction}
    >
      {variant === "right" ? (
        <ArrowRight className="w-7 h-8" />
      ) : (
        <ArrowLeft className="w-7 h-8 " />
      )}
    </div>
  );
}

export default ImageGalleryButton;
