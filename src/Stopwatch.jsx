import React, { useEffect, useRef, useState } from "react";

export const Stopwatch = ({ count = 60 }) => {
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(count);
  const [currentCount, setCurrentCount] = useState(count);

  useEffect(() => {
    if (isRunning && currentCount > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentCount((currentCount) => currentCount - 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, currentCount]);

  const handleStart = () => {
    console.log("start!");
    setIsRunning(!isRunning);
  };
  const handlePause = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setIsRunning(false);
    setCurrentCount(count);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            border: "1px solid black",
            width: "150px",
            marginBottom: "50px",
          }}
        >
          {currentCount}
        </h1>
      </div>

      <button style={{ marginRight: "10px" }} onClick={handleStart}>
        START
      </button>
      <button style={{ marginRight: "10px" }} onClick={handlePause}>
        PAUSE
      </button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};
