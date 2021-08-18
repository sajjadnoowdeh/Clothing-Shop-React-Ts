import axios from "axios";

export const getCategoryProduct= (categoryName:string)=>{
    return new Promise((resolve,reject)=>{
        axios.get(`/api/items?categoryItem=${categoryName}`)
        .then((res)=>resolve(res.data))
        .catch((e)=>reject(e))
    })
}


export const getProductsLowest = async(category_name:string)=>{
    return new Promise((resolve,reject)=>{
      axios.get(`/api/lowestProducts?categorySort=${category_name}&lowestPrice=lowest`)
      .then((res)=>resolve(res.data))
      .catch((e)=>reject(e))
     
    })
  }

  export const getProductsHighest = async(category_name:string)=>{
    return new Promise((resolve,reject)=>{
      axios.get(`/api/highestProducts?categorySortHighest=${category_name}&highestPrice=highest`)
      .then((res)=>{
          resolve(res.data)
        })
      .catch((e)=>reject(e))
     
    })
  }

  export const getProductsHighestDiscount = async(category_name:string)=>{
    return new Promise((resolve,reject)=>{
      axios.get(`/api/highestDescountProducts?categorySortDiscount=${category_name}&discoutPrice=discount`)
      .then((res)=>resolve(res.data))
      .catch((e)=>reject(e))
     
    })
  }



  export const getProductsDefaultSort = async(category_name:string)=>{
    return new Promise((resolve,reject)=>{
      axios.get(`/api/defaultSort?categoryDefaultsort=${category_name}&defaultSort=default`)
      .then((res)=>resolve(res.data))
      .catch((e)=>reject(e))
     
    })
  }


  export const handleSearch = async(value:string,category:string)=>{
    return new Promise((resolve,reject)=>{
      axios.get(`/api/searchCategory?value=${value}&categorySearch=${category}`)
      .then((res)=>resolve(res.data))
      .catch((e)=>reject(e))
     
    })
  }
