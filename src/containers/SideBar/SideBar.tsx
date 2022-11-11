import React, { FC } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, CalendarOutlined, UnorderedListOutlined, FileSyncOutlined, SettingOutlined } from '@ant-design/icons';
interface IProps {
  children: React.ReactNode | React.ReactChild
}

const MenuAside:FC<IProps> = ({children}) => {
  return (
    <Menu theme="light" mode="inline">
      <Menu.Item key='1' icon={<HomeOutlined />}>
        <span>Курсы</span>
      </Menu.Item>
      <Menu.Item key='2' icon={<CalendarOutlined />}>
        <span>Календарь</span>
      </Menu.Item>
      <hr style={
        { height: 1, margin: '10px 0', backgroundColor: '#f0f0f0' }
      }/>
      <Menu.Item key='3' icon={<UnorderedListOutlined />} >
        <span>Список Заданий</span>
      </Menu.Item>
      { children }
      <hr style={
        {height: 1, margin: '10px 0', backgroundColor: '#f0f0f0'}
      }/>
      <Menu.Item key='4' icon={<FileSyncOutlined />}>
        <span>Архив заданий</span>
      </Menu.Item>
      <Menu.Item key='5' icon={<SettingOutlined />}>
        <span>Настройки</span>
      </Menu.Item>
    </Menu> 
  );
};

export default MenuAside;