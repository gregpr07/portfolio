import React, { Fragment, useState } from "react";
import { useDarkMode } from "next-dark-mode";
import { device } from "../functions/device";

import styled, { keyframes } from "styled-components";

export default function DarkSwitch() {
  const {
    autoModeActive,
    darkModeActive,
    switchToAutoMode,
    switchToDarkMode,
    switchToLightMode,
  } = useDarkMode();

  const findActive = () => {
    if (autoModeActive) return 0;
    else if (darkModeActive) return 1;
    else return 2;
  };

  const options = ["Auto", "Dark", "Light"];
  const [current, setCurrent] = useState(findActive());

  const setNewCurr = () => {
    console.log(current);
    if (current > 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const toggleMode = () => {
    if (current == 0) switchToDarkMode();
    if (current == 1) switchToLightMode();
    if (current == 2) switchToAutoMode();
    setNewCurr();
  };

  return (
    <div className={`darkswitch ${darkModeActive ? "dark" : "light"}`}>
      <div
        className="switch"
        onClick={() => {
          toggleMode();
        }}
      >
        <input
          checked={true}
          id={`_${current}`}
          name="switch"
          type="radio"
          readOnly
        />
        {/*         <label className="switch__label" htmlFor={`_${current}`}>
          {options[current]}
        </label> */}

        <div
          className={`switch__indicator ${darkModeActive ? "right" : "left"}`}
        />
      </div>
    </div>
  );
}
