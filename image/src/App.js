import React from "react";
import ImageSlider from "./component"; // Assuming the correct path to ImageSlider component

function App() {
  return (
    <div className="App">
      <ImageSlider
        url={"https://picsum.photos/200/300"}
        page={1} // Changed to number
        limit={4} // Changed to number
      />
    </div>
  );
}

export default App;
