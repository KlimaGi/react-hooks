import React, { useContext } from "react";
import "./App.css";
import { TreesContext } from "./";

export const App = () => {
  const { trees } = useContext(TreesContext);

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
