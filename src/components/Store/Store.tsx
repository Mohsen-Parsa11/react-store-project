import { Link } from "react-router-dom"
import Container from "../Container/Container"
import ProductItem from "../Product Item/ProductItem"
import { getProducts } from "../Services/API"
import { useEffect, useState } from "react";
import { IProduct } from "../Type/server";

function Store() {

  const [Product, setProduct]= useState<IProduct[]>([]);

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
          <Link to={`/product/${item?.id}`} key={item?.id} className="mx-auto">
            <ProductItem {...item} />
          </Link>
          ))
        }
      </div>
    </div>
   </Container>
  )
}

export default Store