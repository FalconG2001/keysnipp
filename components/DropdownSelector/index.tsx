"use client";

import { usePathname, useRouter } from "next/navigation";
import { langs, sharedLayouts } from "@/data/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

function getActive(type: "layout" | "language", pathname: string) {
  const match = pathname.startsWith(`/${type}/`) ? pathname.split("/")[2] : "";
  return match;
}

export default function DropdownSelector() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLayout = getActive("layout", pathname);
  const currentLang = getActive("language", pathname);

  const [layoutOpen, setLayoutOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const goTo = (
    type: "layout" | "language",
    value: string,
    current: string
  ) => {
    if (value === current) router.push("/");
    else router.push(`/${type}/${value}`);
  };

  return (
    <div className="flex gap-4">
      {/* Layout Dropdown */}
      <Popover open={layoutOpen} onOpenChange={setLayoutOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={layoutOpen}
            className="w-[180px] justify-between"
          >
            {currentLayout ? currentLayout : "Choose Layout"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[180px] p-0">
          <Command>
            <CommandInput placeholder="Search layouts..." />
            <CommandEmpty>No layout found.</CommandEmpty>
            <CommandGroup>
              {sharedLayouts.map((layout) => {
                const value = layout.toLowerCase();
                return (
                  <CommandItem
                    key={value}
                    onSelect={() => {
                      goTo("layout", value, currentLayout);
                      setLayoutOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        currentLayout === value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {layout}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Language Dropdown */}
      <Popover open={langOpen} onOpenChange={setLangOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={langOpen}
            className="w-[180px] justify-between"
          >
            {currentLang ? currentLang : "Choose Language"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[180px] p-0">
          <Command>
            <CommandInput placeholder="Search languages..." />
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {langs.map((lang) => (
                <CommandItem
                  key={lang}
                  onSelect={() => {
                    goTo("language", lang, currentLang);
                    setLangOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      currentLang === lang ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
