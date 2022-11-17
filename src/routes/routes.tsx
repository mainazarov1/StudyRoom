import React, { useId } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Auth } from '../pages/Auth/Auth';
import { LayoutApp } from '../containers/LayoutApp/LayoutApp';
import {
  AUTH_PAGE,
  MAIN_PAGE,
  FEED_PAGE,
  TASK_LIST,
  // TASKS_PAGE,
  // USERS_PAGE,
  // RATING_PAGE
} from '../utils/path/path';
import { HeaderTest } from '../components/HeaderComponents/HeaderLogoPlus/HeaderTest';
import RightComponent from '../components/HeaderComponents/RightCoponent/RightComponent';

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

    /* Роуты для теста компонента Header */
    {
      path: 'not-reviewed',
      component: <HeaderTest />
    },
    {
      path: 'tasks',
      component: <RightComponent />
    },
    {
      path: 'course',
      component: <div />
    }

    /* --------------------- */
    
    // {
    // 	id: useId(),
    // 	path: TAPE_PAGE,
    // 	component: <Tape />
    // },
    // {
    // 	id: useId(),
    // 	path: TASKS_PAGE,
    // 	component: <Tasks />
    // },
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
    <React.Suspense fallback={<span> Loading...</span>}>
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
