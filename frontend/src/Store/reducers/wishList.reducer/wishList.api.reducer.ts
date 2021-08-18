import axios from "axios";

export const getWishProduct= (id:number)=>{
    return new Promise((resolve,reject)=>{
        axios.get(`/api/wishItems?id=${id}`)
        .then((res)=>{
            resolve(res.data)
        })
        .catch((e)=>reject(e))
    })
}