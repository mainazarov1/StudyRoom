import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { HeaderLogoPlus } from '../../components/Header/HeaderLogoPlus/HeaderLogoPlus';
import RightComponent from '../../components/Header/RightCoponent/RightComponent';
const { Header, Sider } = Layout;
import Header from './components/Header/Header';
import 'antd/dist/antd.css';
import { HeaderLogoPlus } from './components/Header/HeaderLogoPlus/HeaderLogoPlus';
import { HeaderTest } from './components/Header/HeaderLogoPlus/HeaderTest';
import RightComponent from './components/Header/RightCoponent/RightComponent';

let middleItems = [
  {
    title: 'Лента',
    path: '/appointed'
  },
  {
    title: 'Задания',
    path: '/term'
  },
  {
    title: 'Пользователи',
    path: '/performed'
  }
]

let leftTrigger = {
  title: 'dwaaw',
  path: '/logo'
}
export const LayoutApp: FC = () => {
  return (
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
      <Header children={<HeaderLogoPlus leftTrigger={leftTrigger} middleItems={middleItems}  rightComponent={<RightComponent />}/>} />

        <Layout>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};
