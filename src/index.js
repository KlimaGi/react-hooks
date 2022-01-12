import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#CCCCCC");

  const submit = (e) => {
    e.preventDefault();
    alert(`${sound} sound like ${color}`);
    setSound("");
    setColor("#CCCCCC");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={sound}
        type="text"
        placeholder="Sound..."
        onChange={(e) => setSound(e.target.value)}
      />
      <input
        value={color}
        type="color"
        onChange={(e) => setColor(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
