import axios from "axios";

export const getCategoryProduct= (categoryName:string)=>{
    return new Promise((resolve,reject)=>{
        axios.get("api/products?category="+categoryName)
        .then((res)=>resolve(res.data.products))
        .catch((e)=>reject(e))
    })
}