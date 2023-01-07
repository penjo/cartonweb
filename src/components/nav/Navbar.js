import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import HomePage from "../../views/home/HomePage";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Cart from "./Cart";
import { CartIcon } from '../../icon';
import Logo from "../../assets/images/logo";
// import "./stylesheets/NavBar.css";

function NavBar(){
    return (
      <div className="nav">
        <div id="bar">
          <Navbar variant="pills">
            <Navbar.Brand as={Link} to="/">
            <Logo/>
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">
                Trang chủ
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Liên Hệ
              </Nav.Link>
              <Nav.Link as={NavLink} to="/product">
                Sản Phẩm
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                Về chúng tôi
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cart">
                <CartIcon/>
              </Nav.Link>
            </Nav>
          </Navbar>
        </div>
      </div>
    );
  }

export default NavBar;