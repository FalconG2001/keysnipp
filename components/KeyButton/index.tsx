// app/components/KeyButton.tsx
"use client";
import { Star, StarOff } from "lucide-react";

import { Button } from "@/components/ui/button";

import useKeyboard from "@/hooks/useKeyboard";

export default function KeyButton({ k }: { k: string }) {
  const {
    caps,
    layout,
    handleCopy,
    toggleFavorite,
    isFavorite,
    handleCapsChange,
  } = useKeyboard();

  const displayKey =
    k === " " ? k : caps && layout === "letters" ? k.toUpperCase() : k;

  return (
    <div className={`relative ${k === " " ? "w-full" : ""}`}>
      {k === "caps" ? (
        <Button
          variant={caps ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => handleCapsChange(!caps)}
        >
          {caps ? "CAPS ON" : "caps off"}
        </Button>
      ) : (
        <>
          <Button
            variant={"outline"}
            onClick={() => handleCopy(displayKey)}
            className={`cursor-pointer w-16 ${
              k === " " ? "w-full" : ""
            } h-16 flex items-center justify-center text-2xl rounded-lg border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition`}
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
