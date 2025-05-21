"use client";

import { createContext, useState, useEffect, useCallback } from "react";

interface KeyboardContextProps {
  layout: LayoutsKey;
  handleLayoutChange: (layout: LayoutsKey) => void;
  caps: boolean;
  handleCapsChange: (caps: boolean) => void;
  copied: string;
  handleCopy: (copied: string) => void;
  favorites: string[];
  toggleFavorite: (key: string) => void;
  isFavorite: (key: string) => boolean;
}

const defaultContext: KeyboardContextProps = {
  layout: "letters",
  handleLayoutChange: () => {},
  caps: false,
  handleCapsChange: () => {},
  copied: "",
  handleCopy: () => {},
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
};

export const KeyboardContext =
  createContext<KeyboardContextProps>(defaultContext);

export const KeyboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [layout, setLayout] = useState<LayoutsKey>("letters");
  const [caps, setCaps] = useState(false);
  const [copied, setCopied] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleCopy = useCallback(
    (key: string) => {
      setCopied("");
      const finalKey = caps && layout === "letters" ? key.toUpperCase() : key;
      navigator.clipboard.writeText(finalKey);
      setCopied(finalKey);
      setTimeout(() => setCopied(""), 2000);
    },
    [caps, layout]
  );

  const handleLayoutChange = useCallback((newLayout: LayoutsKey) => {
    setLayout(newLayout);
  }, []);

  const handleCapsChange = useCallback((caps: boolean) => {
    setCaps(caps);
  }, []);

  const isFavorite = useCallback(
    (key: string) => favorites.includes(key),
    [favorites]
  );

  const toggleFavorite = useCallback((key: string) => {
    setFavorites((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  }, []);

  useEffect(() => {
    const favs = localStorage.getItem("favorites");
    if (favs) setFavorites(JSON.parse(favs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <KeyboardContext.Provider
      value={{
        layout,
        handleLayoutChange,
        caps,
        handleCapsChange,
        copied,
        handleCopy,
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </KeyboardContext.Provider>
  );
};
