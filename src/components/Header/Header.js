import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";

import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);

  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <b>VAN PHU TIN</b>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/users" className="nav-link">
              User
            </NavLink>
            <NavLink to="/admins" className="nav-link">
              Admin
            </NavLink>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#user">User</Nav.Link>
            <Nav.Link href="#admin">Admin</Nav.Link> */}
          </Nav>
          <nav>
            {isAuthenticated === false ? (
              <>
                <button
                  type="button"
                  className="btn-login"
                  onClick={() => {
                    handlelogin();
                  }}
                >
                  Log in
                </button>
                <button
                  type="button"
                  className="btn-signup"
                  onClick={() => {
                    handleRegister();
                  }}
                >
                  Sign up
                </button>
              </>
            ) : (
              <NavDropdown title="Setting" id="basic-nav-dropdown">
                <NavDropdown.Item>Log out</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </NavDropdown>
            )}
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
