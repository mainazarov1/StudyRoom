import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import {  Drawer, Space, Menu, Avatar } from 'antd';
import MenuAside from './SideBar';

interface IList {
  id: number,
  name: string,
  title: string,
  color: string,
}

const Drawers: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);
  const [ListCurs, setListCurs] = useState<IList[]>([
    {name: "B", id: 6, title: "Front-end", color: '#f56a00'},
    {name: "B", id: 7, title: "Front-end", color: '#f56a00'},
    {name: "B", id: 8, title: "Front-end", color: '#f56a00'},
    {name: "B", id: 9, title: "Front-end", color: '#f56a00'},
    {name: "B", id: 10, title: "Front-end", color: '#f56a00'},
  ])

  return (
    <>
      <Space>
        <MenuOutlined onClick={showDrawer} />
      </Space>
      <Drawer
        title="StudyRoom"
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        key='1'
      >
        <MenuAside>
          {
            ListCurs.map(item => (
              <Menu.Item key={item.id} >
                <Space>
                  <Avatar style={{ backgroundColor: `${item.color}`, verticalAlign: 'middle' }} size="small" gap={1}>
                    {item.name}
                  </Avatar>
                  <span>{item.title}</span>
                </Space>
              </Menu.Item>
            ))
          }
        </MenuAside>
      </Drawer>
    </>
  );
};

export default Drawers;