import React from 'react';
import {Form, Button} from 'react-bootstrap';

function ContactUs() {
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Please let us know what you think</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button as="input" type="submit" value="Submit" />
        </Form>
    );
}

export default ContactUs;