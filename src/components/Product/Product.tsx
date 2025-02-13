import { useParams } from "react-router-dom"
import Container from "../Container/Container";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../Services/API";
import { IProduct } from "../Type/server";
import { useShopingCartContext } from "../ShopingCartContext/ShopingCartContext";

function Product() {

   const params= useParams<{id: string}>();
   const [productData, setProductData]= useState<IProduct>();

   useEffect(()=>{
      getProduct(params.id as string)
      .then((result)=>{
        setProductData(result);
      }) 
      .catch((error)=>{
        console.log(error);
      })
   },[])

   const {handleIncreaseProductQty,handleDecreaseProductQty,getProductQty,handleRemoveProduct}= useShopingCartContext();
   
  return (
    <div>
        <Container>
            
            <div className="h-96 lg:shadow lg:grid lg:grid-cols-12 mt-10 rounded">

                {/* mobil img container */}
                <div className="bg-blue-300 col-span-4 p-4 rounded-r lg:hidden mx-6 mb-10">
                    <div>
                        <img src={productData?.image} alt="" className="rounded"/>
                    </div>
                    <div>
                    {getProductQty(parseInt(params.id as string))===0?
                    <Button 
                    variant="success"
                    onClick={()=>handleIncreaseProductQty(parseInt(params.id as string))}
                    className="mt-2 py-1 px-2 rounded cursor-pointer ring-1 ring-blue-500 hover:ring-offset-1 shadow-md transition duration-75 active:scale-95"
                    >
                    Add to cart
                    </Button> 
                    :
                   <>
                    <div className="grid grid-cols-3">
                    <Button 
                    variant="success"
                    onClick={()=>handleDecreaseProductQty(parseInt(params.id as string))}
                    className="mt-2 p-1 rounded cursor-pointer ring-1 ring-blue-500 hover:ring-offset-1 shadow-md transition duration-75 active:scale-95"
                    >
                    -
                    </Button>
                    <span className="flex justify-center items-center">{getProductQty(parseInt(params.id as string))}</span>
                    <Button 
                    variant="success"
                    onClick={()=>handleIncreaseProductQty(parseInt(params.id as string))}
                    className="mt-2 p-1 rounded cursor-pointer ring-1 ring-blue-500 hover:ring-offset-1 shadow-md transition duration-75 active:scale-95"
                    >
                    +
                    </Button>
                    </div>
                    <Button 
                    variant="danger"
                    onClick={()=>handleRemoveProduct(parseInt(params.id as string))}
                    className="mt-4 px-2 py-1 w-full rounded cursor-pointer ring-1 ring-blue-500 hover:ring-offset-1 shadow-md transition duration-75 active:scale-95"
                    >
                    Remove
                    </Button>
                   </>
                }
                </div>
                </div>                    
            
                <div className="col-span-9 mx-6 lg:mx-0">
                    <div className="px-4 pt-6 pb-2 text-end">
                        <h2>{productData?.title}</h2>
                        <p>{productData?.price}</p>
                    </div>
                    <div className="px-4 text-end"> 
                        <p>
                          {productData?.description}
                        </p>
                    </div>
                </div>

                {/* mobil img container */}
                <div className="hidden lg:block bg-blue-300 col-span-3 p-4 rounded-r">
                    <div>
                        <img src={productData?.image} alt="" className="rounded"/>
                    </div>
                    <div>
                    {getProductQty(parseInt(params.id as string))===0?
                    <Button 
                    variant="success"
                    onClick={()=>handleIncreaseProductQty(parseInt(params.id as string))}
                    className="mt-2 px-2 py-1 rounded cursor-pointer ring-1 ring-blue-500 hover:ring-offset-1 shadow-md transition duration-75 active:scale-95"
                    >
                    Add to cart
                    </Button> 
                    :
                   <>
                    <div className="grid grid-cols-3 ">
                        <Button 
                    variant="success"
                    onClick={()=>handleDecreaseProductQty(parseInt(params.id as string))}
                    className="mt-2 p-1 rounded cursor-pointer ring-1 ring-blue-500 hover:ring-offset-1 shadow-md transition duration-75 active:scale-95"
                    >
                    -
                    </Button>
                    <span className="flex justify-center items-center">{getProductQty(parseInt(params.id as string))}</span>
                    <Button 
                    variant="success"
                    onClick={()=>handleIncreaseProductQty(parseInt(params.id as string))}
                    className="mt-2 p-1 rounded cursor-pointer ring-1 ring-blue-500 hover:ring-offset-1 shadow-md transition duration-75 active:scale-95"
                    >
                    +
                    </Button>
                    </div>
                    <Button 
                    variant="danger"
                    onClick={()=>handleRemoveProduct(parseInt(params.id as string))}
                    className="mt-4 px-2 py-1 w-full rounded cursor-pointer ring-1 ring-blue-500 hover:ring-offset-1 shadow-md transition duration-75 active:scale-95"
                    >
                    Remove
                    </Button>
                   </>
                }
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Product