import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, info, title }) => {
  const [state, setState] = useState(false);
  return (
    <div className="question" key={id}>
      <header>
        <h2>{title}</h2>
        <button
          className="btn"
          onClick={() => {
            setState(!state);
          }}
        >
          {state ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      <p>{state && info}</p>
    </div>
  );
};

export default Question;
