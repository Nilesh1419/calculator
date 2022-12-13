import React, { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");

  const resultHandler = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clr = () => {
    setResult("");
  };

  const del = () => {
    setResult(result.slice(0, -1));
  };

  const equ = () => {
    setResult(eval(result).toString());
  };

  return (
    <>
      <h1> Calculator </h1>
      <input type="text" value={result}></input>
      <div>
        <button onClick={resultHandler} value="1">
          1
        </button>
        <button onClick={resultHandler} value="2">
          2
        </button>
        <button onClick={resultHandler} value="3">
          3
        </button>
      </div>
      <div>
        {" "}
        <button onClick={resultHandler} value="4">
          4
        </button>
        <button onClick={resultHandler} value="5">
          5
        </button>
        <button onClick={resultHandler} value="6">
          6
        </button>
      </div>
      <div>
        <button onClick={resultHandler} value="7">
          7
        </button>
        <button onClick={resultHandler} value="8">
          8
        </button>
        <button onClick={resultHandler} value="9">
          9
        </button>
      </div>
      <div>
        <button onClick={resultHandler} value="0">
          0
        </button>
        <button onClick={resultHandler} value="*">
          *
        </button>
        <button onClick={resultHandler} value="/">
          /
        </button>
        <button onClick={resultHandler} value="+">
          +
        </button>
      </div>
      <div>
        {" "}
        <button onClick={resultHandler} value="-">
          -
        </button>
        <button onClick={equ} value="=">
          =
        </button>
        <button onClick={del} value="DEL">
          DEL
        </button>
        <button onClick={clr} value="C">
          CLR
        </button>
      </div>
    </>
  );
}
