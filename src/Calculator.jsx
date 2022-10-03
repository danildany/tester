import { useState } from "react";
import { evaluate } from "mathjs";

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
export const operations = ["+", "-", "*", "/"];
export const equalSign = "=";
export const Calculator = () => {
  const [value, setValue] = useState("");
  const createHandlerValue = (v) => () => {
    setValue(value + v);
  };
  return (
    <section>
      <h1>Calculator</h1>
      <input type="text" value={value} readOnly />
      <div role="grid">
        {rows.map((row, i) => (
          <div key={i} role="row">
            {row.map((number) => (
              <button key={number} onClick={createHandlerValue(number)}>
                {number}
              </button>
            ))}
          </div>
        ))}
        {operations.map((operation, i) => (
          <button onClick={createHandlerValue(operation)} key={i}>
            {operation}
          </button>
        ))}
        <button
          onClick={() => {
            setValue(evaluate(value));
          }}
        >
          {equalSign}
        </button>
      </div>
    </section>
  );
};
