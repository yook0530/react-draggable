import React, { useState } from "react";
import "./App.css";
import Draggable from "./Components/Draggable";
import Box from "./Components/Box";
import useWindowDimensions from "./Components/Window";

function App() {
  const { height, width } = useWindowDimensions();

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleDragMove = (e) => {
    if (
      position.x + e.movementX < 0 ||
      position.x + e.movementX > width - 200 ||
      position.y + e.movementY < 0 ||
      position.y + e.movementY > height - 200
    ) {
    } else {
      setPosition({
        x: position.x + e.movementX,
        y: position.y + e.movementY,
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Draggable onDragMove={handleDragMove}>
          <div
            style={{
              transform: `translateX(${position.x}px) translateY(${position.y}px)`,
            }}
          >
            <Box />
          </div>
        </Draggable>
      </header>
    </div>
  );
}

export default App;
