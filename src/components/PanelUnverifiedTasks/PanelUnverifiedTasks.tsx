import React, { FC, useState } from 'react';
import { Collapse, Avatar, List, Button, Dropdown, type MenuProps } from 'antd';
import { DownOutlined, MoreOutlined, SnippetsOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import s from '../PanelUnverifiedTasks/PanelUnverifiedTasks.module.scss';

const { Panel } = Collapse;

interface IArrList {
  title?: string;
  description?: string;
  stateFirst?: string;
  stateSecond?: string;
  stateThird?: string;
  color?: string;
}

interface IProps {
  arr: IArrList[];
  heading: string;
}

const items: MenuProps['items'] = [
  {
    label: 'Отметить как проверенное',
    key: '0',
  },
];

const PanelItem: FC<IProps> = ({ arr, heading }) => {
  const [listState, setListState] = useState<boolean>(true);

  return (
    <Collapse
      accordion
      ghost
      expandIcon={({ isActive }) => <DownOutlined className={s.icon} rotate={isActive ? 180 : 0} />}
      expandIconPosition='end'
    >
      <Panel
        collapsible={arr.length <= 0 && 'disabled'}
        className={s.accordion}
        header={heading}
        key='1'
        extra={<span className={s.label}>{arr.length}</span>}
      >
        <List
          itemLayout='horizontal'
          dataSource={listState ? arr.slice(0, 4) : arr}
          renderItem={(item) => (
            <List.Item className={s.item}>
              <List.Item.Meta
                avatar={
                  <Avatar style={{ backgroundColor: item.color }} icon={<SnippetsOutlined />} />
                }
                title={item.title}
                description={item.description}
              />
              <span style={{ width: '100px', textAlign: 'center' }}>
                <span>0</span>
                <br />
                <span>{item.stateFirst}</span>
              </span>
              <span style={{ width: '100px', textAlign: 'center' }}>
                <span>0</span>
                <br />
                {item.stateSecond}
              </span>
              <span style={{ width: '200px', textAlign: 'center' }}>
                <span>0</span>
                <br />
                {item.stateThird}
              </span>
              <Dropdown menu={{ items: items }} trigger={['click']}>
                <Link to='#' onClick={(e) => e.preventDefault()}>
                  <MoreOutlined style={{ color: '#000' }} />
                </Link>
              </Dropdown>
            </List.Item>
          )}
        />
        {listState ? (
          <Button
            type='primary'
            size='small'
            style={{ display: 'block', margin: '16px auto' }}
            onClick={() => {
              setListState(false);
            }}
          >
            Показать все
          </Button>
        ) : null}
      </Panel>
    </Collapse>
  );
};

export default PanelItem;
