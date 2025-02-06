import { Link } from "react-router-dom"
import Container from "../Container/Container"
import ProductItem from "../Product Item/ProductItem"

function Store() {

  return (
   <Container>
     <div className="px-6 md:px-0">
      <h1 className="text-end mt-6">جدید ترین محصولات</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <Link to={`/product/${1}`} className="mx-auto">
          <ProductItem />
        </Link>
        <Link to={`/product/${2}`} className="mx-auto">
          <ProductItem />
        </Link>
        <Link to={`/product/${3}`} className="mx-auto">
          <ProductItem />
        </Link>
        <Link to={`/product/${4}`} className="mx-auto">
          <ProductItem />
        </Link>
      </div>
    </div>
   </Container>
  )
}

export default Store