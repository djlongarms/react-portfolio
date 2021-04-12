import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap'
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand>
        <Link className="navLink" exact to="/">
          About Nick
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              <Link className="navLink" to="/portfolio">
                Portfolio
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link className="navLink" to="/contact">
                Contact Me
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText>Nick Palmer's Portfolio</NavbarText>
      </Collapse>
    </Navbar>
  )
}

export default Header
