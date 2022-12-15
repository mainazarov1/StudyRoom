import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout } from 'antd';

// import Drawers from '../SideBar/Drawer';
import { HeaderLogoPlus } from '../../components/HeaderComponents/HeaderLogoPlus/HeaderLogoPlus';
import RightComponent from '../../components/HeaderComponents/RightCoponent/RightComponent';
import { Header as MainHeader } from '../Header/Header';
import 'antd/dist/antd.css';
import {  
  AUTH_PAGE,
  MAIN_PAGE,
  FEED_PAGE,
  TASKS_PAGE,
  TASK_LIST_COMPLETED,
  TASK_LIST_MISSED,
  TASK_LIST_ASSIGNED,
  USERS_PAGE,
  GRADE_PAGE,
  UNVERIFIED_TASKS_PAGE,
  VERIFIED_TASKS_PAGE,
  TASK_LIST } from '../../utils/path/path';

const middleItems = [
  {
    title: 'Лента',
    path: FEED_PAGE,
    id: 1,
  },
  {
    title: 'Задания',
    path: TASKS_PAGE,
    id: 2,
  },
  {
    title: 'Пользователи',
    path: USERS_PAGE,
    id: 3,
  }
]

const middleItemsTeacher = [
  {
    title: 'Лента',
    path: FEED_PAGE,
    id: 1,
  },
  {
    title: 'Задания',
    path: TASKS_PAGE,
    id: 2,
  },
  {
    title: 'Пользователи',
    path: USERS_PAGE,
    id: 3,
  },
  {
    title: 'Оценка',
    path: GRADE_PAGE,
    id: 4,
  }
]

const tasks = [
  {
    title: 'Назначено',
    path: TASK_LIST_ASSIGNED,
    id: 1,
  },
  {
    title: 'Пропущен срок сдачи',
    path: TASK_LIST_COMPLETED,
    id: 2,
  },
  {
    title: 'Выполнено',
    path: TASK_LIST_MISSED,
    id: 3,
  }
]

let unverifiedPage = [
  {
    title: 'Непроверенные задания',
    path: UNVERIFIED_TASKS_PAGE,
    id: 1,
  },
  {
    title: 'Проверенные',
    path: VERIFIED_TASKS_PAGE, 
    id: 2,
  },
]


let leftTrigger = {
  title: 'StudyRoom',
  path: MAIN_PAGE,
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
