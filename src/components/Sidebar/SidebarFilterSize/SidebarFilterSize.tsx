import React from 'react'
import "./SidebarFilterSize.style.scss"
const SidebarFilterSize = () => {
    return (
        <div className="sidebar__sizing py-4">
        <p > انداره</p>

    <select name="filter-size">
        <option value="">همه</option>
         <option value="X"  >X</option>
         <option  value="XL" >XL</option>
         <option  value="M" >M</option>
         <option  value="L" >L</option>
         <option  value="XS" >XS</option>
         <option value="S"  >S</option>
      </select>

      </div>
    )
}

export default SidebarFilterSize
