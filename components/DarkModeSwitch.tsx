import React, { Fragment } from "react";
import { useDarkMode } from "next-dark-mode";
import { device } from "../functions/device";

import styled, { keyframes } from "styled-components";

export default function DarkSwitch() {
  console.log(useDarkMode());
  const {
    autoModeActive,
    darkModeActive,
    switchToAutoMode,
    switchToDarkMode,
    switchToLightMode,
  } = useDarkMode();

  const findActive = (text: string): boolean => {
    if (autoModeActive) return text === "auto";
    else if (darkModeActive) return text === "dark";
    else return text === "light";
  };

  const toggleMode = (text: string) => {
    if (text === "Auto") switchToAutoMode();
    if (text === "Dark") switchToDarkMode();
    if (text === "Light") switchToLightMode();
  };

  return (
    <div className={`darkswitch ${darkModeActive ? "dark" : "light"}`}>
      <div className="switch">
        {["Auto", "Dark", "Light"].map((text, index) => (
          <Fragment key={index}>
            <input
              checked={findActive(text.toLowerCase())}
              id={`_${index}`}
              name="switch"
              onChange={() => toggleMode(text)}
              type="radio"
            />
            <label className="switch__label" htmlFor={`_${index}`}>
              {text}
            </label>
          </Fragment>
        ))}
        <div className="switch__indicator" />
      </div>
    </div>
  );
}
