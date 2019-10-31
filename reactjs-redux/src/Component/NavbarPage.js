import React, { Component } from "react";
import {
  Navbar,
  NavDropdown,
  FormControl,
  Form,
  Nav,
  Button,
  Badge
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        cartcount: 0
      };
    }
  }

  render() {
    const { cartdata, logout } = this.props;

    const styles = {
      logoutbtn: {
        marginLeft: "5px"
      },
      icon: {
        display: "block",
        left: "10px",
        top: "11px",
        width: "38px",
        height: "25px",
        margin: "7px"
      },
      cartcount: {
        position: "absolute",
        color: "white",
        marginLeft: "25px",
        cursor: "pointer",
        opacity: 1
      }
    };
    return (
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown1 />
            <Nav.Link>
              <Link to="/about" className="link1">
                About Us
              </Link>
            </Nav.Link>
          </Nav>
          <Link to="/CartPage">
            <Badge variant="danger" style={styles.cartcount}>
              {cartdata.length}
            </Badge>
            <img
              style={styles.icon}
              src={require("../images/shopping-cart.png")}
            />
          </Link>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
            <Button
              variant="outline-light"
              style={styles.logoutbtn}
              onClick={event => logout(localStorage.getItem("email"), event)}
            >
              Logout
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const NavDropdown1 = () => {
  return (
    <NavDropdown title="Categories" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Beds</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Sofasets</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Recliners</NavDropdown.Item>
    </NavDropdown>
  );
};
