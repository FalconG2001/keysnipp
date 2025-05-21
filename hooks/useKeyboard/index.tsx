"use client";
import { useContext } from "react";
import { KeyboardContext } from "@/context/KeyboardContext";

const useKeyboard = () => {
  const context = useContext(KeyboardContext);
  if (!context) {
    throw new Error("useKeyboard must be used within a KeyboardProvider");
  }

  return context;
};

export default useKeyboard;
