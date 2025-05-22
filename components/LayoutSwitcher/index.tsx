"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import useKeyboard from "@/hooks/useKeyboard";

const layoutOptions = [
  { key: "letters", label: "ABC" },
  { key: "numbers", label: "123" },
  { key: "symbols", label: "∑π" },
];

export default function LayoutSwitcher() {
  const { layout, handleLayoutChange } = useKeyboard();

  return (
    <div className="py-4 flex flex-col justify-center items-center space-y-2 w-full max-w-md gap-3">
      <div>
        <Tabs
          defaultValue={layout}
          value={layout}
          onValueChange={(value) => handleLayoutChange(value as LayoutsKey)}
        >
          <TabsList className="grid grid-cols-3">
            {layoutOptions.map(({ key, label }) => (
              <TabsTrigger key={key} value={key} className="cursor-pointer">
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
