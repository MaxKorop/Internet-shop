import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Col, Card } from 'react-bootstrap';

const BrandBar = observer(() => {
    const { device } = useContext(Context);
    return (
        <Col className='d-flex flex-wrap'>
            {device.brands.map(brand => {
                return <Card
                    style={{ cursor: 'pointer' }}
                    border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
                    onClick={() => { device.setSelectedBrand(brand) }}
                    key={brand.id}
                    className="p-3"
                >
                    {brand.name}
                </Card>
            })}
        </Col>
    );
});

export default BrandBar;
