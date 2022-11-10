import { GoogleOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Typography } from 'antd';
import React from 'react';

import { InputApp } from '../../components/InputApp/InputApp';
import { InputAppPass } from '../../components/InputApp/InputAppPass';

import styles from './AuthForm.module.scss';
export const AuthForm: React.FC = () => {
  const { Title } = Typography;

  return (
    <Form className={styles.authForm}>
      <Title className={styles.authForm__title} level={2}>
        StudyRoom
      </Title>
      <Title className={styles.authForm__subtitle} level={2}>
        Use your Google Account
      </Title>
      <InputApp label='Email' name='username' placeholder='...example@gmail.com' />
      <InputAppPass label='Password' name='password' placeholder='...password' />
      <Divider />
      <Form.Item>
        <Button className={styles.authFormButton} icon={<GoogleOutlined />}>
          Sign in with Google
        </Button>
      </Form.Item>
    </Form>
  );
};
