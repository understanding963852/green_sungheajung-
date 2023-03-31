import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const BoardList = () => {
  const [num, setNum] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <div>
      <h1>Board</h1>
      <p> 파라미터 및 중첩 라우터를 사용하여 아래 Board의 내용이 보입니다</p>

      {
        // ()=>() ()의 내용이 return
        // ()=>{} {}의 내용이 실행됨(return이 필요하다면 따로 작성)
        num.map((n) => (
          <Link key={n} to={`/boardlist/${n}`}>
            {n}
          </Link>
        ))
      }
      <Outlet />
    </div>
  );
};
export default BoardList;
