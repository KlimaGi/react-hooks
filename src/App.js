import React from "react";
import "./App.css";
import { useTrees } from "./";

export const App = () => {
  const { trees } = useTrees();

  return (
    <div>
      <h2>Trees grow chiefly in north temperate regions.</h2>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
