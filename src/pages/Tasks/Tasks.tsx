// eslint-disable-next-line import/named
import { Dropdown, Layout, MenuProps, Row, Space, Typography } from 'antd';
import { CalendarOutlined, PlusOutlined, ContactsOutlined } from '@ant-design/icons';

import { ButtonApp } from '../../components/ButtonApp/ButtonApp';
import CollapseComponent from '../../components/Collapse/Collapse';

// eslint-disable-next-line import/order
import TaskItem from './TaskItem';
const { Content } = Layout;

import s from './Tasks.module.scss';
import SiderComponent from './components/Sider/Sider';
import { tasksStore } from '../../core/store/tasks';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { TaskApi } from '../../core/types/types';

// const userProfileSvg = (
//   <svg focusable='false' fill='inherit' width='18' height='18' viewBox='0 0 24 24'>
//     <path d='M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.55 0c.14-.15.33-.25.55-.25s.41.1.55.25c.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5zM19 5v10.79C16.52 14.37 13.23 14 12 14s-4.52.37-7 1.79V5h14zM5 19v-.77C6.74 16.66 10.32 16 12 16s5.26.66 7 2.23V19H5z'></path>
//     <path d='M12 13c1.94 0 3.5-1.56 3.5-3.5S13.94 6 12 6 8.5 7.56 8.5 9.5 10.06 13 12 13zm0-5c.83 0 1.5.67 1.5 1.5S12.83 11 12 11s-1.5-.67-1.5-1.5S11.17 8 12 8z'></path>
//   </svg>
// );

const Disk = (
  <svg
    enableBackground='new 0 0 24 24'
    focusable='false'
    height='18'
    viewBox='0 0 24 24'
    width='18'
  >
    <rect fill='none' height='24' width='24'></rect>
    <path d='M14.35,2.5h-4.7c-0.71,0-1.37,0.38-1.73,0.99L1.58,14.4c-0.36,0.62-0.36,1.38-0.01,2l2.35,4.09c0.36,0.62,1.02,1,1.73,1 h12.68c0.72,0,1.38-0.38,1.73-1l2.35-4.09c0.36-0.62,0.35-1.38-0.01-2L16.08,3.49C15.72,2.88,15.06,2.5,14.35,2.5z M18.34,19.5H5.66 l-2.35-4.09L9.65,4.5h4.7l6.34,10.91L18.34,19.5z M12.9,7.75h-1.8l-4.58,7.98L7.25,17h9.5l0.73-1.27L12.9,7.75z M9.25,15L12,10.2 l2.75,4.8H9.25z'></path>
  </svg>
);

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
    tag: 'Back End тестовые задания',
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

const items: MenuProps['items'] = [
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
    tasksStore.fetchTasks()
  }, [])

  console.log(tasksStore.tasks)

  return (
    <Layout className={s.task__layout}>
      <SiderComponent />
      <Content style={{ width: 'calc(100 % - 2 * 1.5rem)' }} className={s.main}>
        <Row justify={'space-between'} align={'middle'} style={{ marginBottom: '1rem' }}>
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
            menu={{ items }}
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
          <Space>
            <ButtonApp
              classNameProp={s.navigation__link}
              label={'Google календарь'}
              icon={<CalendarOutlined />}
            />
            <ButtonApp
              classNameProp={s.navigation__link}
              label={'Папка курса на диске'}
              icon={<ContactsOutlined />}
            />
          </Space>
        </Row>
        <div>
          {tasksStore.tasks.map((task) => (
            <TaskItem key={task.id} {...task} />
          ))}

          {/* {dataWithTags.map((item) => (
            <CollapseComponent key={item.id} isTeacher={item?.isTeacher} tag={item?.tag}>
              <TaskItem key={item.id} {...item} />
            </CollapseComponent>
          ))} */}
        </div>
      </Content>
    </Layout>
  );
};

export const Tasks = observer(TasksComponent);
