import React from 'react';
import {Row, Col, Button, ButtonGroup, Modal, InputGroup, FormControl} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import '../../index.css';


function ShoppingCart({cart,setCart, show, setShow}) {

    function handleClose () {
        setShow(false);
    }
    function handleShow () {
        setShow(true);
    }

    function deleteFromCart(item) {
        let tempCart = [...cart]
        let cartIndex = tempCart.indexOf(item)
        cartIndex > -1 ? tempCart.splice(cartIndex, 1) : tempCart=[...cart]
        setCart([...tempCart])
    }

    return (
        <>
            <h1 className='header'>Your Origins Cart</h1>
            {cart.map((el,index) => (
                <Row key={index}>
                    <Col>
                        {el.description}
                        {el.price}
                        <FontAwesomeIcon
                            cursor='pointer'
                            // onClick={() => deleteFromCart(el)}
                            icon={faTrashAlt}
                        />
                        <Row>
                            {/*input onlick to remove item from cart*/}
                            {/*are prices in an array? tabulate to get checkout price*/}
                        </Row>
                    </Col>
                </Row>
                )
            )}
            <div>
                <ButtonGroup size="lg" className="mb-2">
                    <Button>Update</Button>
                    <Button onClick={handleShow}>Checkout</Button>
                </ButtonGroup>
                <Modal show={show} onHide={handleClose} animation={false}>\
                    <Modal.Header closeButton>
                        <Modal.Title>Checkout List</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>List of cart items & prices</p>
                        <p>Total price + tax</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Back
                        </Button>
                        <Button variant="primary">
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>

    );
}

export default ShoppingCart;