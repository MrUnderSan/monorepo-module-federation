import {Link} from 'react-router-dom';
import {shopRoutes} from '@packages/shared/src/routes/shop';

const Shop = () => {
  return (
    <div>
      <h2>SHOP</h2>

      <div>
        <Link to={shopRoutes.second}>shop second</Link>
        <br/>
      </div>



    </div>
  )
}

export default Shop