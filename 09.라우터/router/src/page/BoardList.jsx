import { Link, Outlet, NavLink } from "react-router-dom";
// NavLink : 라우터의 경로가 일치하는 경우 특정 스타일 또는 클래스 적용

const Boardlist = () => {
  const activeStyle = {
    color: "green",
    fontWeight: "bold",
  };
  const numlist = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>board</h1>
      <ul>
        {numlist.map((num, index) => (
          <li key={index}>
            <NavLink
              to={`/boardlist/${num}`}
              // NavLink에 있는 isActive의 값을 구조화 할당으로 들고옴
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              // className으로 작성할때도 동일
              // className={({isActive})=> (isActive ? activeClass :undefined )}
            >
              게시글 {num}
            </NavLink>
          </li>
        ))}
      </ul>
      {/** Outlet을 통해서 중첩된 컴포넌트의 화면이 출력 */}
      <Outlet />
    </div>
  );
};
export default Boardlist;
