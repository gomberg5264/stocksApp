import React, {FC, useState, useLayoutEffect ,useEffect} from "react";

interface IThemeType  {
  children: React.ReactNode
}

export const ThemeContext = React.createContext({
  dark: false,
  /* tslint:disable:no-empty */
  toggle: () => {}
});

const ThemeProvider:FC<IThemeType> = ({ children }) => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [localDark, setLocalDark] = useState(getMode);
  const [dark, setDark] = useState(prefersDark || localDark);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(localDark));
  }, [dark]);

  function getMode() {
    const savedmode = JSON.parse(localStorage.getItem("dark"));
    return savedmode || false;
  }

  useLayoutEffect(() => {
    applyTheme();
    setLocalDark(!localDark);
    // if state changes, repaints the app
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dark]);

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
  "--bg-color-not-hp: var(--bg-color-hp-primary)",
  "--bg-navbar: var(--bg-navbar-primary)",
  "--bg-logo: var(--bg-logo-primary)",
  "--home-title: var(--home-title-primary)",
  "--sign-btn: var(--sign-btn-primary)",
  "--sign-btn-fontColor: var(--sign-btn-fontColor-primary)",
  "--navLink-text: var(--navLink-text-primary)",
  "--logoTitle: var(--logoTitle-primary)",
  "--border: var(--border-primary)",
  "--input-box-bg: var(--input-box-bg-primary)",
  "--input-box-border-1: var(--input-box-border-1-primary)",
  "--input-box-border-2: var(--input-box-border-2-primary)",
  "--stock-container: var(--stock-container-primary)",
  "--modal-btn: var(--modal-btn-primary)",
];

const darkTheme = [
  "--bg-color: var(--color-blue)",
  "--bg-color-hp: var(--bg-color-hp-secondary)",
  "--bg-color-not-hp: var(--bg-color-not-hp-secondary)",
  "--bg-navbar: var(--bg-navbar-secondary)",
  "--bg-logo: var(--bg-logo-secondary)",
  "--home-title: var(--home-title-secondary)",
  "--sign-btn: var(--sign-btn-secondary)",
  "--sign-btn-fontColor: var(--sign-btn-fontColor-secondary)",
  "--navLink-text: var(--navLink-text-secondary)",
  "--logoTitle: var(--logoTitle-secondary)",
  "--border: var(--border-secondary)",
  "--input-box-bg: var(--input-box-bg-secondary)",
  "--input-box-border-1: var(--input-box-border-1-secondary)",
  "--input-box-border-2: var(--input-box-border-2-secondary)",
  "--stock-container: var(--stock-container-secondary)",
  "--modal-btn: var(--modal-btn-secondary)",
];

export default ThemeProvider;