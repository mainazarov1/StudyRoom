import { PlusOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Tooltip } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const items: MenuProps['items'] = [
    {
        label: 'Присоединиться',
        key: '0',
    },
    {
        label: 'Создать курс',
        key: '1',
    }
];

const RightComponent = () => {
    return (
        <div>
            <Tooltip zIndex={1} title="Создать новый курс или присоединиться к существующему">
                <Dropdown className='plus' menu={{ items: items }} trigger={['click']}>
                    <Link to="#" onClick={(e) => e.preventDefault()}>
                        <PlusOutlined className='icon plus' />
                    </Link>
                </Dropdown>
            </Tooltip>
        </div>
    );
};

export default RightComponent;