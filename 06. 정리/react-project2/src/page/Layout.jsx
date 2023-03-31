import { useContext } from "react";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import UserContext from "../context/DataContext";

const Layout = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <header>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand>Shop</Navbar.Brand>
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </Nav>
            {user.state.user ? (
              <Nav>
                <NavLink className="nav-link" to="/mypage">
                  {user.state.user}page
                </NavLink>
                <Button
                  onClick={() => {
                    user.action.setUser(null);
                  }}
                >
                  logout
                </Button>
              </Nav>
            ) : (
              <Nav>
                <NavLink className="nav-link" to="/loginform">
                  login
                </NavLink>
              </Nav>
            )}
          </Container>
        </Navbar>
      </header>

      <main className="my-3 mx-5"  >
        <Outlet></Outlet>
      </main>
      <footer className="main-footer py-2">&copy; Green</footer>
    </div>
  );
};

export default Layout;
