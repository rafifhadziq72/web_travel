import React, { useEffect, useState } from 'react'
import { Container, Row, Navbar, Offcanvas, Nav, NavDropdown, } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "../header/header.css";

const Header = () => {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    }

useEffect(()=>{
    window.addEventListener("scroll", isSticky);
    return ()=> {
        window.removeEventListener("scroll", isSticky)
    }
})

//sticky header
const isSticky=(e)=>{
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky') :
    header.classList.remove('is-sticky') 
}


    return (
        <header className='header-section'>
            <Container>
                
                    <Navbar expand='lg' className=" p-0">

                        {/* logo section */}
                        <Navbar.Brand >
                            <NavLink className='nav-link' to='/'>weekendmonks</NavLink>
                        </Navbar.Brand>
                        {/* end logo section */}


                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-lg`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                            placement="start"
                            show={open}
                        >
                            {/* mobile logo section */}
                            <Offcanvas.Header >
                                <h1 className='logo'>weekendmonks</h1>
                                <span className='navbar-toggler ms-auto' onClick={toggleMenu}>
                                    <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
                                </span>
                            </Offcanvas.Header>
                            {/* end mobile logo section */}

                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavLink className='nav-link' to="/">Home</NavLink>
                                    <NavLink className='nav-link' to="/">ABOUT US</NavLink>
                                    <NavLink className='nav-link' to="/">TOURS</NavLink>

                                    <NavDropdown
                                        title="DESTINATION"
                                        id={`offcanvasNavbarDropdown-expand-lg`}
                                    >
                                        <NavDropdown.Item href="#action3">SPAIN TOURS</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">ITALY TOURS</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">FRANCE TOURS</NavDropdown.Item>

                                    </NavDropdown>
                                    {/* <NavLink className='nav-link' to="/">GALERY</NavLink> */}
                                    <NavLink className='nav-link' to="/">CONTACT </NavLink>

                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <div className='ms-md-4 ms-2'>
                            <NavLink className='primaryBtn d-none d-sm-inline-block'>
                                Book Now
                            </NavLink>
                            <li className='d-inline-block d-lg-none ms-3 toggle_btn'>
                                <i className="bi bi-list" onClick={toggleMenu}></i>
                            </li>
                        </div>
                    </Navbar>
                
            </Container>
        </header>
    )
}

export default Header;
