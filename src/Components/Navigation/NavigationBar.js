import React from 'react';
import {Nav, Navbar, Row, Col} from 'react-bootstrap';
import '../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

function NavigationBar({cart}) {

    const totalCountArr = cart.map((el) => {
        return (el.quantity)
    })

    const totalCount = totalCountArr.reduce((acc,current) => (acc+current), 0);

    const cartAll = cart.map((el) => {
        return (el.price)*(el.quantity)
    });

    const cartTotal = cartAll.reduce((acc, current) => (acc + current),0);

    return (
        <>
            <Row className='header'>
                <Col md={'4'}>
                    <LinkContainer to='/country-language'>
                        <Nav.Link className='footer-link'>USA/EN</Nav.Link>
                    </LinkContainer>
                </Col>
                <Col md={'4'}>
                    <LinkContainer to='/'>
                        <Nav.Link className='footer-link'>The Origins Skateboard</Nav.Link>
                    </LinkContainer>
                </Col>
                <Col md={'4'}>
                    <LinkContainer to='/signin'>
                        <Nav.Link className='footer-link'>SIGN IN</Nav.Link>
                    </LinkContainer>
                </Col>
            </Row>
            <Row>
                <Col md={'2'}>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/skate%20logo%2Fskatelogo.png?alt=media&token=3c0c0f6f-a48d-42ed-9837-6efd0f8569f9'/>
                        </Navbar.Brand>
                    </LinkContainer>
                </Col>
                <Col md={'8'}>
                    <Navbar className="center-navbar"  expand="sm">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <NavLink className='center-navbar-links' to="/shop/skateboard">Decks</NavLink>
                                <NavLink className='center-navbar-links' to="/shop/skateboard-wheels">Wheels</NavLink>
                                <NavLink className='center-navbar-links' to="/shop/skaters">Trucks</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
                <Col md={'2'}>
                    <NavLink
                        to="/shopping-cart"
                        className="float right">
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        <div>{totalCount}</div>
                        <div>${cartTotal}</div>
                    </NavLink>
                </Col>
            </Row>
        </>
    );
}

export default NavigationBar;