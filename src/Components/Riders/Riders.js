import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import '../../index.css';
import {LinkContainer} from 'react-router-bootstrap';

function Riders() {
    return (
            <>
                <h3 className='header'>The Origins Team Riders</h3>
                <LinkContainer to='./riders'>
                    <Row className='shop-items'>
                        <Col md={'3'}>
                            <Card.Img src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/RidersImages%2Fskate1.jpeg?alt=media&token=3514a8b5-5f55-44b4-a814-53a8850cd342'/>
                            <Card.Text>SUHA</Card.Text>
                            <Card.Subtitle>TEAM RIDER SINCE 2013</Card.Subtitle>
                        </Col>
                        <Col md={'3'}>
                            <Card.Img src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/RidersImages%2Fskate2.jpeg?alt=media&token=d7ab2caa-f328-4f2d-9b56-62cc93ef390f'/>
                            <Card.Text>EUGENE</Card.Text>
                            <Card.Subtitle>TEAM RIDER SINCE 2017</Card.Subtitle>
                        </Col>
                        <Col md={'3'}>
                            <Card.Img src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/RidersImages%2Fskate3.jpeg?alt=media&token=59435ee1-ee67-40cd-951e-21400a8457a7'/>
                            <Card.Text>ISSAC</Card.Text>
                            <Card.Subtitle>TEAM RIDER SINCE 2012</Card.Subtitle>
                        </Col>
                        <Col md={'3'}>
                            <Card.Img src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/RidersImages%2Fskater4.jpeg?alt=media&token=f1f4edb5-2ad2-4fae-8816-d6fc39efa4af'/>
                            <Card.Text>HEE SEUNG</Card.Text>
                            <Card.Subtitle>TEAM RIDER SINCE 2015</Card.Subtitle>
                        </Col>
                        <Col md={'3'}>
                            <Card.Img src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/RidersImages%2Fskater5.jpeg?alt=media&token=acda7080-b1b1-41dc-8f10-b7abfacc2c75'/>
                            <Card.Text>LOGAN</Card.Text>
                            <Card.Subtitle>TEAM RIDER SINCE 2010</Card.Subtitle>
                        </Col>
                        <Col md={'3'}>
                            <Card.Img src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/RidersImages%2Fskater6.jpeg?alt=media&token=8ac998d2-877b-4137-9dd0-288e122e945a'/>
                            <Card.Text>TRISTAN</Card.Text>
                            <Card.Subtitle>TEAM RIDER SINCE 2011</Card.Subtitle>
                        </Col>
                        <Col md={'3'}>
                            <Card.Img src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/RidersImages%2Fskater7.jpeg?alt=media&token=9f65cd75-f929-4318-8098-65f2a120ca3b'/>
                            <Card.Text>EBERE</Card.Text>
                            <Card.Subtitle>TEAM RIDER SINCE 2009</Card.Subtitle>
                        </Col>
                        <Col md={'2'}>
                            <Card.Img src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/RidersImages%2Fskater8.jpg?alt=media&token=cb4dac79-8afd-4996-aa76-92acad19b316'/>
                            <Card.Text>WATANA</Card.Text>
                            <Card.Subtitle>TEAM RIDER SINCE 2006</Card.Subtitle>
                        </Col>
                    </Row>
                </LinkContainer>
            </>
    );
}

export default Riders;