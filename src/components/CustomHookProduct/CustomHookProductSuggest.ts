import React,{useEffect} from 'react'
import { IProduct } from '../../interface'
import axios from 'axios'
const CustomHookProductSuggest = (url:string) => {
    const [stateSuggest,setStateSuggest] = React.useState<any>([])
    const [loading,setLoading] = React.useState<boolean>(false)
    const [error,setErorr] = React.useState<string>();
    
    useEffect(()=>{
        getCategoryProduct();
       
    },[url])

    const getCategoryProduct = async ()=>{
        try {
            setLoading(true)
            let {data} = await axios.get(url)
            setStateSuggest(data.products)
        } catch (error) {
            setErorr(error.message)
        }finally{
            setLoading(false)
        }
        
    }

 
    return [stateSuggest,setStateSuggest,loading,error]
}

export default CustomHookProductSuggest
