import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device, brands }) => {
    const history = useNavigate();

    const brandName = brands.map(brand => {return brand.id === device.brandId ? brand.name : null});

    return (
        <Col md={3} className='mt-3' onClick={() => history(`${DEVICE_ROUTE}/${device.id}`)}>
            <Card style={{ width: 150, cursor: 'pointer' }} border='grey' className='p-2'>
                <Image width={140} height={140} src={`${process.env.REACT_APP_API_URL}/${device.img}`} />
                <div className='text-black-50 d-flex justify-content-between align-items-center mt-3'>
                    <div>{brandName}</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image width={20} height={20} src={star} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
