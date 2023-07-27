import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import { createType } from '../../http/deviceAPI';

const CreateType = ({ show, onHide }) => {
    const [value, setValue] = useState('');

    const addType = () => {
        createType({ name: value }).then(data => {
            setValue('');
            onHide();
        });
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control type="text" placeholder="Input name of type..." onChange={ e => setValue(e.target.value) } />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-dark' onClick={onHide}>Close</Button>
                <Button variant='primary' onClick={addType}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
