import React, {useState, useEffect} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import axios from 'axios';
import { Row, Card, Col, Grid} from 'react-bootstrap';
import '../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

function Shop({deckInfo, setDeckInfo,
              trucksInfo, setTrucksInfo,
              wheelsInfo, setWheelsInfo,
              cart, setCart
              }) {

    const {item} = useParams();

    // const getInfo = (info) => {
    //     axios.get....
    //    tempArr.push({ imageURL: res.data.hits[i].webformatURL, ...info[i})
    // }

    useEffect(() => {
        axios
            .get(`https://pixabay.com/api/?key=20405286-b8c84b9b689264f8e5a805d46&q=${item}&image_type=photo&`)
            .then((res) => {
                let tempArr = []
                let tempArr2 = []
                let tempArr3 = []
                for (let i = 0; i < 6; i++) {
                    // tempArr.push(res.data.hits[i])
                    tempArr.push({imageURL: res.data.hits[i].webformatURL, ...deckInfo[i]})
                    tempArr2.push({imageURL: res.data.hits[i].webformatURL, ...wheelsInfo[i]})
                    tempArr3.push({imageURL: res.data.hits[i].webformatURL, ...trucksInfo[i]})
                    // console.log(res.data.hits)
                    // console.log(deckInfo[i])

                }
                setDeckInfo(tempArr)
                setWheelsInfo(tempArr2)
                setTrucksInfo(tempArr3)
                //your tempArr now has the data from pixabay and firebase, into one array of objects
                //watch for deckInfo change
                // console.log(tempArr)
            })

    }, [])


    // console.log(deckInfo)

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



// <>
//     <Row>
//         {state.map((el, index) => (
//             <Card.Img key={index} src={el.webformatURL} style={{width: '15%'}}/>
//         ))}
//         {(() => {
//             switch (item) {
//                 case 'skateboard':
//                     return (
//                         deckInfo.map((el, index) => (
//                             <>
//                                 <Card.Body className="shop-items">
//                                     <Card.Text key={index}>{el.description.toUpperCase()}</Card.Text>
//                                     <Card.Subtitle>Price : ${el.price}</Card.Subtitle>
//                                     <FontAwesomeIcon cursor='pointer'
//                                                      onMouseOver={background}
//                                                      onMouseOut={backgroundOut}
//                                                      onClick={() => addToCart(el)}
//                                                      icon={faCartPlus}/>
//                                 </Card.Body>
//                             </>
//
//                         ))
//                     )
//                 case 'skateboard-wheels':
//                     return (
//                         wheelsInfo.map((el, index) => (
//                             <Card.Body className="shop-items">
//                                 <Card.Text key={index}>{el.description.toUpperCase()}</Card.Text>
//                                 <Card.Subtitle>Price : ${el.price}</Card.Subtitle>
//                                 <FontAwesomeIcon cursor='pointer'
//                                                  onMouseOver={background}
//                                                  onMouseOut={backgroundOut}
//                                                  onClick={() => addToCart(el)}
//                                                  icon={faCartPlus}/>
//                             </Card.Body>
//                         ))
//                     )
//                 case 'skaters':
//                     return (
//                         trucksInfo.map((el, index) => (
//                             <Card.Body className="shop-items">
//                                 <Card.Text key={index}>{el.description.toUpperCase()}</Card.Text>
//                                 <Card.Subtitle>Price : ${el.price}</Card.Subtitle>
//                                 <FontAwesomeIcon cursor='pointer'
//                                                  onMouseOver={background}
//                                                  onMouseOut={backgroundOut}
//                                                  onClick={() => addToCart(el)}
//                                                  icon={faCartPlus}/>
//                             </Card.Body>
//                         ))
//                     )
//             }
//         })()}
//
//     </Row>
// </>