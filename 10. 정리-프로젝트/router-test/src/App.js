import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home";
import About from "./page/About";
import BoardList from "./page/BoardList";
import Board from "./page/Board";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/boardlist" element={<BoardList />}>
            <Route path=":id" element={<Board />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
