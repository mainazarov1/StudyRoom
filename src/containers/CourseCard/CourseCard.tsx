import { EditOutlined, InfoCircleOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import { FC } from 'react';

import { ButtonApp } from '../../components/ButtonApp/ButtonApp';

import styles from './CourseCard.module.scss';

export const CourseCard: FC = () => {
  return (
    <div
      className={styles.card}
      style={
        {
          // color:
          // backgroundImage: 'url(https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=2000&t=st=1668084662~exp=1668085262~hmac=23faf3b2a057fcf990321fcf6484845b7ec2f3f5f62eca2b4d8f7574a9d5abf7)',
        }
      }
    >
      <div className={styles.card__button}>
        <ButtonApp label='Настроить' icon={<EditOutlined />} />
      </div>
      <Title className={styles.card__title}>HTML CSS JS</Title>
      <div className={styles.card__info}>
        <ButtonApp icon={<InfoCircleOutlined />} />
      </div>
    </div>
  );
};
