"use client";
import { KeyboardContext } from "@/context/KeyboardContext";
import React, { useContext } from "react";

const CopiedContent = () => {
  const { copied } = useContext(KeyboardContext);
  return (
    <>
      {copied && (
        <div className="text-green-500 font-medium">
          Copied: &quot;{copied}&quot;
        </div>
      )}
    </>
  );
};

export default CopiedContent;
