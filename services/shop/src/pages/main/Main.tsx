import * as s from './Main.module.scss';
import {Link, Outlet} from 'react-router-dom';

export const Main = () => {

  return (
    <div>
      <h1 className={s.title}>SHOP MODULE</h1>
      <Outlet/>
    </div>
  )
}