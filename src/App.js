/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

import light from './images/lighta.png'
import dark from './images/dark.png'

import style from "./style.css";


function App({ isDark, setIsDark }) {
  const theme = useTheme();

  return (
    <div
      css={css`
        padding: 5px 0;
        background-color: ${theme.background};
        color: ${theme.text};
        text-align: center;
        height: 100vh;
        transition-duration: 0.2s;
        transition-property: background-color, color;
        font-size:110px;
      `}
    >
      <button
        css={css`
          margin:0px 10px;
          border: 2px solid ${theme.buttonBorder};
          border-radius:25px;
          background-color: ${theme.buttonBg};
          color: ${theme.buttonText};
          padding: 6px 6px 2px 6px;
          font-size: 16px;
          transition-duration: 0.2s;
          transition-property: background-color, color;
          cursor: pointer;
          outline: none;

          :hover {
            background-color: ${theme.buttonBgHover};
            color: ${theme.buttonTextHover};
          }
        `}
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        {/* Change to {isDark ? "light" : "dark"} mode */}
        {isDark ?<img src={light} /> :  <img src={dark} /> } 
      </button>

      <h1>{isDark ? 'Dark' :  'Light' }</h1>
    </div>
  );
}

export default App;
