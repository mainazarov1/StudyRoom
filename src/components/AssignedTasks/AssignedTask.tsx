import React, { FC, useState } from 'react';
import { Avatar, Divider, Dropdown, List } from 'antd';
import { MoreOutlined, SnippetsOutlined } from '@ant-design/icons';

import s from './style.module.scss';

import type { MenuProps } from 'antd';

const data = [
  {
    title: 'Google ClassRoom 1',
    date: '10 November',
  },
  {
    title: 'Google ClassRoom 2',
    date: '10 November',
  },
  {
    title: 'Google ClassRoom 3',
    date: '10 November',
  },
  {
    title: 'Google ClassRoom 4',
    date: '10 November',
  },
];

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <span>Копировать ссылку</span>,
  },
  {
    type: 'divider',
  },
  {
    key: '3',
    label: <span>Пожаловаться</span>,
  },
];

const AssignedTask: FC = () => {
  return (
    <>
      <List
        itemLayout='horizontal'
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            style={{
              padding: '16px 24px',
              border: '0.0625rem solid #dadce0',
              borderRadius: 12,
              marginTop: 24,
            }}
          >
            <List.Item.Meta
              avatar={<Avatar style={{ backgroundColor: '#1967d2' }} icon={<SnippetsOutlined />} />}
              title={<a href='https://ant.design'>{item.title}</a>}
              description={item.date}
            />
            <Dropdown menu={{ items }} placement='bottomLeft' arrow={{ pointAtCenter: true }}>
              <MoreOutlined className={s.icon} />
            </Dropdown>
          </List.Item>
        )}
      />
    </>
  );
};

export default AssignedTask;
