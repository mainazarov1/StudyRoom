import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Dropdown, Tooltip, Typography, Avatar, Menu, Divider, Space, Button } from 'antd';

import type { MenuProps } from 'antd';

import './styles/header.scss';
import { Link, NavLink } from 'react-router-dom';
import Drawers from '../SideBar/Drawer';

const { Header: HeaderA, Sider } = Layout;
const { Title, Text } = Typography;



const itemsMenu: MenuProps['items'] = [
  {
    key: '1',
    label: 'Текст',
  },
  {
    key: '2',
    label: 'Текст',
  },
  {
    key: '3',
    label: 'Текст',
  }
];

interface IHeaderProps {
    children: JSX.Element,
}

export const Header: React.FC<IHeaderProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div className='header'>
      <Layout className='layout-wrapper'>
        <Layout className='site-layout'>
          <div className='header-wrapper'>
            <div className='header-wrapper-left'>
              <div className='item left-item'>
                <Tooltip zIndex={1} title="Главное меню">
                  <Drawers />
                </Tooltip>
              </div>
            </div>
            <div className='header-logo-plus'>
              {children}
            </div>
            <div className='header-wrapper-right'>
              <div className='item right-item'>
                <Dropdown
                  overlayStyle={{ width: "327px" }}
                  menu={{ items: itemsMenu }}
                  trigger={['click']}
                  dropdownRender={menu => (
                    <div className="dropdown-content">
                      <div className='header-inner-avatar'>
                        <Space style={{ padding: 8 }}>
                          <Avatar size={80} src="https://joeschmoe.io/api/v1/random" icon={<UserOutlined />} />
                        </Space>
                        <Title style={{ marginBottom: '0' }} level={5}>Фамилия Имя</Title>
                        <Text type="secondary"> Адрес почты</Text>
                      </div>
                        <Divider style={{ margin: 0 }} />
                          {menu}
                        <Divider style={{ margin: 0 }} />
                        <Space style={{ padding: 8 }}>
                          <Button className='header-inner-avatar-exit' type="default">Выйти</Button>
                        </Space>
                    </div>
                  )}
                >
                <Link to="#" onClick={e => e.preventDefault()}>
                  <Space>
                    <Tooltip zIndex={1} title="Аккаунт">
                      <Avatar src="https://joeschmoe.io/api/v1/random" icon={<UserOutlined />} />
                    </Tooltip>
                  </Space>
                </Link>
                </Dropdown>
                </div>
              </div>
            </div>
        </Layout >
      </Layout >
    </div >
  );
};
