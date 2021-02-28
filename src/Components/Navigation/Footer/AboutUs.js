import React from 'react';
import {Row, Col, Card} from 'react-bootstrap'

function AboutUs(props) {
    return (
        <>
            <div className='header'>About Us</div>
            <Row>
                <Col className='aboutus-text' md={'8'}>
                    <p>The Origins Skateboards started in Singapore in 2006.</p>
                    <p>We are skater owned and run.</p>
                    <p>The Origins team are not supposed to be ‘the best’,</p>
                    <p>instead each rider has something about them which really captures the essence of skateboarding to me.</p>
                    <p>We take pride in making the highest quality products,</p>
                    <p>but selling them at a fair price.</p>
                    <p>THE ORIGINS FOR LIFE.</p>
                    <p>Daewon Song</p>
                    <p>Founder of The Origins Skateboards</p>
                </Col>
                <Col md={'4'}>
                    <img src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/aboutusimg.jpeg?alt=media&token=ede16b87-6eaa-4bc1-978b-2a265503c163'/>
                    <p>Truck Gap by Daewon Song in SoCal</p>
                </Col>
            </Row>


        </>
    );
}

export default AboutUs;