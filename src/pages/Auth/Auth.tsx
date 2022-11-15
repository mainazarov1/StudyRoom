import { FC } from 'react';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import { AuthForm } from './../../containers/AuthForm/AuthForm';
import styles from './Auth.module.scss';

export const Auth: FC = () => {
  return (
    <Layout className={styles.auth}>
      <Content className={styles.auth__wrapper}>
        <AuthForm />
      </Content>
    </Layout>
  );
};
