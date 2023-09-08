import "./Header.css";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../App";
import { useContext } from "react";

export default function Header() {
  const { themeMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="body">
      <div className="title">
        <img src="/images/memelogo.png" className="logo" />
        <h1>MEME generator</h1>
      </div>
      <div className="switch">
        <ReactSwitch
          onChange={toggleTheme}
          checked={themeMode === "dark"}
          checkedIcon={
            <svg
              className="sun"
              width="70%"
              height="70%"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          }
          uncheckedIcon={
            <svg
              width="90%"
              height="90%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M20.4335 13.9335C20.1286 13.9773 19.817 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 7.18303 13.0227 6.87136 13.0665 6.56653C9.91893 7.0192 7.5 9.72711 7.5 13C7.5 16.5898 10.4101 19.5 14 19.5C17.2729 19.5 19.9808 17.0811 20.4335 13.9335Z"
                  stroke="#fff"
                ></path>{" "}
                <path
                  d="M4.5 8.75V10.25"
                  stroke="#fff"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M5.25 9.5H3.75"
                  stroke="#fff"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M7.5 3.5V5.5"
                  stroke="#fff"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M8.5 4.5H6.5"
                  stroke="#fff"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
          }
          height={28}
          width={56}
          handleDiameter={20}
          offColor={"#24193e"}
          onColor={"#8d0db5"}
        />
      </div>
    </div>
  );
}
