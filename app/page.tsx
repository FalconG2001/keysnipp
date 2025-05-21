import { ModeToggle } from "@/components/ToggleMode";
import KeyboardGrid from "@/components/KeyBoardGrid";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center justify-end p-4 bg-background text-foreground w-full">
        <ModeToggle />
      </div>

      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background text-foreground w-full">
        <KeyboardGrid />
      </main>
    </div>
  );
}
