const qwertyLayouts = {
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
  "BÉPO",
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
  type LayoutsKey = keyof typeof qwertyLayouts;
  type Layouts = typeof qwertyLayouts;
}

export type { LayoutsKey, Layouts };

export default qwertyLayouts;
