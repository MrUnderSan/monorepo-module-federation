import {RouteObject, createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Suspense} from 'react';
import {Main} from 'src/pages/main';
import {LazyShop} from 'src/pages/shop';
import {UserCard} from '@packages/shared/src/componets/UserCard';

const routes:  RouteObject[] = [
  {
    path: "/shop",
    element: <Main />,
    children: [
      {
        path: '/shop/main',
        element: <Suspense fallback={'Loading...'}><LazyShop /></Suspense>
      },
      {
        path: '/shop/second',
        element: <Suspense fallback={'Loading...'}>
          <div style={{color: 'red'}}>
            <h1>second page</h1>
            <UserCard username={'Frank'} />
          </div>
        </Suspense>
      },
    ]
  },
];

const router = createBrowserRouter(routes);

export const Router = () => {
  return <RouterProvider router={router}/>
}

export default routes;
