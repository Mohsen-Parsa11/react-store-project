import { Children } from "react"
interface Children{
    children: React.ReactNode
}

function Container({children}:Children) {
  return (
    <div className="container mx-auto">
        {children}
    </div>
  )
}

export default Container