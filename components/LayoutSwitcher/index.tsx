// app/components/LayoutSwitcher.tsx
"use client";
import useKeyboard from "@/hooks/useKeyboard";

const layoutOptions = [
  { key: "letters", label: "ABC" },
  { key: "numbers", label: "123" },
  { key: "symbols", label: "∑π" },
];

export default function LayoutSwitcher() {
  const { layout, handleLayoutChange, caps, handleCapsChange } = useKeyboard();

  return (
    <div className="flex space-x-2">
      {layoutOptions.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => handleLayoutChange(key as LayoutsKey)}
          className={`px-4 py-2 rounded ${
            layout === key ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
          } cursor-pointer`}
        >
          {label}
        </button>
      ))}
      {layout === "letters" && (
        <button
          onClick={() => handleCapsChange(!caps)}
          className={`px-4 py-2 rounded ${
            caps ? "bg-blue-700 text-white" : "bg-gray-300 text-black"
          } cursor-pointer`}
        >
          {caps ? "CAPS ON" : "caps off"}
        </button>
      )}
    </div>
  );
}
