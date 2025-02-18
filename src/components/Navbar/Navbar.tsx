import { NavLink } from "react-router-dom"
import Container from "../Container/Container"
import { useShopingCartContext } from "../ShopingCartContext/ShopingCartContext";
import cartIcon from "../../assets/images/grocery-store.png"



function Navbar() {

    const {cartQty, handleLogout}= useShopingCartContext();
  return (
    <>
    <div className= "sticky top-0 z-50 bg-gray-100 border-b border-gray-200 shadow px-6 md:px-0">
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
            <NavLink to="/cart"><img src={cartIcon} alt="" className="w-6" /></NavLink>
            <button className="px-4 py-1 rounded border mr-4 text-red-600 cursor-pointer active:scale-95 hover:opacity-75" onClick={handleLogout}>logout</button>
            </div>
            </div>
        
        </Container>
        </div>
    </>
  )
}

export default Navbar