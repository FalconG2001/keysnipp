// app/components/KeyboardGrid.tsx

import qwertyLayouts from "@/data/QwertyLayout";
import { KeyboardProvider } from "@/context/KeyboardContext";
import PinnedKeysSection from "@/components/PinnedKeys";
import LayoutSwitcher from "@/components/LayoutSwitcher";
import LayoutGrid from "@/components/LayoutGrid";
import CopiedContent from "@/components/CopiedContent";

export default function KeyboardGrid() {
  return (
    <div className="flex flex-col items-center p-4 space-y-4 w-full overflow-hidden min-h-screen transition-all duration-300 ease-in-out">
      <KeyboardProvider>
        <PinnedKeysSection />
        <LayoutSwitcher />
        <LayoutGrid qwertyLayouts={qwertyLayouts} />
        <CopiedContent />
      </KeyboardProvider>
    </div>
  );
}
