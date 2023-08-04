


import React, { useContext, useEffect, useState } from 'react';
import { fetchCart } from '../http/basketAPI';
import { Context } from '../index';
import { Col, Container, Row } from 'react-bootstrap';
import DeviceItem from '../components/DeviceItem';
import { observer } from 'mobx-react-lite';
import Pages from '../components/Pages';

const Basket = () => {

    const { user, device } = useContext(Context);

    const [devices, setDevices] = useState([]);
    const brands = device.brands.map(brand => brand);

    useEffect(() => {
        fetchCart(user.basket, 3, 3).then(data => setDevices(data.rows));
    }, []);

    return (
        <Container>
            <Col md={9}>
                <Row className='d-flex'>
                    {devices.map(device => {
                        return <DeviceItem key={device.id} device={device} brands={brands} />
                    })}
                </Row>
                <Pages />
            </Col>
        </Container>
    );
};

export default Basket;
