import {RouteObject, createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Main} from 'src/pages/main';
// @ts-ignore
import shopRoutes from 'shop/Router';
// @ts-ignore
import adminRoutes from 'admin/Router';


const routes: RouteObject[]  = [
  {
    path: '/',
    element: <Main/>,
    children: [
      ...shopRoutes,
      ...adminRoutes,
    ]
  },
];

const router = createBrowserRouter(routes);

export const Router = () => {
  return <RouterProvider router={router}/>
}
