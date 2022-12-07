import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout } from 'antd';

// import Drawers from '../SideBar/Drawer';
import { HeaderLogoPlus } from '../../components/HeaderComponents/HeaderLogoPlus/HeaderLogoPlus';
import RightComponent from '../../components/HeaderComponents/RightCoponent/RightComponent';
import { Header as MainHeader } from '../Header/Header';
import 'antd/dist/antd.css';


let middleItems = [
  {
    title: 'Лента',
    path: '/feed',
    id: 1,
  },
  {
    title: 'Задания',
    path: '/tasks',
    id: 2,
  },
  {
    title: 'Пользователи',
    path: '/performed',
    id: 3,
  }
]

let middleItemsTeacher = [
  {
    title: 'Лента',
    path: '/feed',
    id: 1,
  },
  {
    title: 'Задания',
    path: '/tasks',
    id: 2,
  },
  {
    title: 'Пользователи',
    path: '/performed',
    id: 3,
  },
  {
    title: 'Оценка',
    path: '/grade',
    id: 4,
  }
]

let tasks = [
  {
    title: 'Назначено',
    path: '/taskListAssigned',
    id: 1,
  },
  {
    title: 'Пропущен срок сдачи',
    path: '/taskListCompleted',
    id: 2,
  },
  {
    title: 'Выполнено',
    path: '/taskListMissed',
    id: 3,
  }
]

let unverifiedPage = [
  {
    title: 'Непроверенные задания',
    path: '/unverified-tasks',
    id: 1,
  },
  {
    title: 'Проверенные',
    path: '/verified-tasks', 
    id: 2,
  },
]


let leftTrigger = {
  title: 'StudyRoom',
  path: '/main',
  id: 1,
}

const isTeacher = true;

export const LayoutApp: FC = () => {
  const {pathname} = useLocation();
  console.log(pathname)

  const handleNavLink = () => {

    switch(pathname) {
      case '/taskListCompleted':
        return tasks;
      case '/taskListAssigned':
        return tasks;
      case '/taskListMissed': 
        return tasks;
      case '/grade':
        return middleItemsTeacher
      case '/tasks' :
        return middleItemsTeacher;
      case '/feed' :
        return middleItemsTeacher;
      case '/performed': 
        return middleItemsTeacher;
      case '/unverified-tasks':
        return unverifiedPage;
      case '/verified-tasks':
        return unverifiedPage;
      default:
        return [];
    }
  }

  return (
    <Layout>
      <Layout>
        <MainHeader >
          <HeaderLogoPlus 
            leftTrigger={leftTrigger}
            middleItems={handleNavLink} 
            rightComponent={
              <RightComponent />
            } 
          />
        </MainHeader>
        <Layout>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};
