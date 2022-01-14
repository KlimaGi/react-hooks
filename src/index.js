import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

export const TreesContext = createContext();

const trees = [
  { id: "1", type: "Maple" },
  { id: "2", type: "Oak" },
  { id: "3", type: "Pine" },
  { id: "4", type: "Birch" },
];

ReactDOM.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>,
  document.getElementById("root")
);
