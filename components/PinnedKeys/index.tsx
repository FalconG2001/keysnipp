"use client";
import useKeyboard from "@/hooks/useKeyboard";
import KeyButton from "../KeyButton";

interface KeyGridSectionProps {
  type: "pinned" | "recents";
}

export default function KeyGridSection({ type }: KeyGridSectionProps) {
  const { favorites, recents } = useKeyboard();

  const isPinned = type === "pinned";
  const keys = isPinned ? favorites : recents;
  const title = isPinned ? "Pinned Keys" : "Recently Used";
  const emptyText = isPinned
    ? "No pinned keys yet. Tap a ★ to pin."
    : "No recent keys yet. Copied keys will appear here.";

  return (
    <div className="w-full h-full rounded border border-dashed border-yellow-300 bg-yellow-50 dark:bg-yellow-950">
      <h2 className="text-lg my-2 text-center font-semibold">{title}</h2>
      <div className="p-3 flex flex-wrap justify-center items-center gap-4 min-h-[5rem] w-full">
        {keys.length > 0 ? (
          keys.map((key) => {
            return (
              <KeyButton key={key + Math.random()} k={key} type="pinned" />
            );
          })
        ) : (
          <div className="text-gray-500 text-sm italic p-4 text-center">
            {emptyText}
          </div>
        )}
      </div>
    </div>
  );
}
