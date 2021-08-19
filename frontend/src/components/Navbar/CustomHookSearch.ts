import React,{useEffect} from 'react'
import { IProduct } from '../../interface'
import axios from 'axios'
const CustomHookSearch= (url:string) => {
    const [itemsSearch,setItemsSearch] = React.useState<any>([])
    const [loading,setLoading] = React.useState<boolean>(false)
    const [error,setErorr] = React.useState<string>("");
    
    useEffect(()=>{
        getCategoryProduct();
       
    },[url])

    const getCategoryProduct = async ()=>{
        try {
            setLoading(true)
            let {data} = await axios.get(url)
            console.log(data);
            
            setItemsSearch(data)
        } catch (error) {
            setErorr(error.message)
        }finally{
            setLoading(false)
        }
        
    }

 
    return [itemsSearch,setItemsSearch,loading,error]
}

export default CustomHookSearch
