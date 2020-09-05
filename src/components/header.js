import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const Header = ({ siteTitle }) => (
  <Navbar bg="light" variant="light" expand="lg">
    <Navbar.Brand as={Link} href="/">
      {siteTitle}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/about">
            プロフィール
          </Nav.Link>
        </NavItem>
        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/jigyo">
            SNS
          </Nav.Link>
        </NavItem>
        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/information">
            最新記事
          </Nav.Link>
        </NavItem>
        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/contact">
            お問い合わせ
          </Nav.Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
