import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  // console.log(hexColor);
  const [alert, setAlert] = useState(false);
  let bcg = rgb.join(",");
  // let hex = rgbToHex(...rgb);

  let hexValue = `#${hexColor}`;

  useEffect(() => {
    setInterval(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);

  return (
    <div
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      <p>{alert && "Copied to clipboard"}</p>
    </div>
  );
};

export default SingleColor;
