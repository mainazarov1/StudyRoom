import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout } from 'antd';

// import Drawers from '../SideBar/Drawer';
import { HeaderLogoPlus } from '../../components/HeaderComponents/HeaderLogoPlus/HeaderLogoPlus';
import RightComponent from '../../components/HeaderComponents/RightCoponent/RightComponent';
import { Header as MainHeader } from '../Header/Header';
import 'antd/dist/antd.css';

const middleItems = [
  {
    title: 'Лента',
    path: '/feed',
  },
  {
    title: 'Задания',
    path: '/tasks',
  },
  {
    title: 'Пользователи',
    path: '/performed',
  },
];

const middleItemsTeacher = [
  {
    title: 'Лента',
    path: '/feed',
  },
  {
    title: 'Задания',
    path: '/tasks',
  },
  {
    title: 'Пользователи',
    path: '/performed',
  },
  {
    title: 'Оценка',
    path: '/aw',
  },
];

const notReviewed = [
  {
    title: 'Непроверенные задания',
    path: '/asd',
  },
  {
    title: 'Проверенные',
    path: '/dsa',
  },
];

const tasks = [
  {
    title: 'Назначено',
    path: '/taskListAssigned',
  },
  {
    title: 'Пропущен срок сдачи',
    path: '/taskListCompleted',
  },
  {
    title: 'Выполнено',
    path: '/taskListMissed',
  },
];

const leftTrigger = {
  title: 'dwaaw',
  path: '/main',
};

const isTeacher = false;

export const LayoutApp: FC = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Layout>
      <Layout>
        <MainHeader
          children={
            <HeaderLogoPlus
              leftTrigger={leftTrigger}
              middleItems={
                location.pathname == '/main'
                  ? []
                  : location.pathname == '/not-reviewed'
                  ? notReviewed
                  : location.pathname == '/tasks'
                  ? tasks
                  : isTeacher
                  ? middleItemsTeacher
                  : middleItems
              }
              rightComponent={<RightComponent />}
            />
          }
        />
        <Layout>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};
