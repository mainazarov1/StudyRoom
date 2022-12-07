import { FC } from 'react';
import { Space, Menu, Avatar } from 'antd';

import { IList } from '../../core/types/ListType';

interface IProps {
  item: IList;
}

const SideBarMenuItem: FC<IProps> = ({ item }) => {
  return (
    <Menu.Item eventKey={item.id} style={{ lineHeight: 0.3, padding: '0 16px 0 24px' }}>
      <Space>
        <Avatar
          style={{ backgroundColor: `${item.color}`, verticalAlign: 'middle' }}
          size='small'
          gap={1}
        >
          {item.name}
        </Avatar>
        <Space direction='vertical' size='small'>
          <span>{item.title}</span>
          <span style={{ fontSize: 10 }}>{item.descirption}</span>
        </Space>
      </Space>
    </Menu.Item>
  );
};

export default SideBarMenuItem;
