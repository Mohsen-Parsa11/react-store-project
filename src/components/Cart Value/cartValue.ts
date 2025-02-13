import React, { useState } from 'react'

function CartValue(initialValue=0 ){
  
    const [value, setValue]= useState<any>(initialValue);

    const increment= ()=>{
        setValue(value+1)
    }

    const decrement= ()=>{
        setValue(value-1)
    }

    const reset= ()=>{
        setValue(0)
    }

    return {value, increment, decrement, reset}
    
}
export default CartValue