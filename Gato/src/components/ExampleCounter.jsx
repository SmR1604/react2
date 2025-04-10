import { useState, useEffect } from "react";

function ExampleCounter({
  initialValue,
  timeOut,
  start,
  reset,
  onResetHandled,
  onStop,
}) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      if (start) {
        if (reset) {
          setCounter(initialValue);
          // Avisamos al padre para que reinicie el flag de reset
          onResetHandled && onResetHandled();
        } else {
          setCounter((prev) => prev - 1);
        }

        if (counter <= 0) {
          onStop && onStop();
          timeOut();
        }
      } else {
        setCounter(initialValue);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [start, reset, counter, initialValue, timeOut, onResetHandled, onStop]);

  return (
    <div>
      <h1>Counter: {counter}</h1>
    </div>
  );
}

export default ExampleCounter;
