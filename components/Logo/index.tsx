"use client";
import icon_dark from "@/public/logos/icon_dark_theme-min.png";
import icon_light from "@/public/logos/icon_light_theme-min.png";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = () => {
  const { theme } = useTheme();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDarkMode = theme === "dark";
    setDark(isDarkMode);
  }, [theme]);

  return (
    <Link href={"/"} className="flex items-center justify-center">
      <Image
        src={dark ? icon_dark : icon_light}
        alt="Logo"
        className="w-16 h-auto"
      />
      <span className="text-accent-foreground text-2xl">KeySnipp</span>
    </Link>
  );
};

export default Logo;
