import React, {useState} from 'react';
import {Card, Row, Col, Modal, Button, InputGroup, FormControl} from 'react-bootstrap'
import {addRider, deleteRider, updateRider} from "../../library/library";

function Rider({rider, show, setShow}) {
    const [newRider, setNewRider] = useState([]);
    const [riderInfo, setRiderInfo] = useState([]);
    const [count, setCount] = useState(0)


    function handleClose () {
        setShow(false);
    }
    function handleShow () {
        setShow(true);
    }

    function handleInput(e) {
        let tempObj = {...newRider}
        tempObj[e.target.name] = e.target.value
        setNewRider(tempObj)
    };


    function handleAdd() {
        setShow(false)
        setCount(count+1)
        console.log(count)
        addRider("Riders", newRider, count)
    }

    function handleDelete(id){
        setCount(count-1)
        deleteRider("Riders", id)
    }

    function handleInputUpdate(e) {
        let tempObj2 = {...riderInfo}
        tempObj2[e.target.name] = e.target.value
        setRiderInfo(tempObj2)
    }

    function handleUpdate(id) {
        setShow(false)
        updateRider("Riders", id)
    }

    return (
        <>
            <h2 className='header'>The Origin Riders</h2>

            <Button variant="primary" onClick={handleShow} className='mb-2'>
                Add Rider
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Body>
                    <InputGroup>
                        <FormControl
                            onChange={handleInput}
                            placeholder="description"
                            name="description"
                        >
                        </FormControl>
                        <FormControl
                            onChange={handleInput}
                            placeholder="name"
                            name="name"
                        >
                        </FormControl>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
            <div>
                <div className='aboutus-text'>

                        <>
                            <Row>
                                {rider.map((el,index) => (
                                <Col key={index} md={'3'}>
                                    <Card className='mb-2'>
                                        <Card.Header>{el.name.toUpperCase()}</Card.Header>
                                        <Card.Text>{el.description}</Card.Text>
                                        <Card.Subtitle className='plus-minus-rider'/>
                                            <Button onClick={() => handleDelete(el.id)}>Delete Rider</Button>
                                            {/*<Button variant="primary" onClick={handleShow}>*/}
                                            {/*    Update Info*/}
                                            {/*</Button>*/}
                                            {/*<Modal show={show} onHide={handleClose} animation={false}>*/}
                                            {/*    <Modal.Body>*/}
                                            {/*        <InputGroup>*/}
                                            {/*            <FormControl*/}
                                            {/*                onChange={handleInputUpdate}*/}
                                            {/*                placeholder="new description"*/}
                                            {/*                name="description"*/}
                                            {/*            >*/}
                                            {/*            </FormControl>*/}
                                            {/*            <FormControl*/}
                                            {/*                onChange={handleInputUpdate}*/}
                                            {/*                placeholder="new name"*/}
                                            {/*                name="name"*/}
                                            {/*            >*/}
                                            {/*            </FormControl>*/}
                                            {/*        </InputGroup>*/}
                                            {/*    </Modal.Body>*/}
                                            {/*    <Modal.Footer>*/}
                                            {/*        <Button variant="secondary" onClick={handleClose}>*/}
                                            {/*            Close*/}
                                            {/*        </Button>*/}
                                            {/*        <Button variant="primary" onClick={() => {handleUpdate()}}>*/}
                                            {/*            Update*/}
                                            {/*        </Button>*/}
                                            {/*    </Modal.Footer>*/}
                                            {/*</Modal>*/}
                                    </Card>
                                </Col>
                                        ))}
                            </Row>
                        </>
                </div>
            </div>
        </>
    );
}

export default Rider;