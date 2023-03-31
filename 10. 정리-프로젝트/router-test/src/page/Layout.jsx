import { NavLink, Outlet, useNavigate } from "react-router-dom";
const Layout = () => {
  const navigate = useNavigate();
  const activeStyle = {
    color: "green",
  };
  return (
    <div>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Home{" "}
      </NavLink>
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        About{" "}
      </NavLink>
      <NavLink to="/boardlist" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Board{" "}
      </NavLink>

      <Outlet />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Layout;
