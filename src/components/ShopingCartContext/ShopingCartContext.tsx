import {createContext, useContext, useState } from "react"

interface Ichildren{
    children: React.ReactNode
}
interface cartItem{
    id: number,
    qty: number
}
interface IShopingCartContext{
    cartItems:cartItem[],
    handleIncreaseProductQty: (id:number)=>void,
    handleDecreaseProductQty: (id:number)=>void,
    getProductQty: (id:number)=>number
    handleRemoveProduct: (id:number)=>void,
    cartQty: number
}

export const ShopingCartContext= createContext({} as IShopingCartContext);

// this function is a custom hook
export const useShopingCartContext= ()=>{
    return useContext(ShopingCartContext);
}


export function ShopingCartProvider({children}:Ichildren){

    const [cartItems,setCartItem]= useState<cartItem[]>([]);
    // handle increase function
    const handleIncreaseProductQty= (id:number)=>{
        setCartItem((currentItems)=>{
            let selectedItems= currentItems.find(item=>item.id == id);
            if(selectedItems==null){
                return [...currentItems, {id:id, qty:1}]
            }
            else{
               return currentItems.map((item=>{
                  if(item.id==id){
                    return({...item, qty: item.qty + 1})
                  }else{
                    return item
                  }
                }))
            }
        })
    }

    // handle decrease function 
    const handleDecreaseProductQty= (id:number)=>{
        setCartItem((currentItems)=>{
            let selectedItems= currentItems.find(item=>item.id==id);
            if(selectedItems?.qty == 1){
                return currentItems.filter(item=>item.id !== id);
            }
            else{
                return currentItems.map((item=>{
                   if(item.id==id){
                     return({...item, qty: item.qty - 1})
                   }else{
                     return item
                   }
                 }))
             }
        })
    }

    // this function remove the product from cart
    const handleRemoveProduct= (id:number)=>{
        setCartItem(currentItem=>{
           return currentItem.filter(item=>item.id !== id);
        })
    }

    
    // this variable productQtyis for cart qty
    const cartQty= cartItems.reduce((totalQty, item)=>totalQty + item.qty,0)

    // this function return the number  of qty
    const getProductQty= (id:number)=>{
        return cartItems.find(item=>item.id==id)?.qty || 0;
    } 

    console.log(cartItems)
    return(
        <ShopingCartContext.Provider value={{cartItems,
         handleIncreaseProductQty,
         handleDecreaseProductQty,
         getProductQty,
         handleRemoveProduct,
         cartQty
         }}>
            {children}
        </ShopingCartContext.Provider>
    )
}

