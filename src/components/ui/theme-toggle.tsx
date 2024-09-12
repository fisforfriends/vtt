"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme  } from "next-themes";
import { Button    } from "./button";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  function toggleTheme() {
    switch(resolvedTheme) {
      case "dark" : return setTheme("light");
      case "light": return setTheme("dark" );
    }
  }

  return (
    <Button onClick={toggleTheme}>
      <Sun  className="block dark:hidden"/>
      <Moon className="hidden dark:block"/>
    </Button>
  )
}