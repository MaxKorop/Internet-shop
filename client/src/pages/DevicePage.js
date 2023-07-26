import React from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
    const device = { id: 1, name: "iPhone 14 Pro", price: 50000, rating: 5, img: "https://www.ipeople.in.ua/files/products/%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-09-09%20%D0%B2%2018.20.07.800x600.png" };
    const description = [
        {id: 1, title: "RAM", description: "5 Gb"},
        {id: 1, title: "Camera", description: "12 Mp"},
        {id: 1, title: "CPU", description: "Pentium 3"},
        {id: 1, title: "Core's", description: "2"},
        {id: 1, title: "Battery", description: "3000"},
    ]
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{ background: `url(${bigStar}) no-repeat center center`, width: 245, height:245, backgroundSize: 'cover', fontSize: 64 }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{ width: 300, height: 300, fontSize:32, border: '5px solid lightgrey' }}
                    >
                        <h3>From: {device.price} ₴</h3>
                        <Button variant="outline-dark">
                            Add to cart
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column ml-4 mt-5'>
                <h1>Specifications</h1>
                {description.map((info, index) => {
                    return <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgrey' : 'transparent', padding: 10 }}>
                        {info.title}: {info.description}
                    </Row>
                })}
            </Row>
        </Container>
    );
};

export default DevicePage;
