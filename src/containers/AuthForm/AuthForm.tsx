import { GoogleOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Typography } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { InputApp } from '../../components/InputApp/InputApp';
import { InputAppPass } from '../../components/InputApp/InputAppPass';

import styles from './AuthForm.module.scss';
export const AuthForm: React.FC = observer(() => {
  const { Title } = Typography;

  return (
    <Form layout='vertical' className={styles.authForm}>
      <Title className={styles.authForm__title} level={3}>
        StudyRoom
      </Title>
      <Title className={styles.authForm__subtitle} level={4}>
        Use your Google Account
      </Title>
      <Divider />
      <InputApp label='Email' name='username' placeholder='...example@gmail.com' required={true} />
      <InputAppPass label='Password' name='password' placeholder='...password' required={true} />
      <Divider />
      <Form.Item>
        <Button className={styles.authFormButton} icon={<GoogleOutlined />}>
          Sign in with Google
        </Button>
      </Form.Item>
    </Form>
  );
});
