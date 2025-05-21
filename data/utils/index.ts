export const sharedLayouts = [
  "QWERTY",
  "AZERTY",
  "QWERTZ",
  "Dvorak",
  "Colemak",
  "Programmer_Dvorak",
  "Neo_Layout",
  "Workman",
  "Maltron",
  "BEPO",
];

export const sharedLayoutsKeys = {
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

export const langs = [
  "jcuken",
  "arabic",
  "hebrew",
  "devanagari",
  "tamil",
  "kana",
  "hangul",
  "greek",
  "thai_kedmanee",
  "zhuyin",
];

declare global {
  type SharedLayoutsKey = keyof typeof sharedLayoutsKeys;
  type LayoutsKey = "letters" | "numbers" | "symbols";
  type Layouts = {
    letters: string[][];
    numbers: string[][];
    symbols: string[][];
  };
}

export type { LayoutsKey, Layouts };
