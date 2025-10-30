import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Button />
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      
      </div>
      
    </>
  );
}

export default App;
