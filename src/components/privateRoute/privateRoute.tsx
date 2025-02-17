import React from 'react'
import { ShopingCartContext, useShopingCartContext } from '../ShopingCartContext/ShopingCartContext'
import { Navigate, Outlet } from 'react-router-dom';

function Loing() {

  const {isLogin}=  useShopingCartContext();

  return (
    <div>
        {isLogin? <Outlet/>: <Navigate to="/login"/>}
    </div>
  )
}

export default Loing