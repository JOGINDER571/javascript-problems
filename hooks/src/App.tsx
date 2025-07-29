import { useState } from "react";
import "./App.css";
import { usePrevious } from "./hooks/usePrevious";
import { useIdle } from "./hooks/useIdle";
import { useAsync } from "./hooks/useAsync";
import Home from "./Home";

const async = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = Math.floor(Math.random() * 10);
      if (value > 0) {
        resolve("hello");
      } else {
        reject("error");
      }
    }, 1000);
  });
};

function App() {
  const { value, error, status, refetch } = useAsync(async, true);
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  const idle = useIdle(2000);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}, previous is {previous}
        </button>
      </div>
      <h1>IsIdle: {idle ? "true" : "false"}</h1>
      <div>
        <div>Status: {status}</div>
        <div>Value: {value}</div>
        <div>error: {error}</div>
      </div>
      <Home />
    </>
  );
}

export default App;
