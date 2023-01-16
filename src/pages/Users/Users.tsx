import { MoreOutlined, UserAddOutlined } from '@ant-design/icons';
import { Divider, Table, Tooltip, Typography } from 'antd';

import { UsersTable } from '../../components/UsersTable/UsersTable';
import {
  studentsColumns,
  studentsData,
  teachersColumns,
  teachersData,
} from '../../utils/mock/tableMockApi';

import styles from './Users.module.scss';
const { Title } = Typography;
const users = [
  {
    fullname: 'Иванов Иван Иванович',
    role: 'admin',
    avatar: 'https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg',
  },
  {
    fullname: 'Иванов',
    role: 'teacher',
    avatar: 'https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg',
  },
  {
    fullname: 'Иванович',
    role: 'student',
    avatar: 'https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg',
  },
  {
    fullname: 'Иванов Иван Иванович',
    role: 'student',
    avatar: 'https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg',
  },
];

const Users = () => {
  return (
    <div className={styles.users}>
      <div className={styles.users__wrap}>
        <div className={styles.users__column}>
          <header>
            <Title className={styles.users__title} level={5}>
              Преподаватели
            </Title>
            <div className={styles.tooltip}>
              <Tooltip title='Пригласить преподавателей' placement='bottom'>
                <UserAddOutlined className={styles.users__icon} onClick={() => alert('click')} />
              </Tooltip>
            </div>
          </header>
          <Divider className={styles.users__divider} />
          <UsersTable columns={teachersColumns} data={teachersData} />
        </div>
        <div className={styles.users__column}>
          <header>
            <Title className={styles.users__title} level={5}>
              Учащиеся
            </Title>
            <Typography.Paragraph
              className={styles.users__text}
            >{`${studentsData.length} учащихся`}</Typography.Paragraph>
            <div className={styles.users__tooltip}>
              <Tooltip title='Пригласить учащихся' placement='bottom'>
                <UserAddOutlined className={styles.users__icon} onClick={() => alert('click')} />
              </Tooltip>
            </div>
          </header>
          <Divider className={styles.users__divider} />
          <UsersTable
            columns={studentsColumns}
            data={studentsData}
            showHeader={true}
            checkbox={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;