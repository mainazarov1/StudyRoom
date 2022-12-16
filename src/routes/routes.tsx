import React, { useId } from 'react';
import { Route, Routes, useRevalidator } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Auth } from '../pages/Auth/Auth';
import { LayoutApp } from '../containers/LayoutApp/LayoutApp';
import {
  AUTH_PAGE,
  MAIN_PAGE,
  TASKS_PAGE,
  FEED_PAGE,
  TASK_LIST,
  TASK_LIST_COMPLETED,
  TASK_LIST_MISSED,
  TASK_LIST_ASSIGNED,
  USERS_PAGE,
} from '../utils/path/path';
import Feed from '../pages/Feed';
import TaskListAssigned from '../pages/TaskListAssigned';
import TaskListMissedDeadline from '../pages/TaskListMissedDeadline';
import TaskListCompleted from '../pages/TaskListCompleted';
import Tasks from '../pages/Tasks/Tasks';
import UnverifiedTasks from '../pages/UnverifiedTasks/UnverifiedTasks';
import VerifiedTasks from '../pages/VerifiedTasks/VerifiedTasks';
import Grade from '../pages/Grade/Grade';
import { Users } from '../pages/Users/Users';

interface RouterData {
  id?: string;
  path: string;
  component: JSX.Element;
}

const MainRoutes = () => {
  const PUBLIC_ROUTES: RouterData[] = [
    // {
    //   id: useId(),
    //   path: AUTH_PAGE,
    //   component: <Auth />,
    // },

    {
      id: useId(),
      path: MAIN_PAGE,
      component: <Home />,
    },
    // {
    //   id: useId(),
    //   path: TAPE_PAGE,
    //   component: <Tape />,
    {
      id: useId(),
      path: FEED_PAGE,
      component: <Feed />,
    },
    {
      id: useId(),
      path: '/grade',
      component: <Grade />,
    },
    {
      id: useId(),
      path: FEED_PAGE,
      component: <Feed />,
    },
    {
      id: useId(),
      path: TASK_LIST_COMPLETED,
      component: <TaskListCompleted />,
    },
    {
      id: useId(),
      path: TASK_LIST_ASSIGNED,
      component: <TaskListAssigned />,
    },
    {
      id: useId(),
      path: TASK_LIST_MISSED,
      component: <TaskListMissedDeadline />,
    },
    {
      id: useId(),
      path: TASKS_PAGE,
      component: <Tasks />,
    },
    {
      id: useId(),
      path: USERS_PAGE,
      component: <Users />,
    },
    {
      id: useId(),
      path: '/unverified-tasks',
      component: <UnverifiedTasks />
    },
    {
      id: useId(),
      path: '/verified-tasks',
      component: <VerifiedTasks />
    }
    // {
    // 	id: useId(),
    // 	path: USERS_PAGE,
    // 	component: <Users />
    // },
    // {
    // 	id: useId(),
    // 	path: RATING_PAGE,
    // 	component: <Rating />
    // },
  ];

  // const PRIVATE_ROUTES: RouterData[] = [
  //   {
  //     id: useId(),
  //     link: ADMIN_MAIN_PAGE,
  //     element: <AdminPage />,
  //   },
  // ];

  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path={AUTH_PAGE} element={<Auth />} />
        <Route element={<LayoutApp />}>
          {PUBLIC_ROUTES.map(({ id, path, component }) => (
            <Route path={path} element={component} key={id} />
          ))}
        </Route>
        {/* <Route>
					{PRIVATE_ROUTES.map(({ id, link, element }) => (
						<Route path={link} element={element} key={id} />
					))}
				</Route> */}
      </Routes>
    </React.Suspense>
  );
};

export { MainRoutes };
