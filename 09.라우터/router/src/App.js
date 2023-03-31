import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Intro from "./page/Intro";
import Profile from "./page/Profile";
import Boardlist from "./page/BoardList";
import Board from "./page/Board";
import Layout from "./page/Layout";
import NotFound from "./page/NotFound";
import MyPage from "./page/MyPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/** 컴포넌트와 주소 연결 */}
          {/** index는 상위 주소와 동일한 주소를 갖는다 */}
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/** 임의의 컴포넌트 하나를 추가해보세요 */}
          <Route path="/intro" element={<Intro />}></Route>
          <Route path="/profile/:username" element={<Profile />}></Route>
        </Route>

        {/** 중첩하여 라우터를 사용할수 있다 - outlet 컴포넌트 필요 */}
        <Route path="/boardlist" element={<Boardlist />}>
          <Route path=":id" element={<Board />}></Route>
        </Route>
        {/** <Route path="/boardlist/:id" element={<Board />}></Route> */}

        {/** *기호를 사용해서 다른 주소로 들어갔을때 오류 출력 */}
        <Route path="*" element={<NotFound />}></Route>

        <Route path="/mypage" element={<MyPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
