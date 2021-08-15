import React from 'react'
interface ISidebarFilterProduct{
    lable:string
    name:string
}
const SidebarFilterProduct:React.FC<ISidebarFilterProduct> = ({lable="",name=""}) => {
    return (
          <div className="input-group d-flex align-items-center justify-content-between">
                 <label htmlFor={name}><small>{lable}</small></label>
                 <input type="checkbox" name={name} id={name} />
          </div>
    )
}

export default SidebarFilterProduct
