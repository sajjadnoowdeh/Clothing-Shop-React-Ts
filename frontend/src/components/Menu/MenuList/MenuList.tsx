import React from 'react'
import { Link } from 'react-router-dom';
interface IMenuList{
    link:string
    title:string
}
interface IDataList{
    data:IMenuList[]
}
const MenuList:React.FC<IDataList> =({data}):JSX.Element => {
    return (
        <>
        {
         data.map((item:IMenuList,index:number)=>(
            <li key={index} className="list-unstyled">
              <Link to={item.link}>{item.title}</Link>
            </li>
         ))
        }
    </>
        
           
    ) 
    
}

export default MenuList
