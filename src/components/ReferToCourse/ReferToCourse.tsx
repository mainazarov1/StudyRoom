import { DownOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Checkbox, Dropdown, Menu, Space } from 'antd';
import { FC, useState } from 'react';

import ModalReuse from '../FeedModals/ModalReuse/ModalReuse';
import { Tiptap } from '../TextArea/TextAreaComponent';

import s from './ReferToCourse.module.scss';

import type { MenuProps } from 'antd';

const ReferToCourse: FC = () => {
  const [isMessages, setIsMessages] = useState<boolean>(true);
  const [courseDropOpen, setCourseDropOpen] = useState<boolean>(false);
  const [studentDropOpen, setStudentDropOpen] = useState<boolean>(false);
  const [messageValue, setMessages] = useState('');
  const handleChange = () => setIsMessages(!isMessages);
  const { name, title, descirption } = {
    name: 'Beksultan Bakytbekov',
    title: 'Discovery Studio',
    descirption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  };

  const onMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
  };

  const items = [
    {
      key: '1',
      label: 'Опубликовать',
    },
    {
      key: '2',
      label: 'Добавить в расписание',
    },
    {
      key: '3',
      label: 'Сохранить черновик',
    },
  ];

  const substringText = (text: string, num: number) => {
    let newText = text.length >= num ? text.substring(0, num) : text;
    return newText;
  };
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Checkbox>
              <Space align='center'>
                <Avatar style={{ backgroundColor: '#1890ff' }}>{substringText(name, 1)}</Avatar>
                <div>
                  <div>{substringText(title, 20)}</div>
                  <p style={{ opacity: '0.5' }}>{substringText(descirption, 20)}</p>
                </div>
              </Space>
            </Checkbox>
          ),
        },
        {
          key: '2',
          label: (
            <Checkbox>
              <Space align='center'>
                <Avatar style={{ backgroundColor: '#1890ff' }}>{substringText(name, 1)}</Avatar>
                <div>
                  <div>{substringText(title, 20)}</div>
                  <p style={{ opacity: '0.5' }}>{substringText(descirption, 20)}</p>
                </div>
              </Space>
            </Checkbox>
          ),
        },
      ]}
    />
  );

  const menuStudent = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Checkbox>
              <Space align='center'>
                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<TeamOutlined />} />
                <div>Все учащиеся</div>
              </Space>
            </Checkbox>
          ),
        },
        {
          key: '2',
          label: (
            <Checkbox>
              <Space align='center'>
                <Avatar
                  style={{ backgroundColor: '#a0c3ff' }}
                  icon={<UserOutlined style={{ color: '#1890ff' }} />}
                />
                <div>{substringText(name, 15)}</div>
              </Space>
            </Checkbox>
          ),
        },
        {
          key: '3',
          label: (
            <Checkbox>
              <Space align='center'>
                <Avatar
                  style={{ backgroundColor: '#a0c3ff' }}
                  icon={<UserOutlined style={{ color: '#1890ff' }} />}
                />
                <div>{substringText(name, 15)}</div>
              </Space>
            </Checkbox>
          ),
        },
      ]}
    />
  );

  return (
    <>
      {isMessages ? (
        <div className={s.referring_course}>
          <div className={s.main_input} onClick={handleChange}>
            <Avatar
              src='https://lh3.googleusercontent.com/a/default-user=s40-c'
              style={{ backgroundColor: '#a0c3ff', marginRight: 16 }}
            />
            <span className={s.text}>Обратиться к курсу</span>
          </div>
          <ModalReuse />
        </div>
      ) : (
        <div className={s.referring_course_messedge}>
          <h2 className={s.referring_course_heading}>Для кого</h2>
          <form className={s.form}>
            <div className={s.drop_block}>
              <Dropdown
                overlay={menu}
                trigger={['click']}
                open={courseDropOpen}
                onOpenChange={() => setCourseDropOpen(!courseDropOpen)}
                className={s.course_list}
              >
                <Space>
                  StudyRoom
                  <DownOutlined />
                </Space>
              </Dropdown>
              <Dropdown
                overlay={menuStudent}
                trigger={['click']}
                open={studentDropOpen}
                onOpenChange={() => setStudentDropOpen(!studentDropOpen)}
                className={s.course_list}
              >
                <Space>
                  Все учащиеся
                  <DownOutlined />
                </Space>
              </Dropdown>
            </div>
            <Tiptap setStateShow={setMessages} />
            <div className={s.btns}>
              <Button size='large' type='text' onClick={handleChange}>
                Отмена
              </Button>
              <Dropdown.Button
                size='large'
                onClick={handleChange}
                type='primary'
                menu={{ items, onClick: onMenuClick }}
              >
                Публиковать
              </Dropdown.Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ReferToCourse;
