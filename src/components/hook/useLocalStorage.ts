import {useState, useEffect } from "react";

export function useLocalStorage<T>(key:string,initialValue:T){
    const [Value, setValue] = useState<T>(()=>{
        let LocalCart= localStorage.getItem("cartItems");
        if(LocalCart != null){
            return JSON.parse(LocalCart)
        }else{
            return initialValue;
        }
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(Value));
    },[key,initialValue])

    return [Value,setValue] as [typeof Value, typeof setValue];
}