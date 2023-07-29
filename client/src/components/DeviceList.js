import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Row } from 'react-bootstrap';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
    const { device } = useContext(Context);

    const devices = device.devices.map(device => device);
    const brands = device.brands.map(brand => brand);

    return (
        <Row className='d-flex'>
            {devices.map(device => {
                return <DeviceItem key={device.id} device={ device } brands={ brands } />
            })}
        </Row>
    );
});

export default DeviceList;
