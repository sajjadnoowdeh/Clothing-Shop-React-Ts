import React,{useEffect} from 'react'
import { IProduct } from '../../interface'
import axios from 'axios'
const CustomHookProductAmazing = (url:string) => {
    const [stateAmazing,setStateAmazing] = React.useState<any>([])
    const [loading,setLoading] = React.useState<boolean>(false)
    const [error,setErorr] = React.useState<string>();
    
    useEffect(()=>{
        getCategoryProduct();
       
    },[url])

    const getCategoryProduct = async ()=>{
        try {
            setLoading(true)
            let {data} = await axios.get(url)
            console.log(data);
            
            setStateAmazing(data)
        } catch (error) {
            setErorr(error.message)
        }finally{
            setLoading(false)
        }
        
    }

 
    return [stateAmazing,setStateAmazing,loading,error]
}

export default CustomHookProductAmazing
