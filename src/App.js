import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleColor = (e) => {
    setColor(e.target.value);
  };
  const getCharacterCount = () => {
    const trimText = text.split(" ").join("");
    return trimText.length;
  };
  return (
    <div className="App">
      <textArea
        value={text}
        style={{ color: color }}
        onChange={handleText}
        className="textArea"
      ></textArea>
      <select value={color} onChange={handleColor}>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <h2 style={{ color: color }}>{text}</h2>
      <p>Characters: {getCharacterCount()}</p>
    </div>
  );
}

export default App;
