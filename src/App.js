import React, { useState } from "react";

const App = () => {
  const purple = "green";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("Click");
  const bgChange = () => {
    // console.log("Clicked");

    let newBg = "khaki";
    setBg(newBg);
    setName("Lavish ");
  };

  const bgback = () => {
    setBg(purple);
    setName("Ohh");
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={bgback}>
          {name}{" "}
        </button>
      </div>
    </>
  );
};

export default App;
