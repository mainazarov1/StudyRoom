import { MoreOutlined, UserAddOutlined } from '@ant-design/icons';
import { Divider, Layout, Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import { ButtonApp } from '../../components/ButtonApp/ButtonApp';

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
export const Users = () => {
  return (
    <div className={styles.users}>
      <div className={styles.users__wrap}>
        <div className={styles.users__column}>
          <header>
            <Title className={styles.users__title} level={5}>
              Преподаватели
            </Title>
            <ButtonApp icon={<UserAddOutlined />} />
          </header>
          <Divider />
          <div className={styles.users__list}>
            {users
              .filter((user) => user.role === 'teacher' || user.role === 'admin')
              .map((user, index) => {
                return (
                  <div className={styles.users__item} key={index}>
                    <img src={user.avatar} alt='avatar' />
                    <div className={styles.users__info}>
                      <div className={styles.users__name}>{user.fullname}</div>
                      {user.role === 'teacher' && (
                        <ButtonApp
                          // style={{
                          // 	background: 'transparent',
                          // 	'&:hover': {
                          // 		backgroundColor: 'red',
                          // 	},
                          // }}
                          icon={<MoreOutlined />}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
