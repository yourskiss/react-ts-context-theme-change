// src/context/ThemeContext.tsx
import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

import { AvailableThemes } from "./constants";
import type { Theme } from "./constants";

// Defines the shape of our context's value
interface ThemeContextType {
  theme: Theme;
  changeTheme: (newTheme: Theme) => void;
  AvailableThemes: readonly Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state from local storage or default to "light"
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "primary"
  );

  const changeTheme = (newTheme: Theme) => {
    if (AvailableThemes.includes(newTheme)) {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  // Update the <body> class whenever the theme state changes
  useEffect(() => {
    document.body.className = ""; // Reset class to prevent duplicates
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, AvailableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to easily consume the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};