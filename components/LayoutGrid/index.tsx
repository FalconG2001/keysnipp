"use client";
import useKeyboard from "@/hooks/useKeyboard";
import KeyButton from "@/components/KeyButton";

export default function LayoutGrid({ layouts }: { layouts: Layouts }) {
  const { layout } = useKeyboard();

  return (
    <div className="space-y-2">
      {(Object.keys(layouts) as LayoutsKey[]).map((layoutKey) => (
        <div
          key={layoutKey}
          style={{ display: layoutKey === layout ? "block" : "none" }}
          className="w-full"
        >
          {layouts[layoutKey].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-5 my-6 mx-auto"
            >
              {row.map((key) => (
                <KeyButton key={key + Math.random()} k={key} />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
