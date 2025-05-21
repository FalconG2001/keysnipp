// app/components/KeyboardGrid.tsx
import PinnedKeysSection from "../PinnedKeys";
import LayoutSwitcher from "../LayoutSwitcher";
import LayoutGrid from "../LayoutGrid";
import qwertyLayouts from "@/data/QwertyLayout";
import CopiedContent from "../CopiedContent";
import { KeyboardProvider } from "@/context/KeyboardContext";

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
