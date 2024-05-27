import {RouteObject, createBrowserRouter, RouterProvider} from 'react-router-dom';

import {Suspense} from 'react';
import {Main} from 'src/pages/main';
import {LazyAbout} from 'src/pages/about';

const routes: RouteObject[] = [
  {
    path: "/admin",
    element: <Main />,
    children: [
      {
        path: '/admin/about',
        element:  <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
      },
    ]
  },
]

const router = createBrowserRouter(routes);

export const Router = () => {
  return <RouterProvider router={router}/>
}

export default routes;