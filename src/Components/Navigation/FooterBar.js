import React from 'react';
import {Nav, Row, Col} from 'react-bootstrap';
import '../../index.css';
import {LinkContainer} from 'react-router-bootstrap';

function FooterBar() {
    return (
        <>
            <Row className='header'>
                <Col md={'3'}>
                    <LinkContainer to='./about-us'>
                        <Nav.Link className='footer-link'>About Us</Nav.Link>
                    </LinkContainer>
                </Col>
                <Col md={'3'}>
                    <LinkContainer to='/riders'>
                        <Nav.Link className='footer-link' href="/riders">Riders</Nav.Link>
                    </LinkContainer>
                </Col>
                <Col md={'3'}>
                    <LinkContainer to='/store-locator'>
                        <Nav.Link className='footer-link'>Store Locator</Nav.Link>
                    </LinkContainer>
                </Col>
                <Col md={'3'}>
                    <LinkContainer to='/contact-us'>
                        <Nav.Link className='footer-link'>Contact Us</Nav.Link>
                    </LinkContainer>
                </Col>
            </Row>
        </>

    );
}

export default FooterBar;


