import React, { useContext, useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Dropdown, Form, Row, Col } from 'react-bootstrap';
import { Context } from '../../index';
import { createDevice } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';
import { fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI';

const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context);
    const [info, setInfo] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    }

    const removeSpec = (number) => {
        setInfo(info.filter(i => i.number !== number));
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i));
    }

    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', device.selectedBrand.id);
        formData.append('typeId', device.selectedType.id);
        formData.append('info', JSON.stringify(info));
        createDevice(formData).then(data => onHide())
    }

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
        fetchDevices().then(data => device.setDevices(data.rows));
    }, []);

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
                            <Dropdown.Toggle>{device.selectedType.name || 'Select type'}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map(type => {
                                    return <Dropdown.Item
                                        onClick={() => device.setSelectedType(type)}
                                        key={type.id}
                                    >
                                        {type.name}
                                    </Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='m-2'>
                            <Dropdown.Toggle>{device.selectedBrand.name || 'Select brand'}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map(brand => {
                                    return <Dropdown.Item
                                        onClick={() => device.setSelectedBrand(brand)}
                                        key={brand.id}
                                    >
                                        {brand.name}
                                    </Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Form.Control
                        value={name}
                        className='mt-3'
                        placeholder="Input name of device..."
                        type='text'
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        value={price}
                        className='mt-3'
                        placeholder="Input price of device..."
                        type='number'
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <Form.Control
                        className='mt-3'
                        type='file'
                        onChange={selectFile}
                    />
                    <hr />
                    <Button
                        variant='outline-dark'
                        onClick={addInfo}
                    >
                        Add new spec
                    </Button>
                    {info.map(i => {
                        return <Row className='mt-3' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    placeholder='Input title of spec'
                                    onChange={e => changeInfo('title', e.target.value, i.number)}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    placeholder='Input description of spec'
                                    onChange={e => changeInfo('description', e.target.value, i.number)}
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
                <Button variant='primary' onClick={addDevice}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;