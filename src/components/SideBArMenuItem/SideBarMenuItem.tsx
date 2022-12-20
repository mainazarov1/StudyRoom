import { FC } from 'react';
import { Space, Menu, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';

import { IList } from '../../core/types/ListType';

interface IProps {
  item: IList,
  onClose: () => void;
}

const SideBarMenuItem:FC<IProps> = ({ item, onClose }) => {
  return (
    <Menu.Item onClick={onClose} eventKey={item.id} style={{lineHeight: 0.2, padding: '0 16px 0 24px' }} >
      <NavLink to={item.link}>
        <Space>
          <Avatar
            style={{ backgroundColor: `${item.color}`, verticalAlign: 'middle' }}
            size='small'
            gap={1}
          >
            {item.name}
          </Avatar>
          <Space direction='vertical' size="small" >
            <span >{item.title}</span>
            <span style={{ fontSize: 10 }}>
              {item.descirption}
            </span>
          </Space>
        </Space>
      </NavLink>
    </Menu.Item>
  );
};

export default SideBarMenuItem;
