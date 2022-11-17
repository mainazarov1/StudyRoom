import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import Drawers from '../SideBar/Drawer';
const { Header, Sider } = Layout;

export const LayoutApp: FC = () => {
  return (
    <Layout>
      <Drawers />
      <Layout>
        <Layout>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};
