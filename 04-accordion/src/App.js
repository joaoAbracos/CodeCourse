import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [state, setState] = useState(data);
  return (
    <div className="container">
      {state.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </div>
  );
}

export default App;
