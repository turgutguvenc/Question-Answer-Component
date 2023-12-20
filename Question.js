import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ question }) => {
  const [display, setDisplay] = useState(false);
  const handleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <article className="question">
      <header>
        <h4>{question.title}</h4>
        <button className="btn" onClick={handleDisplay}>
          {display ? "+" : "-"}
        </button>
      </header>
      {display ? <p>{question.info}</p> : ""}
    </article>
  );
};
export default Question;
