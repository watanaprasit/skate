import React, {useState, useEffect} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import axios from 'axios';
import { Row, Card} from 'react-bootstrap';
import '../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

function Shop({deckInfo, trucksInfo, wheelsInfo, setCart}) {
    const {item} = useParams();
    const [state, setState] = useState([]);

    useEffect(() => {
        axios
            .get(`https://pixabay.com/api/?key=20405286-b8c84b9b689264f8e5a805d46&q=${item}&image_type=photo&`)
            .then((res) => {
                let tempArr = []
                for (let i = 0; i < 6; i++) {
                    tempArr.push(res.data.hits[i])
                }
                setState(tempArr)
            })

    }, [])

    function addToCart(el) {
        setCart(prevState => ([...prevState, el]))
    }

    function background(e) {
        e.target.style.background = 'green';
    }

    function backgroundOut(e) {
        e.target.style.background = 'white';
    }

    return (
        <>
            <Row>
                {state.map((el, index) => (
                    <Card.Img key={index} src={el.webformatURL} style={{width: '15%'}}/>
                ))}
                {(() => {
                    switch (item) {
                        case 'skateboard':
                            return (
                                deckInfo.map((el, index) => (
                                    <>
                                        <Card.Body className="shop-items">
                                            <Card.Text key={index}>{el.description.toUpperCase()}</Card.Text>
                                            <Card.Subtitle>Price : ${el.price}</Card.Subtitle>
                                            <FontAwesomeIcon cursor='pointer'
                                                             onMouseOver={background}
                                                             onMouseOut={backgroundOut}
                                                             onClick={() => addToCart(el)}
                                                             icon={faCartPlus}/>
                                        </Card.Body>
                                    </>

                                ))
                            )
                        case 'skateboard-wheels':
                            return (
                                wheelsInfo.map((el, index) => (
                                    <Card.Body className="shop-items">
                                        <Card.Text key={index}>{el.description.toUpperCase()}</Card.Text>
                                        <Card.Subtitle>Price : ${el.price}</Card.Subtitle>
                                        <FontAwesomeIcon cursor='pointer'
                                                         onMouseOver={background}
                                                         onMouseOut={backgroundOut}
                                                         onClick={() => addToCart(el)}
                                                         icon={faCartPlus}/>
                                    </Card.Body>
                                ))
                            )
                        case 'skaters':
                            return (
                                trucksInfo.map((el, index) => (
                                    <Card.Body className="shop-items">
                                        <Card.Text key={index}>{el.description.toUpperCase()}</Card.Text>
                                        <Card.Subtitle>Price : ${el.price}</Card.Subtitle>
                                        <FontAwesomeIcon cursor='pointer'
                                                         onMouseOver={background}
                                                         onMouseOut={backgroundOut}
                                                         onClick={() => addToCart(el)}
                                                         icon={faCartPlus}/>
                                    </Card.Body>
                                ))
                            )
                    }
                })()}

            </Row>
        </>

    );
}


export default Shop;

