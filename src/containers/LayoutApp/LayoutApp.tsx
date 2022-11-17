import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { HeaderLogoPlus } from '../../components/HeaderComponents/HeaderLogoPlus/HeaderLogoPlus';
import RightComponent from '../../components/HeaderComponents/RightCoponent/RightComponent';
const { Header, Sider } = Layout;
import { Header as MainHeader } from '../Header/Header';
import 'antd/dist/antd.css';


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
      {/* <Sider>Sider</Sider> */}
      <Layout>
      <MainHeader children={<HeaderLogoPlus leftTrigger={leftTrigger} middleItems={middleItems}  rightComponent={<RightComponent />}/>} />
        <Layout>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};
