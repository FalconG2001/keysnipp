"use client";

import { createContext, useState, useEffect, useCallback } from "react";

import { toast } from "sonner";

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
  clearFavorites: () => void;
  recents: string[];
  clearRecents: () => void;
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
  clearFavorites: () => {},
  recents: [],
  clearRecents: () => {},
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
  const [recents, setRecents] = useState<string[]>([]);

  const updateRecents = (key: string) => {
    setRecents((prev) => {
      const filtered = prev.filter((k) => k !== key);
      const newList = [key, ...filtered];
      return newList.slice(0, 5);
    });
  };

  const handleCopy = useCallback(
    (key: string) => {
      setCopied("");
      const finalKey = caps && layout === "letters" ? key.toUpperCase() : key;
      navigator.clipboard.writeText(finalKey);
      setCopied(finalKey);
      updateRecents(finalKey);
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
    setFavorites((prev) => {
      const already = prev.includes(key);
      if (already) return prev.filter((k) => k !== key);

      if (prev.length >= 15) {
        toast.error(
          "You can pin up to 15 keys only. Unpin one to add another."
        );
        return prev;
      }

      return [...prev, key];
    });
  }, []);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  const clearRecents = useCallback(() => {
    setRecents([]);
  }, []);

  // Load from localStorage
  useEffect(() => {
    const favs = localStorage.getItem("favorites");
    const recent = localStorage.getItem("recents");
    if (favs) setFavorites(JSON.parse(favs));
    if (recent) setRecents(JSON.parse(recent));
  }, []);

  // Store favorites + recents
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("recents", JSON.stringify(recents));
  }, [recents]);

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
        recents,
        clearFavorites,
        clearRecents,
      }}
    >
      {children}
    </KeyboardContext.Provider>
  );
};
