import { Link } from "react-router-dom"
import Container from "../Container/Container"
import ProductItem from "../Product Item/ProductItem"
import { useEffect, useState } from "react"
import { getProducts } from "../Services/API"

function Store() {

  const [Product, setProduct]= useState([]);

  useEffect(()=>{
    getProducts()
    .then((result)=>{
      setProduct(result)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, []);

  console.log(Product);




  return (
   <Container>
     <div className="px-6 md:px-0">
      <h1 className="text-end mt-6">جدید ترین محصولات</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {
        Product.map((item)=>(
          <Link to={`/product/${1}`} className="mx-auto">
            <ProductItem key={item?.id} />
          </Link>
        ))
      }
        
      </div>
    </div>
   </Container>
  )
}

export default Store