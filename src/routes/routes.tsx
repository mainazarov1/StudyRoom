import React, { useId } from 'react';
import { Route, Routes } from 'react-router-dom';

// eslint-disable-next-line import/order
import {
  AUTH_PAGE,
  MAIN_PAGE,
  TASKS_PAGE,
  FEED_PAGE,
  TASK_LIST_COMPLETED,
  TASK_LIST_MISSED,
  TASK_LIST_ASSIGNED,
  USERS_PAGE,
  GRADE_PAGE,
  VERIFIED_TASKS_PAGE,
  UNVERIFIED_TASKS_PAGE
} from '../utils/path/path';

const LayoutApp = React.lazy(() => import('../containers/LayoutApp/LayoutApp'));
const Auth = React.lazy(() => import('../pages/Auth/Auth'));
const Home = React.lazy(() => import('../pages/Home/Home'));
const Feed = React.lazy(() => import('../pages/Feed'));
const TaskListAssigned = React.lazy(() => import('../pages/TaskListAssigned'));
const TaskListMissedDeadline = React.lazy(() => import('../pages/TaskListMissedDeadline'));
const TaskListCompleted = React.lazy(() => import('../pages/TaskListCompleted'));
const Tasks = React.lazy(() => import('../pages/Tasks/Tasks'));
const UnverifiedTasks = React.lazy(() => import('../pages/UnverifiedTasks/UnverifiedTasks'));
const VerifiedTasks = React.lazy(() => import('../pages/VerifiedTasks/VerifiedTasks'));
const Grade = React.lazy(() => import('../pages/Grade/Grade'));
const Users = React.lazy(() => import('../pages/Users/Users'));


interface RouterData {
  id?: string;
  path: string;
  component: JSX.Element;
}

const MainRoutes = () => {
  const PUBLIC_ROUTES: RouterData[] = [
    {
      id: useId(),
      path: MAIN_PAGE,
      component: <Home />,
    },
    {
      id: useId(),
      path: FEED_PAGE,
      component: <Feed />,
    },
    {
      id: useId(),
      path: GRADE_PAGE,
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
      path: UNVERIFIED_TASKS_PAGE,
      component: <UnverifiedTasks />
    },
    {
      id: useId(),
      path: VERIFIED_TASKS_PAGE,
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

  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path={AUTH_PAGE} element={<Auth />} />
        <Route element={<LayoutApp />}>
          {PUBLIC_ROUTES.map(({ id, path, component }) => (
            <Route path={path} element={component} key={id} />
          ))}
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export { MainRoutes };
