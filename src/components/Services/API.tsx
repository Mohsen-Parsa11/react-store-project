import axios from "axios";


   const Client= axios.create({
        baseURL: "http://localhost:3000/",
    });

    export async function getProducts(){
       const {data}= await Client("products");
       return data;
    }

    export async function getProduct(id:string | number) {
         const {data}= await Client(`products/${id}`);
         return data;
    }

    export async function login(username:string, password:string){
      const {data}= await Client({
         method: "POST",
         url:"/login",
         data:{
            username,
            password
         },
      })
      return data;
    }