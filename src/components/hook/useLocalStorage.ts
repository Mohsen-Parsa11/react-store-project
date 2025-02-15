import {useState, useEffect } from "react";



export function useLocalStorage<T>(key: string, initialValue: T){

    const [Value, setValue] = useState<T>(()=>{
        let LocalItems= localStorage.getItem("cartItems");
        if(LocalItems != null){
            return JSON.parse(LocalItems)
        }else{
            return initialValue
        }
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(Value));

    },[key,Value]);

    return [Value, setValue] as [typeof Value, typeof setValue];
}