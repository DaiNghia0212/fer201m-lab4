import React, { ChangeEvent } from "react";

export const useDarkTheme = () => {
  const [selectedTheme, setSelectedTheme] = React.useState("light");
  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
    setSelectedTheme("dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
    setSelectedTheme("light");
  };

  React.useEffect(() => {
    if (localStorage.getItem("selectedTheme") === "dark") {
      setSelectedTheme("dark");
      setDarkMode();
    }
  }, []);

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return { selectedTheme, toggleTheme };
};
