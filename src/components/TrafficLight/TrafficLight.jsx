import React, { useState, useEffect } from "react";
import "./TrafficLight.css";

export default function TrafficLight() {
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    let timeoutId;
    if (currentLight === "green") {
      timeoutId = setTimeout(() => setCurrentLight("yellow"), 3000);
    } else if (currentLight === "yellow") {
      timeoutId = setTimeout(() => setCurrentLight("red"), 500);
    } else if (currentLight === "red") {
      timeoutId = setTimeout(() => setCurrentLight("green"), 4000);
    }
    return () => clearTimeout(timeoutId);
  }, [currentLight]);

  return (
    <div className="wrapper">
      <h2>Traffic Light</h2>
      <div className="signals">
        <span
          style={{
            backgroundColor: currentLight === "red" ? "red" : "white",
          }}
        ></span>
        <span
          style={{
            backgroundColor: currentLight === "yellow" ? "yellow" : "white",
          }}
        ></span>
        <span
          style={{
            backgroundColor: currentLight === "green" ? "green" : "white",
          }}
        ></span>
        <span className="rod"></span>
      </div>
    </div>
  );
}
