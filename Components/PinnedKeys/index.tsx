// app/components/PinnedKeysSection.tsx
"use client";
import { Star } from "lucide-react";

import useKeyboard from "@/hooks/useKeyboard";

export default function PinnedKeysSection() {
  const { favorites, toggleFavorite, handleCopy } = useKeyboard();

  return (
    <div className="mt-2 w-full">
      <h2 className="text-lg mb-2 text-center font-semibold">Pinned Keys</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-6 min-h-[5rem]">
        {favorites.length > 0 ? (
          favorites.map((key) => (
            <button
              key={`pinned-${key}`}
              onClick={() => handleCopy(key)}
              className="cursor-pointer relative w-16 h-16 flex items-center justify-center text-2xl rounded-lg border border-yellow-400 bg-yellow-100 hover:bg-yellow-600 dark:bg-yellow-900 dark:text-yellow-200"
            >
              {key === " " ? <span className="text-sm">[Space]</span> : key}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(key);
                }}
                className="absolute top-1 right-1 text-yellow-500"
              >
                <Star size={16} fill="yellow" />
              </span>
            </button>
          ))
        ) : (
          <div className="text-gray-500 text-sm italic p-4 rounded border border-dashed border-yellow-300 bg-yellow-50 dark:bg-yellow-950 w-full text-center">
            No pinned keys yet. Tap a ★ to pin.
          </div>
        )}
      </div>
    </div>
  );
}
