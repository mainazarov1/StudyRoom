import { FC } from 'react';
import {
  MoreOutlined,
  LinkOutlined,
  CopyOutlined,
  RollbackOutlined,
  CloseSquareOutlined,
} from '@ant-design/icons';
import { Dropdown, Button, Space, type MenuProps } from 'antd';

import ModalCode from '../FeedModals/ModalCode/ModalCode';
import AssignedTask from '../AssignedTasks/AssignedTask';
import ReferToCourse from '../ReferToCourse/ReferToCourse';

import s from './FeedContent.module.scss';

const items: MenuProps['items'] = [
  {
    label: 'Кпировать ссылку',
    key: '0',
    icon: <LinkOutlined style={{ fontSize: 20, marginRight: 20 }} />,
  },
  {
    label: 'Копировать код курса',
    key: '1',
    icon: <CopyOutlined style={{ fontSize: 20, marginRight: 20 }} />,
  },
  {
    label: 'Сбросить код курса',
    key: '3',
    icon: <RollbackOutlined style={{ fontSize: 20, marginRight: 20 }} />,
  },
  {
    label: 'Отключить',
    key: '4',
    icon: <CloseSquareOutlined style={{ fontSize: 20, marginRight: 20 }} />,
  },
];

const FeedContent: FC = () => {
  const isTeacher = true;

  return (
    <div className={s.feed_content}>
      <div className={s.feed_left}>
        {isTeacher && (
          <div className={s.course_code}>
            <h2 className={s.block_heading}>Код курса</h2>
            <Dropdown menu={{ items }}>
              <Space size='large'>
                <MoreOutlined className={s.drop_icon} />
              </Space>
            </Dropdown>
            <span className={s.code}>tq7kdvd</span>
            <ModalCode />
          </div>
        )}
        <div className={s.upcoming_tasks}>
          <h2 className={s.block_heading}>Предстояшие</h2>
          <p>У вас нет заданий, которые нужно сдать на следующей неделе.</p>
          <Button type='link' className={s.btn}>
            Просмотреть все
          </Button>
        </div>
      </div>
      <div className={s.feed_rigth}>
        <ReferToCourse />
        <AssignedTask />
      </div>
    </div>
  );
};

export default FeedContent;
