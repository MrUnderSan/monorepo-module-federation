import * as s from './Main.module.scss';
import {Link, Outlet} from 'react-router-dom';
import {adminRoutes} from '@packages/shared/src/routes/admin';
import {shopRoutes} from '@packages/shared/src/routes/shop';

export const Main = () => {

  return (
    <div>

      <div>
        <Link to={adminRoutes.about}>about</Link>
        <br/>
        <Link to={shopRoutes.main}>shop main</Link>
        <br/>
      </div>

      <h1 className={s.title}>Hello webpack!</h1>
      <Outlet/>
    </div>
  )
}