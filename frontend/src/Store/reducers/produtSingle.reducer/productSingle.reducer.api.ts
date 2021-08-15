import axios from "axios";
export const getProductSingle= (id:string,category_name:string)=>{
    return new Promise((resolve,reject)=>{
        axios.get("api/productSingle")
        .then((res)=>console.log(res))
        .catch((e)=>reject(e))
    })
}