import "./App.css";
import TodoItem from "./components/features/TodoItem/TodoItem";
import Button from "./components/ui/Button/Button";
import Input from "./components/ui/Input/Input";

function App() {
  return (
    <>
<TodoItem />
    <h2>trennlinie</h2>
      <Button />
      <Input />
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
