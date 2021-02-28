import React from 'react';
import {Carousel} from 'react-bootstrap';

function Carousel2({picture}) {

    return (
            <div className='container-fluid' >
                <Carousel>
                    <Carousel.Item style={{'height':"300px"}} >
                        <img style={{'height':"300px"}}
                             className="d-block w-100"
                             // src={picture[0]}
                            src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/carousel%2Fcarousel3.jpg?alt=media&token=bec805f2-8b16-40d4-bb4b-a41277ff26bc'                        />
                        <Carousel.Caption>
                            <h3 className='carousel-text'>Chair Gap Sardinia</h3>
                        </Carousel.Caption>
                    </Carousel.Item  >
                    <Carousel.Item style={{'height':"300px"}}>
                        <img style={{'height':"300px"}}
                             className="d-block w-100"
                             src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/carousel%2Fcarousel2.jpg?alt=media&token=29dd58cd-59ba-4e3d-9dfa-d72dc31e0ec2'    />
                        <Carousel.Caption>
                            <h3 className='carousel-text'>The Origins Team in Venice Beach</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height':"300px"}}>
                        <img style={{'height':"300px"}}
                             className="d-block w-100"
                             src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/carousel%2Fcarousel1.jpg?alt=media&token=f279d008-a650-4229-af9a-ee613ffe9d22'    />
                        <Carousel.Caption>
                            <h3 className='carousel-text'>Origins New Pro: Tristan Calleja!</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

    )
}


export default Carousel2;


