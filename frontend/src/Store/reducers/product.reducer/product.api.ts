import axios from "axios";

export const getCategoryProduct= (categoryName:string)=>{
    return new Promise((resolve,reject)=>{
        axios.get(`/api/items?categoryItem=${categoryName}`)
        .then((res)=>resolve(res.data))
        .catch((e)=>reject(e))
    })
}