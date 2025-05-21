// app/components/KeyButton.tsx
"use client";
import { Star, StarOff } from "lucide-react";

import useKeyboard from "@/hooks/useKeyboard";

export default function KeyButton({ k }: { k: string }) {
  const { caps, layout, handleCopy, toggleFavorite, isFavorite } =
    useKeyboard();

  const displayKey =
    k === " " ? k : caps && layout === "letters" ? k.toUpperCase() : k;

  return (
    <div className={`relative ${k === " " ? "w-full" : ""}`}>
      <button
        onClick={() => handleCopy(displayKey)}
        className={`cursor-pointer w-16 ${
          k === " " ? "w-full" : ""
        } h-16 flex items-center justify-center text-2xl rounded-lg border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition`}
      >
        {k === " " ? (
          <span className="text-gray-300 text-sm">[Space]</span>
        ) : (
          displayKey
        )}
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(k);
        }}
        className="absolute top-1 right-1 text-yellow-500 hover:scale-110 transition"
        aria-label="Toggle favorite"
      >
        {isFavorite(k) ? (
          <Star size={16} fill="yellow" />
        ) : (
          <StarOff size={16} />
        )}
      </button>
    </div>
  );
}
