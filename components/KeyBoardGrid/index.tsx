// app/components/KeyboardGrid.tsx

import { sharedLayoutsKeys } from "@/data/utils";
import { KeyboardProvider } from "@/context/KeyboardContext";
import LayoutSwitcher from "@/components/LayoutSwitcher";
import LayoutGrid from "@/components/LayoutGrid";
import CopiedContent from "@/components/CopiedContent";
import { notFound } from "next/navigation";
import KeyGridSection from "../PinnedKeys";

export default async function KeyboardGrid({
  lang,
  layout = "qwerty",
}: {
  lang?: string;
  layout?: string;
}) {
  let layouts: Layouts;

  try {
    if (lang) {
      const langData = await import(`@/data/languages/${lang}.json`).then(
        (res) => res.default
      );

      layouts = {
        letters: langData.letters || [],
        numbers: langData.numbers || [],
        symbols: langData.symbols || [],
      };
    } else {
      const layoutData = await import(`@/data/layouts/${layout}.json`).then(
        (res) => res.default
      );

      layouts = {
        letters: layoutData[layout] || [],
        ...sharedLayoutsKeys,
      };
    }
  } catch (error) {
    console.error("Invalid layout/lang:", lang ?? layout, error);
    return notFound();
  }

  return (
    <KeyboardProvider>
      <div className="flex flex-col items-center p-4 space-y-4 w-full overflow-hidden min-h-screen transition-all duration-300 ease-in-out">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
          <div className="md:col-span-3 h-full">
            <KeyGridSection type="recents" />
          </div>
          <div className="md:col-span-9 h-full">
            <KeyGridSection type="pinned" />
          </div>
        </div>

        <div className="w-full h-full flex items-center justify-center flex-col border border-dashed border-yellow-300">
          <LayoutSwitcher />
          <LayoutGrid layouts={layouts} />
        </div>
        <CopiedContent />
      </div>
    </KeyboardProvider>
  );
}
