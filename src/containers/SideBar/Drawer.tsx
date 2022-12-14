import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import {  Drawer, Space } from 'antd';

import { IList } from '../../core/types/ListType';

import MenuAside from './MenuAside';


const Drawers: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);
  const [ListCurs, setListCurs] = useState<IList[]>([
    {name: 'B', id: '6',  link: '/feed', descirption: 'react dev', title: 'Front-end', color: '#f56a00'},
    {name: 'B', id: '7',  link: '/feed', descirption: 'react dev', title: 'Back-end', color: '#f56a00'},
    {name: 'B', id: '8',  link: '/feed', descirption: 'Django', title: 'Data-scinse', color: '#f56a00'},
    {name: 'B', id: '9',  link: '/feed', descirption: 'react dev', title: 'Front-end', color: '#f56a00'},
    {name: 'B', id: '10', link: '/feed', descirption: 'react dev', title:'Front-end',  color: '#f56a00'},
  ]);

  const [ListTeacherCurs, setListTeacherCurs] = useState<IList[]>([
    {name: 'B', id: '12', link: '/feed',descirption: 'react dev', title: 'Front-end', color: '#f56a00'},
    {name: 'B', id: '13', link: '/feed',descirption: 'react dev', title: 'Back-end', color: '#f56a00'},
    {name: 'B', id: '14', link: '/feed',descirption: 'Django', title: 'Data-scinse', color: '#f56a00'},
    {name: 'B', id: '15', link: '/feed',descirption: 'react dev', title: 'Front-end', color: '#f56a00'},
    {name: 'B', id: '16', link: '/feed',descirption: 'react dev', title:'Front-end',  color: '#f56a00'},
  ]);

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
      >
        <MenuAside listStudenCurs={ListCurs} ListTeacherCurs={ListTeacherCurs} onClose={onClose} />
      </Drawer>
    </>
  );
};

export default Drawers;