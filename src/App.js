import "./styles.css";
import React, { useState } from "react";
//import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setOutput(eval(input).toString());
    } catch (error) {
      setOutput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="result">{output}</div>
      <div className="buttons">
        {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"].map(
          (button, index) => (
            <button
              key={index}
              onClick={() =>
                button === "="
                  ? handleCalculate()
                  : button === "C"
                  ? handleClear()
                  : handleButtonClick(button)
              }
            >
              {button}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default App;
