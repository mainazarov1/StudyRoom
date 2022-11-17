import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import { HeaderLogoPlus } from '../../components/HeaderComponents/HeaderLogoPlus/HeaderLogoPlus';
import RightComponent from '../../components/HeaderComponents/RightCoponent/RightComponent';
const { Header, Sider } = Layout;
import { Header as MainHeader } from '../Header/Header';
import 'antd/dist/antd.css';


let middleItems = [
  {
    title: 'Лента',
    path: '/course'
  },
  {
    title: 'Задания',
    path: '/term'
  },
  {
    title: 'Пользователи',
    path: '/performed',
  }
]

let middleItemsTeacher = [
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
    path: '/performed',
  },
  {
    title: 'Оценка',
    path: '/aw',
  }
]

let notReviewed = [
  {
    title: 'Непроверенные задания',
    path: '/asd'
  },
  {
    title: 'Проверенные',
    path: '/dsa'
  }
]

let tasks = [
  {
    title: 'Назначено',
    path: '/ttq'
  },
  {
    title: 'Пропущен срок сдачи',
    path: '/gasd'
  },
  {
    title: 'Выполнено',
    path: '/kokp'
  }
]


let leftTrigger = {
  title: 'dwaaw',
  path: '/logo'
}

const isTeacher = false;

export const LayoutApp: FC = () => {
  const location = useLocation();
  console.log(location)
  return (
    <Layout>
      {/* <Sider>Sider</Sider> */}
      <Layout>
      <MainHeader children={<HeaderLogoPlus leftTrigger={leftTrigger} middleItems={location.pathname == '/main' ? [] : location.pathname == '/not-reviewed' ? notReviewed : location.pathname == '/tasks' ? tasks : isTeacher ? middleItemsTeacher : middleItems}  rightComponent={<RightComponent />}/>} />        <Layout>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};
