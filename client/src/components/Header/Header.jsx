import React, { useState, useEffect } from "react"
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
} from "reactstrap"
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
    const [active, setActive] = useState(false)

    useEffect(() => {
        const scrollEffect = window.addEventListener("scroll", event => {
            const height = window.pageYOffset
            height > 50 ? setActive(true) : setActive(false)
        })

        return () => window.removeEventListener("scroll", scrollEffect)
    })

    const noRefCheck = () => {

    }

    return (
        <header className={active ? "header fixed-top" : "header"}>
            <Navbar expand="lg" light container color="light">
                <NavbarBrand href="/">TiMa</NavbarBrand>
                <NavbarToggler onClick={noRefCheck} />
                <Collapse navbar>
                    <Nav navbar className="ms-auto me-auto">
                        <NavItem>
                            <NavLink tag={Link} to="/" className="py-4 px-0 me-5">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/shop" className="py-4 px-0 me-5">Shop</NavLink>
                        </NavItem>
                        <UncontrolledDropdown inNavbar nav>
                            <DropdownToggle nav className="py-4 px-0 me-5">Pages</DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>
                                    <NavLink tag={Link} to="/login">Login</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink tag={Link} to="/register">Register</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink tag={Link} to="/contact" className="py-4 px-0">Contact</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem>
                            <a href="/" className="nav-btn btn-outline-secondary btn">Buy Now</a>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default Header;
