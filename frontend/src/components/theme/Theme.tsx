import React, {FC, useState, useLayoutEffect } from "react";

interface IThemeType  {
  children: React.ReactNode
}

export const ThemeContext = React.createContext({
  dark: false,
  /* tslint:disable:no-empty */
  toggle: () => {}
});

const ThemeProvider:FC<IThemeType> = ({ children }) => {
  // keeps state of the current theme
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [dark, setDark] = useState(prefersDark);

  // paints the app before it renders elements
  useLayoutEffect(() => {
    // Media Hook to check what theme user prefers
    applyTheme();
    // if state changes, repaints the app
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dark]);

  // rewrites set of css variablels/colors
  const applyTheme = () => {
    let theme;
    if (dark) {
      theme = darkTheme;
    }
    if (!dark) {
      theme = lightTheme;
    }

    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme?.join(";")!;
  };

  const toggle = () => {
    console.log("Toggle Method Called");

    // A smooth transition on theme switch
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition: background .5s ease";

    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// styles
const lightTheme = [
  "--bg-color: var(--color-white)",
  "--bg-color-hp: var(--bg-color-hp-primary)",
  "--bg-navbar: var(--bg-navbar-primary)",
  "--bg-logo: var(--bg-logo-primary)",
  "--home-title: var(--home-title-primary)",
  "--sign-btn: var(--sign-btn-primary)",
  "--sign-btn-fontColor: var(--sign-btn-fontColor-primary)",
  "--navLink-text: var(--navLink-text-primary)",
  "--logoTitle: var(--logoTitle-primary)",
];

const darkTheme = [
  "--bg-color: var(--color-blue)",
  "--bg-color-hp: var(--bg-color-hp-secondary)",
  "--bg-navbar: var(--bg-navbar-secondary)",
  "--bg-logo: var(--bg-logo-secondary)",
  "--home-title: var(--home-title-secondary)",
  "--sign-btn: var(--sign-btn-secondary)",
  "--sign-btn-fontColor: var(--sign-btn-fontColor-secondary)",
  "--navLink-text: var(--navLink-text-secondary)",
  "--logoTitle: var(--logoTitle-secondary)",
];

export default ThemeProvider;