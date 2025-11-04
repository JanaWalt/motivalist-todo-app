import "./App.css";
import TodoItem from "./components/features/TodoItem/TodoItem";
import Button from "./components/ui/Button/Button";
import Input from "./components/ui/Input/Input";

function App() {
  return (
    <div className="appWrapper">
<TodoItem />
    <h2>trennlinie</h2>
      <Button />
      <Input />

    </div>
  );
}

export default App;
