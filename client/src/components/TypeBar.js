import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer(() => {
    const { device } = useContext(Context);
    return (
        <ListGroup>
            {device.types.map(type => {
                return <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    active={type.id === device.selectedType.id}
                    onClick={() => { device.setSelectedType(type) }}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            })}
            <ListGroup.Item
                style={{ cursor: 'pointer' }}
                active={Object.entries(device.selectedType).length === 0}
                onClick={() => { device.setSelectedType({}) }}
            >
                All types
            </ListGroup.Item>
        </ListGroup>
    );
});

export default TypeBar;
