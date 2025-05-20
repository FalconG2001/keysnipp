"use client";

import { useState } from "react";
import { LayoutsKey } from "@/app/page";

interface KeyboardGridProps {
  initialLayout: LayoutsKey;
  layouts: Record<LayoutsKey, string[][]>;
}

export default function KeyboardGrid({
  layouts,
  initialLayout,
}: KeyboardGridProps) {
  const [copied, setCopied] = useState("");
  const [layout, setLayout] = useState<LayoutsKey>(initialLayout);
  const [caps, setCaps] = useState(false);

  const handleCopy = (key: string) => {
    const finalKey = caps && layout === "letters" ? key.toUpperCase() : key;
    navigator.clipboard.writeText(finalKey);
    setCopied(finalKey);
    setTimeout(() => setCopied(""), 1000);
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4 w-full">
      <div className="flex space-x-2">
        <button
          onClick={() => setLayout("letters")}
          className={`px-4 py-2 rounded ${
            layout === "letters"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          } cursor-pointer`}
        >
          ABC
        </button>
        <button
          onClick={() => setLayout("numbers")}
          className={`px-4 py-2 rounded ${
            layout === "numbers"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          } cursor-pointer`}
        >
          123
        </button>
        <button
          onClick={() => setLayout("symbols")}
          className={`px-4 py-2 rounded ${
            layout === "symbols"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          } cursor-pointer`}
        >
          ∑π
        </button>
        {layout === "letters" && (
          <button
            onClick={() => setCaps((cap) => !cap)}
            className={`px-4 py-2 rounded ${
              caps ? "bg-blue-700 text-white" : "bg-gray-300 text-black"
            } cursor-pointer`}
          >
            {caps ? "CAPS ON" : "caps off"}
          </button>
        )}
      </div>

      {/* Render all layouts, hide/show based on current selection */}
      {(Object.keys(layouts) as LayoutsKey[]).map((layoutKey) => (
        <div
          key={layoutKey}
          style={{ display: layoutKey === layout ? "block" : "none" }}
          className="space-y-2"
        >
          {layouts[layoutKey].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex items-center justify-center gap-5 my-6"
            >
              {row.map((key) => {
                const displayKey =
                  key === " "
                    ? key
                    : caps && layoutKey === "letters"
                    ? key.toUpperCase()
                    : key;
                return (
                  <button
                    key={key + Math.random()}
                    onClick={() => handleCopy(key)}
                    className={`cursor-pointer w-16 h-16 flex items-center justify-center text-2xl rounded-lg border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition ${
                      key === " " ? "w-full" : ""
                    }`}
                  >
                    {key === " " ? (
                      <span className="text-gray-200 text-sm">[Space]</span>
                    ) : (
                      displayKey
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      ))}

      {copied && (
        <div className="text-green-500 font-medium">
          Copied: &quot;{copied}&quot;
        </div>
      )}
    </div>
  );
}
