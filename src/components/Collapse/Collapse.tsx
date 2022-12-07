import { Dropdown, Row, Typography } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import React, { FC, ReactNode } from 'react';

import s from './Collapse.module.scss';

import type { MenuProps } from 'antd';

const isTeacher = true;

const headerDropdownStudentItems: MenuProps['items'] = [
  { label: 'Копировать ссылку', key: 'item-1' }, // remember to pass the key prop
];

const headerDropdownSeacherItems: MenuProps['items'] = [
  { label: 'Переименовать', key: 'item-1' },
  { label: 'Удалить', key: 'item-2' },
  { label: 'Копировать ссылку', key: 'item-3' },
  { type: 'divider' },
  { label: 'Переместить вверх', key: 'item-4' },
  { label: 'Переместить вниз', key: 'item-5' },
];

interface CollapseProps {
  children: ReactNode;
  isTeacher: boolean;
  tag: string;
}

const CollapseComponent: FC<CollapseProps> = ({ children, isTeacher, tag }) => {
  return (
    <div className={s.collapse__wrap}>
      <Row className={s.collapse__title__wrap} justify={'space-between'} align={'middle'}>
        <Typography.Title className={s.collapse__title} level={2}>
          <Typography.Link href='#'>{tag}</Typography.Link>
        </Typography.Title>
        <Dropdown
          dropdownRender={(menus) => <div>{menus}</div>}
          placement={'bottomRight'}
          trigger={['click']}
          menu={{ items: isTeacher ? headerDropdownSeacherItems : headerDropdownStudentItems }}
        >
          <EllipsisOutlined
            className={s.collapse__elipsis}
            style={{ fontSize: '30px', color: 'rgb(25,103,210)' }}
            color='green'
          />
        </Dropdown>
      </Row>
      {children}
    </div>
  );
};

export default CollapseComponent;
