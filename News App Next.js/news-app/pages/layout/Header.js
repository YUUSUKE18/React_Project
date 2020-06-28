import Head from "next/head";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  <div
    style={{
      marginBottom: "5%",
    }}
  >
    <Head>
      <title>News App in English</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar>
      <Navbar.Brand href="/">News App</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <NavDropdown title="news" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/business">Business</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/technology">Technology</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>;
};

export default Header;
