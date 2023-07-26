import { observer } from 'mobx-react-lite';
import React from 'react';
import { Context } from '../index';

const DeviceList = observer(() => {
    const { device } = useContext(Context);
    return (
        <div>
            
        </div>
    );
});

export default DeviceList;
