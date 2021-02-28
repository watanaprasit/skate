import React from 'react';
import {Nav, Row, Col, Card} from 'react-bootstrap';

function Middle(props) {
    return (
        <div>
            <Row className='middle-container'>
                <Col md={'6'}>
                    <Row >
                        <Col md={'4'}>
                            <div>
                                <Card.Body>
                                    <a href="/shop/skateboard">
                                        <Card.Img src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/decks%2Fdeck1.jpg?alt=media&token=c67c0fa9-41ed-4cde-8ede-5ddd691b7b61'/>
                                        <Card.Title className='middle-container-items-title'>Toy Machine Deck</Card.Title>
                                    </a>
                                </Card.Body>
                            </div>
                        </Col>
                        <Col md={'4'}>
                            <Card.Body>
                                <a href="/shop/skateboard-wheels">
                                    <Card.Img src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/wheels%2Fwheels1.jpg?alt=media&token=99e400d9-1f63-45c9-ae6d-3c6d7b448d33'/>
                                    <Card.Title className='middle-container-items-title'>Chocolate Wheels</Card.Title>
                                </a>
                            </Card.Body>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={'4'}>
                            <Card.Body>
                                <a href="/shop/skaters">
                                    <Card.Img src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/trucks%2Ftrucks1.jpg?alt=media&token=41e0a47e-83e6-4d4a-90dc-d4b9f38a210d'/>
                                    <Card.Title className='middle-container-items-title'>Tensor Trucks</Card.Title>
                                </a>
                            </Card.Body>
                        </Col>
                        <Col md={'4'}>
                            <Card.Body>
                                <a href="/shop/others">
                                    <Card.Img src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/others%2Fothers1.jpg?alt=media&token=4fa4bac9-b7f5-4e49-8e51-a788346c4b53'/>
                                    <Card.Title className='middle-container-items-title'>Bones Brigade Bearings</Card.Title>
                                </a>
                            </Card.Body>
                        </Col>
                    </Row>

                </Col>
                <Col md={'6'}>
                    <Card.Img src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/lyon25.gif?alt=media&token=e740d51f-c673-4a79-9867-e1e44b25e81e'/>
                </Col>
            </Row>
        </div>
    );
}


export default Middle;