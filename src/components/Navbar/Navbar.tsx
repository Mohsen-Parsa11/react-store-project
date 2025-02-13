import { NavLink } from "react-router-dom"
import Container from "../Container/Container"
import { useShopingCartContext } from "../ShopingCartContext/ShopingCartContext";

function Navbar() {

    const {cartQty}= useShopingCartContext();
  return (
    <>
    <div className="bg-gray-100 border-b border-gray-200 shadow px-6 md:px-0">
        <Container>
            <div  className="py-4 flex justify-between flex-row-reverse gap-3">
            <ul className="flex flex-row-reverse justify-between w-24">
            <li>
                <NavLink to="/">
                    خانه
                </NavLink> 
            </li>
            <li>
                <NavLink to="store">
                فروشگاه
                </NavLink>
            </li>
            </ul>
            <div className="flex flex-row-reverse">
                {cartQty!==0?
            <span className="w-4 h-4 bg-red-500 rounded-full flex justify-center items-center p-1 text-white text-xs">{cartQty}</span>:""}
            <NavLink to="/cart">سبد خرید </NavLink>
            </div>
            </div>
        
        </Container>
        </div>
    </>
  )
}

export default Navbar