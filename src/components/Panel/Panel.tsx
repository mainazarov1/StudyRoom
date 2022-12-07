import React, { FC, useState } from 'react';
import { Collapse, Avatar, List, Button } from 'antd';
import { DownOutlined, SnippetsOutlined } from '@ant-design/icons';

import s from './PanelItem.module.scss';

const { Panel } = Collapse;

interface IArrList {
  title?: string;
  description?: string;
  state?: string;
  color?: string;
}

interface IProps {
  arr: IArrList[];
  heading: string;
}

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
              <span style={{ width: 200, textAlign: 'center' }}>
                <span>hello</span>
                <br />
                {item.state}
              </span>
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
