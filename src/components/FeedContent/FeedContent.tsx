import React, { FC, useState } from 'react';
import { UserOutlined, MoreOutlined, LinkOutlined, CopyOutlined, RetweetOutlined, RollbackOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Button, Space } from 'antd';
import type { MenuProps } from 'antd';
import s from './FeedContent.module.scss';
import ModalCode from '../FeedModals/ModalCode/ModalCode';
import ModalReuse from '../FeedModals/ModalReuse/ModalReuse';
import AssignedTask from '../AssignedTasks/AssignedTask';

const items: MenuProps['items'] = [
  {
    label: 'Кпировать ссылку',
    key: '0',
    icon: <LinkOutlined style={{fontSize: 20, marginRight: 20}}/>,
  },
  {
    label: 'Копировать код курса',
    key: '1',
    icon: <CopyOutlined style={{fontSize: 20, marginRight: 20}}/>
  },
  {
    label: 'Сбросить код курса',
    key: '3',
    icon: <RollbackOutlined style={{fontSize: 20, marginRight: 20}}/>
  },
  {
    label: 'Отключить',
    key: '4',
    icon: <CloseSquareOutlined style={{fontSize: 20, marginRight: 20}}/>
  }
];

const FeedContent:FC = () => {
  const [isTeacher, setISTeacher] = useState(false);
  return (
    <div className={s.feed_contebt} >
      <div className={s.feed_left} >
        {
          !isTeacher
          &&
          <div className={s.course_code} >
            <h2>
              <b>
                Код курса
              </b>
            </h2>
            <Dropdown menu={{ items }}>
              <Space size='large'>
                <MoreOutlined 
                  className={s.drop_icon}
                />
              </Space>
            </Dropdown>
            <span className={s.course_cod}>tq7kdvd</span>
            <ModalCode />
          </div>
        }
        <div className={s.upcoming_tasks}>
          <h2>
            <b>
              Предстояшие
            </b>
          </h2>
          <p>
            У вас нет заданий, которые нужно сдать на следующей неделе.
          </p>
          <Button 
            type="link" 
          >
            Просмотреть все
          </Button>
        </div>
      </div>
      <div className={s.feed_rigth} >
        <div className={s.referring_course}>
          <div>
            <Avatar style={{ backgroundColor: '#a0c3ff',marginRight: 16}} icon={<UserOutlined style={{color: '#4374e0'}} />} />
            <span>Обратиться к курсу</span>
          </div>
          <ModalReuse title={"StudyRoom"} />
        </div>
        <AssignedTask />
      </div>
    </div>
  );
};

export default FeedContent;