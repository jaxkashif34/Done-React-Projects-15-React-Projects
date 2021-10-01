import React, { useState } from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiMinus, BiPlus } from "react-icons/bi";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const ShowInfoHandler = () => {
    setShowInfo((prevInfo) => {
      return !prevInfo;
    });
  };

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => ShowInfoHandler()}>
          {showInfo ? <BiMinus /> : <BiPlus />}
        </button>
      </header>
      {showInfo ? <p>{info}</p> : null}
    </div>
  );
};

export default Question;
