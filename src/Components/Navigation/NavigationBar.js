import React from 'react';
import {Nav, Navbar, NavDropdown, Button, Row, Col} from 'react-bootstrap';
import '../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom';



function NavigationBar({cart}) {

    return (
        <>
            <Row className='header'>
                <Col md={'4'}>
                    <Nav.Link className='footer-link' href="/country-language">USA/EN</Nav.Link>
                </Col>
                <Col md={'4'}>
                    <Nav.Link className='footer-link' href="/">The Origins Skateboard</Nav.Link>
                </Col>
                <Col md={'4'}>
                    <Nav.Link className='footer-link' href="/account">SIGN IN</Nav.Link>
                </Col>
            </Row>
            <Row>
                <Col md={'2'}>
                    <Navbar.Brand href="/">
                            <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/skate%20logo%2Fskatelogo.png?alt=media&token=3c0c0f6f-a48d-42ed-9837-6efd0f8569f9'/>
                    </Navbar.Brand>
                </Col>

                <Col md={'8'}>
                    <Navbar className="center-navbar" bg="light" expand="sm">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className='center-navbar-links'>
                                <NavLink to="/shop/skateboard">Decks</NavLink>
                                <NavLink to="/shop/skateboard-wheels">Wheels</NavLink>
                                <NavLink to="/shop/skaters">Trucks</NavLink>
                                <NavDropdown title="Others" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/shop/others/flatrails">FlatRails</NavDropdown.Item>
                                    <NavDropdown.Item href="/shop/others/wax">Wax</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>

                <Col md={'2'}>
                    <NavLink
                        to="/shopping-cart"
                        className="float right">
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        <div>{cart.length}</div>
                    </NavLink>

                </Col>
            </Row>


        </>


    );
}

export default NavigationBar;