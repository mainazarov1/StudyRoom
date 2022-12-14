import { MoreOutlined, UserAddOutlined } from '@ant-design/icons';
import { Divider, Tooltip, Typography } from 'antd';

import { IconContainer } from '../../components/IconContainer/IconContainer';

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

const color = 'red';

export const Users = () => {
  return (
    <div className={styles.users}>
      <div className={styles.users__wrap}>
        <div className={styles.users__column}>
          <header>
            <Title className={styles.users__title} level={5} style={{ color: color }}>
              Преподаватели
            </Title>
            <Tooltip title='Пригласить преподавателей' placement='bottom'>
              {/* <UserAddOutlined
								className={styles.users__icon}
								onClick={() => alert('click')}
							/> */}
              <>
                <IconContainer
                  className={styles.users__icon}
                  icon={<UserAddOutlined style={{ color: color }} />}
                  color={'green'}
                  initColor={'white'}
                  onClick={() => alert('clicked')}
                />
              </>
            </Tooltip>
          </header>
          <Divider
            style={{
              margin: '0',
              backgroundColor: color,
            }}
          />
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
                        <IconContainer
                          className={styles.users__icon}
                          icon={<MoreOutlined />}
                          color='blue'
                          initColor='rgba(0,0,0,.1)'
                          onClick={() => alert('click')}
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
