import React,{useEffect} from 'react'
import { IProduct } from '../../interface'
import axios from 'axios'
const CustomHookProductSuggest = (url:string) => {
    const [stateSuggest,setStateSuggest] = React.useState<any>([])
    const [pending,setPending] = React.useState<boolean>(false)
    const [err,setErorr] = React.useState<string>();
    
    useEffect(()=>{
        getCategoryProduct();
       
    },[url])

    const getCategoryProduct = async ()=>{
        try {
            setPending(true)
            let {data} = await axios.get(url)
            setStateSuggest(data)
        } catch (error) {
            setErorr(error.message)
        }finally{
            setPending(false)
        }
        
    }

 
    return [stateSuggest,setStateSuggest,pending,err]
}

export default CustomHookProductSuggest
