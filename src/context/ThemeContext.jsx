import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Set default to "light" if no saved theme exists in localStorage
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio_theme");
    return savedTheme || "light"; // Default is always light
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save user choice to localStorage
    localStorage.getItem("portfolio_theme") && localStorage.setItem("portfolio_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("portfolio_theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);