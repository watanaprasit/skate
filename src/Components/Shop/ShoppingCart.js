import React from 'react';
import {Row, Col, Button, ButtonGroup, Modal, Card, Tooltip, OverlayTrigger} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import '../../index.css';


function ShoppingCart({cart,setCart, show, setShow}) {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Stripe Payment API
        </Tooltip>
    );

    const cartAll = cart.map((el) => {
        return (el.price)
    });

    const cartTotal = cartAll.reduce((acc, current) => (acc + current),0);

    const cartTax = cartTotal*0.10;

    const shipping = 20;

    const grandTotal = cartTotal+cartTax+shipping;

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
                <Row className='shop-items' key={index}>
                    <Card.Body>
                        <Card.Text>{el.description.toUpperCase()}</Card.Text>
                        <Card.Subtitle>{el.price}</Card.Subtitle>
                        <FontAwesomeIcon
                            cursor='pointer'
                            onClick={() => deleteFromCart(el)}
                            icon={faTrashAlt}
                        />
                    </Card.Body>
                </Row>
                )
            )}
            <div>
                <ButtonGroup size="lg" className="mb-2">
                    <Button onClick={handleShow}>Checkout</Button>
                </ButtonGroup>
                <Modal className='shop-items' show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Your Origins Total</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Sub Total : ${cartTotal}</p>
                        <p>Tax : ${cartTax}</p>
                        <p>Shipping : $20</p>
                        <p>Grand Total : ${grandTotal}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Back
                        </Button>
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Button variant="primary">Confirm</Button>
                        </OverlayTrigger>
                    </Modal.Footer>
                </Modal>
            </div>
        </>

    );
}

export default ShoppingCart;