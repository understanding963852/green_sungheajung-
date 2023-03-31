import "./App.css";
import MemoClass from "./components/MemoClass";
import MemoFunc from "./components/MemoFunc";
import TestHook from "./components/TestHook";

function App() {
  return (
    <div className="App">
      <TestHook />
      <MemoFunc />
      <MemoClass />
    </div>
  );
}

export default App;
