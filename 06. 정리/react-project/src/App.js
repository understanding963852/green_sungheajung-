import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Layout from "./page/Layout";
import LoginForm from "./page/LoginForm";
import MyPage from "./page/MyPage";
import { UserContextProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/loginform" element={<LoginForm />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
