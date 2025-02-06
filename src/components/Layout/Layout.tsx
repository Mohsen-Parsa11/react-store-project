import { Children } from "react"

interface Children{
    children: React.ReactNode
}

function Layout({children}:Children) {
  return (
    <>
        {children}
    </>
  )
}

export default Layout