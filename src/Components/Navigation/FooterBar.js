import React from 'react';
import {Nav, Row, Col} from 'react-bootstrap';
import '../../index.css'

function FooterBar(props) {
    return (
        <>
            <Row className='header'>
                <Col md={'3'}>
                    <Nav.Link className='footer-link' href="/about-us">About Us</Nav.Link>
                </Col>
                <Col md={'3'}>
                    <Nav.Link className='footer-link' href="/riders">Riders</Nav.Link>
                </Col>
                <Col md={'3'}>
                    <Nav.Link className='footer-link' href="/store-locator">Store Locator</Nav.Link>
                </Col>
                <Col md={'3'}>
                    <Nav.Link className='footer-link' href="/contact-us">Contact Us</Nav.Link>
                </Col>
            </Row>
        </>

    );
}

export default FooterBar;


