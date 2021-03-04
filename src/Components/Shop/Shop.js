import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Row, Card, Col} from 'react-bootstrap';
import '../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

function Shop({deckInfo, setDeckInfo,
              trucksInfo, setTrucksInfo,
              wheelsInfo, setWheelsInfo,
              cart, setCart
              }) {

    const {item} = useParams();

    useEffect(() => {
        axios
            .get(`https://pixabay.com/api/?key=20405286-b8c84b9b689264f8e5a805d46&q=${item}&image_type=photo&`)
            .then((res) => {
                let tempArr = []
                let tempArr2 = []
                let tempArr3 = []
                for (let i = 0; i < 6; i++) {
                    tempArr.push({imageURL: res.data.hits[i].webformatURL, ...deckInfo[i]})
                    tempArr2.push({imageURL: res.data.hits[i].webformatURL, ...wheelsInfo[i]})
                    tempArr3.push({imageURL: res.data.hits[i].webformatURL, ...trucksInfo[i]})
                }
                setDeckInfo(tempArr)
                setWheelsInfo(tempArr2)
                setTrucksInfo(tempArr3)
            })

    }, [])


    function addToCart(el) {
        if (!cart.includes(el)) {
            el.quantity = 1
            setCart(prevState => ([...prevState, el]))
        } else {
            let tempObj = el
            el.quantity+=1
            let index = cart.indexOf(el)
            let temp = [...cart]
            temp[index] = tempObj
            setCart(temp)
        }
    }



    function background(e) {
        e.target.style.background = 'green';
    }

    function backgroundOut(e) {
        e.target.style.background = 'white';
    }

    return (
        <>
            {(() => {
                switch (item) {
                    case 'skateboard':
                        return(
                                <Row>
                                    {deckInfo.map((el, index) => (
                                        <Col md={'3'}>
                                            <Card key={index}>
                                                <Card.Img src={el.imageURL}/>
                                                <Card.Body className="shop-items">
                                                    <Card.Text key={index}>{el.description}</Card.Text>
                                                    <Card.Subtitle>Price : ${el.price}</Card.Subtitle>
                                                    <FontAwesomeIcon cursor='pointer'
                                                                     onMouseOver={background}
                                                                     onMouseOut={backgroundOut}
                                                                     onClick={() => addToCart(el)}
                                                                     icon={faCartPlus}/>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>

                            )

                    case 'skateboard-wheels':
                        return (
                                <Row>
                                    {wheelsInfo.map((el, index) => (
                                    <Col md={'3'}>
                                        <Card key={index}>
                                            <Card.Img src={el.imageURL}/>
                                            <Card.Body className="shop-items">
                                                <Card.Text key={index}>{el.description}</Card.Text>
                                                <Card.Subtitle>Price : ${el.price}</Card.Subtitle>
                                                <FontAwesomeIcon cursor='pointer'
                                                                 onMouseOver={background}
                                                                 onMouseOut={backgroundOut}
                                                                 onClick={() => addToCart(el)}
                                                                 icon={faCartPlus}/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                        ))}
                                </Row>
                        )
                    case 'skaters':
                        return (
                                <Row>
                                    {trucksInfo.map((el, index) => (
                                    <Col md={'3'}>
                                        <Card key={index}>
                                            <Card.Img src={el.imageURL}/>
                                            <Card.Body className="shop-items">
                                                <Card.Text key={index}>{el.description}</Card.Text>
                                                <Card.Subtitle>Price : ${el.price}</Card.Subtitle>
                                                <FontAwesomeIcon cursor='pointer'
                                                                 onMouseOver={background}
                                                                 onMouseOut={backgroundOut}
                                                                 onClick={() => addToCart(el)}
                                                                 icon={faCartPlus}/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                        ))}
                                </Row>
                        )
                }
            })()}

        </>

    );
}


export default Shop;


