import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Sider } = Layout;

export const LayoutApp: FC = () => {
  return (
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};
