import React, { useState } from "react";
import { Button } from "./style";

const DarkMode = () => {
  const [checkedTheme, setCheckedTheme] = useState(
    localStorage.getItem("theme") === "dark" ? "checked" : ""
  );
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.setAttribute("theme", theme);
  } else {
    body.setAttribute("theme", lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      setCheckedTheme("");
    } else {
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
      setCheckedTheme("checked");
    }
  };

  return (
    <Button>
      <div className="button">
        <input
          type="checkbox"
          className={`checkbox ${checkedTheme} darkmode ${
            theme === "dark" ? clickedClass : ""
          }`}
          onClick={(e) => switchTheme(e)}
          id="chk"
        />
        <label className="label" htmlFor="chk">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <div className="ball"></div>
        </label>
      </div>
    </Button>
  );
};

export default DarkMode;
