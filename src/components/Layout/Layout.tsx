import { Children } from "react"
import Navbar from "../Navbar/Navbar"

interface Children{
    children: React.ReactNode
}

function Layout({children}:Children) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout