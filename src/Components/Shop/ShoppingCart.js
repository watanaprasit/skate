import React from 'react';
import { Button, Modal, Tooltip, OverlayTrigger, Table} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import '../../index.css';
import { LinkContainer } from 'react-router-bootstrap';

function ShoppingCart({cart,setCart, show, setShow}) {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Stripe Payment API
        </Tooltip>
    );

    const cartAll = cart.map((el) => {
        return (el.price)*(el.quantity)
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

    function addCartItem(el) {
        let tempObj = el
        el.quantity+=1
        let index = cart.indexOf(el)
        let temp = [...cart]
        temp[index] = tempObj
        setCart(temp)
    }

    function deleteCartItem(el) {
        if (el.quantity >= 2) {
            let tempObj = el
            el.quantity-=1
            let index = cart.indexOf(el)
            let temp = [...cart]
            temp[index] = tempObj
            setCart(temp)
        }
    }

    function deleteAll(){
        setCart([]);
    }

    return (
        <>
            <h1 className='header'>Your Origins Cart</h1>
               <Table striped bordered hover variant="dark">
                   <thead>
                        <tr>
                            <th>Items</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Sub-Total</th>
                            <th>
                                <FontAwesomeIcon
                                    cursor='pointer'
                                    onClick={() => deleteAll()}
                                    icon={faTrashAlt}/>
                            </th>
                        </tr>
                   </thead>
                    {cart.map((el,index) => (
                        <tbody>
                            <tr key={index}>
                                <td>{el.description}</td>
                                <td>
                                    {el.quantity}
                                    {'   '}
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        cursor='pointer'
                                        onClick={() => addCartItem(el)}
                                    /> {'   '}
                                    <FontAwesomeIcon
                                        icon={faMinus}
                                        cursor='pointer'
                                        onClick={() => deleteCartItem(el)}
                                    />
                                </td>
                                <td>{el.price}</td>
                                <td>{(el.price)*(el.quantity)}</td>
                                <td>
                                    <FontAwesomeIcon
                                        cursor='pointer'
                                        onClick={() => deleteFromCart(el)}
                                        icon={faTrashAlt} />
                                </td>
                            </tr>
                        </tbody>
                    ))}
               </Table>
            <div>

                <Button onClick={handleShow}>Checkout</Button>{'   '}
                <LinkContainer to='./shop/skaters'>
                    <Button>Continue Shopping</Button>
                </LinkContainer>

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


