// eslint-disable-next-line import/named
import { Dropdown, Layout, MenuProps, Row, Space, Typography } from 'antd';
import { CalendarOutlined, PlusOutlined, ContactsOutlined, FolderOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

import { ButtonApp } from '../../components/ButtonApp/ButtonApp';
// eslint-disable-next-line import/order
import CollapseComponent from '../../components/Collapse/Collapse';

// eslint-disable-next-line import/order
import { tasksStore } from '../../core/store/tasks';
// import { TaskApi } from '../../core/types/types';

import TaskItem from './TaskItem';
const { Content } = Layout;
import s from './Tasks.module.scss';
import SiderComponent from './components/Sider/Sider';


// const userProfileSvg = (
//   <svg focusable='false' fill='inherit' width='18' height='18' viewBox='0 0 24 24'>
//     <path d='M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.55 0c.14-.15.33-.25.55-.25s.41.1.55.25c.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5zM19 5v10.79C16.52 14.37 13.23 14 12 14s-4.52.37-7 1.79V5h14zM5 19v-.77C6.74 16.66 10.32 16 12 16s5.26.66 7 2.23V19H5z'></path>
//     <path d='M12 13c1.94 0 3.5-1.56 3.5-3.5S13.94 6 12 6 8.5 7.56 8.5 9.5 10.06 13 12 13zm0-5c.83 0 1.5.67 1.5 1.5S12.83 11 12 11s-1.5-.67-1.5-1.5S11.17 8 12 8z'></path>
//   </svg>
// );


const dataWithTags = [
  {
    id: '1',
    tag: 'Back End тестовые задания',
    title: 'Соkfhsfhashjshjkfhjhklhjksdhjkdfhdfhdь',
    points: 50,
    deadLine: 'Срок сдачи: 22 июл. 2023 г',
    timePublication: 'Опубликовано 10:19',
    htmlContent: 'Какой-то хтмл контент',
    isTeacher: false,
    countComments: 2,
  },
  {
    id: '2',
    tag: 'Front End тестовые задания',
    title: 'awdadadsdada13131231231231 сеть',
    points: 50,
    deadLine: 'Срок сдачи: 22 июл. 2023 г',
    timePublication: 'Опубликовано 10:19',
    htmlContent: 'Какой-то хтмл контент',
    isTeacher: true,
    countComments: 2,
  },
];

const dataWithoutTags = [
  {
    id: '1',
    title:
      'Какие бывают парные тегиКакие бывают парные тегиКакие бывают парные тегиКакие бывают парные тегиКакие бывают парные тегиКакие бывают парные тегиКакие бывают парные тегиКакие бывают парные теги',
    points: 50,
    deadLine: 'Срок сдачи: 22 июл. 2023 г',
    timePublication: 'Опубликовано 10:19',
    htmlContent: 'Какой-то хтмл контент',
    isTeacher: true,
    countComments: 2,
  },
  {
    id: '2',
    title: 'Соaoudhaldhawwhdluadhlkawhеть',
    points: 50,
    deadLine: 'Срок сдачи: 22 июл. 2023 г',
    timePublication: 'Опубликовано 10:19',
    htmlContent: 'Какой-/* dhaldjaskdjhajlidjaksda */',
    isTeacher: true,
    countComments: 2,
  },
];

const createItems: MenuProps['items'] = [
  {
    label: (
      <span className={s.task__createOption}>
        <i></i> Задание
      </span>
    ),
    key: 'item-1',
  },
  { type: 'divider' },
  { label: <span className={s.task__createOption}>Тема</span>, key: 'item-2' },
];

const TasksComponent = () => {

  useEffect(() => {
    tasksStore.fetchTasks();
  }, []);

  const isTeacher = true;

  return (
    <Layout className={s.task__layout}>
      <SiderComponent />
      <Content style={{ width: 'calc(100 % - 2 * 1.5rem)' }} className={s.main}>
        <Row justify={'space-between'} align={'middle'} style={{ marginBottom: '1rem' }}>
          {isTeacher ? (
            <Dropdown
              overlayStyle={{
                boxShadow:
                  '0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%)',
                maxHeight: '269px',
                minWidth: '112px',
                maxWidth: 'calc(100vw - 32px)',
                overflow: 'hidden',
                overflowY: 'auto',
              }}
              trigger={['click']}
              menu={{ items: createItems }}
              className={s.task__createButton}
            >
              <Space align='center'>
                <PlusOutlined />
                <Typography.Title
                  level={4}
                  style={{ marginBottom: 0, color: '#fff', fontSize: '.875rem' }}
                >
                  Создать
                </Typography.Title>
              </Space>
            </Dropdown>
          ) : <ButtonApp
            classNameProp={s.navigation__link}
            label={'Открыть свой профиль'}
            icon={<ContactsOutlined />}
          />}
          <Space>
            <ButtonApp
              classNameProp={s.navigation__link}
              label={'Google календарь'}
              icon={<CalendarOutlined />}
            />
            <ButtonApp
              classNameProp={s.navigation__link}
              label={'Папка курса на диске'}
              icon={<FolderOutlined />}
            />
          </Space>
        </Row>
        <div>
          {dataWithoutTags.map((task) => (
            <TaskItem key={task.id} {...task} />
          ))}
          {dataWithTags.map((item) => (
            <CollapseComponent key={item.id} isTeacher={item?.isTeacher} tag={item?.tag}>
              <TaskItem key={item.id} {...item} />
            </CollapseComponent>
          ))}
        </div>
      </Content>
    </Layout>
  );
};

export default observer(TasksComponent);
