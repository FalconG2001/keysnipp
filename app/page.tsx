import KeyboardGrid from "@/Components/KeyBoardGrid";

const layouts = {
  letters: [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
    [" "],
  ],
  numbers: [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["@", "#", "₹", "_", "&", "-", "+", "(", ")", "/"],
    ["*", '"', "'", ":", ";", "!", "?"],
    [" "],
  ],
  symbols: [
    ["~", "`", "|", "·", "√", "π", "÷", "×", "§", "Δ"],
    ["€", "¥", "$", "¢", "^", "°", "=", "{", "}", "\\"],
    ["%", "©", "®", "™", "✓", "[", "]"],
    [" "],
  ],
};

export type LayoutsKey = keyof typeof layouts;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background text-foreground w-full">
      <KeyboardGrid layouts={layouts} initialLayout={"letters"} />
    </main>
  );
}
