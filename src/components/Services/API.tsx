import axios from "axios";


   const Client= axios.create({
        baseURL: "http://localhost:3000/",
    });

    export async function getProducts(){
       const {data}= await Client("products");
       return data;
    }