import { useEffect, useState } from "react";
import Button from "../Button/Button"
import { getProduct } from "../Services/API";
import { IProduct } from "../Type/server";
import { useShopingCartContext } from "../ShopingCartContext/ShopingCartContext";
import { Link } from "react-router-dom";

interface IcartItems{
  id: number;
  qty: number;
}

function CardItem({id,qty}:IcartItems) {

  const [prduct, setProduct]=useState<IProduct>();
  useEffect(()=>{
      getProduct(id).then((data)=>{
        setProduct(data);
      }).catch((error)=>{
        console.log(error)
      })
  });

  const {handleDecreaseProductQty, handleIncreaseProductQty, handleRemoveProduct}= useShopingCartContext()

  return (
      <div className="px-6 lg:px-0">
        <div className="border-b border-gray-200 pb-4 lg:flex lg:flex-row-reverse">
           <div>
              <Link to={`../product/${id}`}>
              <img src={prduct?.image} alt="" className="max-w-96 lg:max-w-40 mx-auto rounded"/>
              </Link>
           </div>
            <div className="space-y-2 lg:mr-4">
                <h2 className="text-center lg:text-right text-xl text-slate-600">{prduct?.title}</h2>
                <div className="flex justify-center space-x-2">
                    <Button variant="primary" className="px-2 rounded cursor-pointer hover:ring-1 ring-blue-500 ring-offset-1 active:scale-95 shadow-md transition duration-75" onClick={()=>handleIncreaseProductQty(id)}>+</Button>
                    <span>{qty}</span>
                    <Button variant="primary" className="px-2 rounded cursor-pointer hover:ring-1 ring-blue-500 ring-offset-1 active:scale-95 shadow-md transition duration-75" onClick={()=>handleDecreaseProductQty(id)}>-</Button>
                    <Button variant="danger" className="rounded px-2 cursor-pointer hover:ring-1 ring-red-400 ring-offset-1 active:scale-95 shadow-md transition duration-75" onClick={()=>handleRemoveProduct(id)}>Remove</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardItem