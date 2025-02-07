import { NavLink } from "react-router-dom"
import Container from "../Container/Container"

function Navbar() {
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
            <NavLink to="/cart">سبد خرید</NavLink>
            </div>
        
        </Container>
        </div>
    </>
  )
}

export default Navbar