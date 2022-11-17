import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

// import Drawers from '../SideBar/Drawer';
import { HeaderLogoPlus } from '../../components/HeaderComponents/HeaderLogoPlus/HeaderLogoPlus';
import RightComponent from '../../components/HeaderComponents/RightCoponent/RightComponent';
import { Header as MainHeader } from '../Header/Header';
import 'antd/dist/antd.css';


let middleItems = [
  {
    title: 'Лента',
    path: '/feed'
  },
  {
    title: 'Задания',
    path: '/taskList'
  },
  {
    title: 'Пользователи',
    path: '/main'
  }
]

let leftTrigger = {
  title: 'dwaaw',
  path: '/main'
}
export const LayoutApp: FC = () => {
  return (
    // <Layout>
    //   <Layout>
    //   <Layout>
    <>
      <MainHeader children={<HeaderLogoPlus leftTrigger={leftTrigger} middleItems={middleItems}  rightComponent={<RightComponent />}/>} />
        <Layout>
          <Outlet />
        </Layout>
    </>
    //   {/* </Layout>
    // </Layout>
    // </Layout> */}
  );
};
