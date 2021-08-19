import React from 'react'
interface ISidebarFilterProduct{
    lable:string
    name:string
    
}
const SidebarFilterProduct:React.FC<ISidebarFilterProduct> = ({lable="",name=""}) => {
    const [filterd,setFilterd] = React.useState<any>({
        LC:false,
        Fiorlla:false,
        Baleno:false,
        Eloj:false
    })
   const  handleFilterBrand =(e:any) =>{
       setFilterd({...filterd,[e.target.name]:e.target.checked})
   }

   React.useEffect(()=>{
         console.log(filterd)
   },[filterd])
    return (
          <div className="input-group d-flex align-items-center justify-content-between">
                 <label htmlFor={name}><small>{lable}</small></label>
                 <input onClick={(e)=>handleFilterBrand(e)}  type="checkbox" name={name} id={name} />
          </div>
    )
}

export default SidebarFilterProduct
