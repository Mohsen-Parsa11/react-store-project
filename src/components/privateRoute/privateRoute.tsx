import { useShopingCartContext } from '../ShopingCartContext/ShopingCartContext'
import { Navigate, Outlet } from 'react-router-dom';

function Loing() {

  const {isLogin}=  useShopingCartContext();

  return (
    <div>
        {isLogin? <Outlet/>: <Navigate to="/
        "/>}
    </div>
  )
}

export default Loing