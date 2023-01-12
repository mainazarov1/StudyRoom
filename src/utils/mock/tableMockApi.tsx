import { CaretDownOutlined, MoreOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Row, Space, Typography } from 'antd';

import styles from './../../pages/Users/Users.module.scss';
const items = [
  { key: '1', label: 'Action 1' },
  { key: '2', label: 'Action 2' },
];

export const teachersColumns = [
  {
    title: 'user',
    dataIndex: 'user',
    render: (_: unknown, record: any) => (
      <Space size='middle'>
        {record.avatar}
        <Typography.Text>{record.fullname}</Typography.Text>
      </Space>
    ),
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    align: 'right',
    render: () => (
      <Space size='middle'>
        <Dropdown menu={{ items }} trigger={['click']}>
          <MoreOutlined
            className={styles.users__icon}
            // onClick={() => alert('click')}
          />
        </Dropdown>
      </Space>
    ),
  },
];
export const teachersData = [
  {
    key: 1,
    avatar: (
      <Avatar src='https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg' />
    ),
    fullname: 'Ivanov Ivan Ivanovich',
  },
  {
    key: 2,
    avatar: (
      <Avatar src='https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg' />
    ),
    fullname: 'Ivanov Ivagdgn Ivanovich',
  },
  {
    key: 3,
    avatar: (
      <Avatar src='https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg' />
    ),
    fullname: 'Ivanov Ivan Ivanovich',
  },
  {
    key: 4,
    avatar: (
      <Avatar src='https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg' />
    ),
    fullname: 'Ivanov Ivan Ivanovich',
  },
];

// columns for antd table component

export const studentsColumns = [
  {
    title: () => (
      <Dropdown menu={{ items }} trigger={['click']}>
        <Space size='middle' direction='horizontal'>
          <Typography.Text>Действия</Typography.Text>

          <CaretDownOutlined

            // className={styles.users__icon}

          // onClick={() => alert('click')}
          />
        </Space>
      </Dropdown>
    ),
    dataIndex: 'user',
    render: (_: unknown, record: any) => (
      <Space size='middle'>
        {record.avatar}
        <Typography.Text>{record.fullname}</Typography.Text>
      </Space>
    ),
    // width: '40px',
  },
  // {
  // 	title: 'Fullname',
  // 	dataIndex: 'fullname',
  // },
  {
    // title: 'Actions',
    dataIndex: 'actions',
    align: 'right',
    sortDirections: ['ascend', 'descend'],
    sorter: (a, b) => a.fullname.localeCompare(b.fullname),
    render: () => (
      <Space size='middle'>
        <Dropdown menu={{ items }} trigger={['click']}>
          <MoreOutlined
            className={styles.users__icon}
            // onClick={() => alert('click')}
          />
        </Dropdown>
      </Space>
    ),
  },
];
export const studentsData = [
  {
    key: 1,
    avatar: (
      <Avatar src='https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg' />
    ),
    // user: 's',
    fullname: 'Ivanov Ivan Ivanovich',
  },
  {
    key: 2,
    avatar: (
      <Avatar src='https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg' />
    ),
    fullname: 'Alex Alex',
  },
  {
    key: 3,
    avatar: (
      <Avatar src='https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg' />
    ),
    fullname: 'Big Boss',
  },
  {
    key: 4,
    avatar: (
      <Avatar src='https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg' />
    ),
    fullname: 'Ivanov',
  },
];
