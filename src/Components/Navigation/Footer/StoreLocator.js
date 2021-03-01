import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import {Row, Col} from 'react-bootstrap';
import '../../../index.css'

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 40.7146389,
    lng: -73.9938329
};

function StoreLocator(props) {
    return (
        <>
            <Row>
                <Col md={'6'}>
                    <img
                        width={'100%'}
                        src='https://firebasestorage.googleapis.com/v0/b/riders-5712c.appspot.com/o/shopImg.jpg?alt=media&token=65cb2153-1a66-42b0-a244-a61621a1faec'/>
                    <div className='shop-items'>
                        <p>Brooklyn</p>
                        <p>282 Scholes St, Brooklyn NY, 11206</p>
                        <p>917-909-0566</p>
                    </div>
                </Col>
                <Col md={'6'}>
                    <LoadScript
                        googleMapsApiKey='AIzaSyAxjKhT7vOxHLe2sP1TEpniWUukVOrfszw'
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                        >
                            <></>
                        </GoogleMap>
                    </LoadScript>
                </Col>

            </Row>

        </>

    )
}



export default StoreLocator;