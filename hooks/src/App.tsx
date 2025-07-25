import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { usePrevious } from "./hooks/usePrevious";

// const usePrevious = (value: any) => {
//   // create a new reference
//   const ref = useRef(null);

//   // store current value in ref
//   useEffect(() => {
//     ref.current = value;
//   }, [value]); // only re-run if value changes

//   return ref.current;
//   // return previous value (happens before update in useEffect above)
// };

function App() {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}, previous is {previous}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
