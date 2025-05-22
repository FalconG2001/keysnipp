// app/components/KeyButton.tsx
"use client";
import { Star, StarOff } from "lucide-react";

import { Button } from "@/components/ui/button";

import useKeyboard from "@/hooks/useKeyboard";

export default function KeyButton({
  k,
  type = "normal",
}: {
  k: string;
  type?: "normal" | "pinned";
}) {
  const {
    caps,
    layout,
    handleCopy,
    toggleFavorite,
    isFavorite,
    handleCapsChange,
  } = useKeyboard();

  const btnStyle =
    type === "pinned"
      ? "cursor-pointer relative w-16 h-16 flex items-center justify-center text-2xl rounded-lg border border-yellow-400 bg-yellow-100 hover:bg-yellow-600 dark:bg-yellow-900 dark:hover:bg-yellow-600 dark:text-yellow-200 transition"
      : `cursor-pointer w-16 ${
          k === " " ? "w-full" : ""
        } h-16 flex items-center justify-center text-2xl rounded-lg border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition`;

  const displayKey =
    k === " " ? k : caps && layout === "letters" ? k.toUpperCase() : k;

  return (
    <div className={`relative ${k === " " ? "w-full" : ""}`}>
      {k === "caps" ? (
        <Button
          variant={caps ? "default" : "outline"}
          className="cursor-pointer w-16 h-16 rounded-lg border border-gray-400 transition"
          onClick={() => handleCapsChange(!caps)}
        >
          {caps ? k.toUpperCase() : k.toLowerCase()}
        </Button>
      ) : (
        <>
          <Button
            variant={"outline"}
            onClick={() => handleCopy(displayKey)}
            className={btnStyle}
          >
            {k === " " ? <span className="text-sm">[Space]</span> : displayKey}
          </Button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(k);
            }}
            className="cursor-pointer absolute top-1 right-1 text-yellow-500 hover:scale-110 transition"
            aria-label="Toggle favorite"
          >
            {isFavorite(k) ? (
              <Star size={16} fill="yellow" />
            ) : (
              <StarOff size={16} />
            )}
          </button>
        </>
      )}
    </div>
  );
}
