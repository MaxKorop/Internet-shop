import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Dropdown, Form, Row, Col } from 'react-bootstrap';
import { Context } from '../../index';

const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    }

    const removeSpec = (number) => {
        setInfo(info.filter(i => i.number !== number))
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
                    Add new device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className='d-flex justify-content-around'>
                        <Dropdown className='m-2'>
                            <Dropdown.Toggle>Select type</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map(type => {
                                    return <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='m-2'>
                            <Dropdown.Toggle>Select brand</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map(brand => {
                                    return <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Form.Control
                        className='mt-3'
                        placeholder="Input name of device..."
                        type='text'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder="Input price of device..."
                        type='number'
                    />
                    <Form.Control
                        className='mt-3'
                        type='file'
                    />
                    <hr />
                    <Button
                        variant='outline'
                        onClick={addInfo}
                    >
                        Add new spec
                    </Button>
                    {info.map(i => {
                        return <Row className='mt-3' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Input name of spec'
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Input description of spec'
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeSpec(i.number)}
                                    variant='outline-danger'
                                >
                                    Remove spec
                                </Button>
                            </Col>
                        </Row>
                    })}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-dark' onClick={onHide}>Close</Button>
                <Button variant='primary' onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;