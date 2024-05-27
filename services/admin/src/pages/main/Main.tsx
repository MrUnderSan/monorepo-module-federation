import * as s from './Main.module.scss';
import {Outlet} from 'react-router-dom';
import {deepMerge} from '@packages/shared/src/utils/deepMerge';
import {UserCard} from '@packages/shared/src/componets/UserCard';

export const Main = () => {

  deepMerge()

  return (
    <div>
      <h1 className={s.title}>ADMIN MODULE</h1>
      <Outlet/>
      <UserCard username={'FROM ADMIN'} />
    </div>
  )
}