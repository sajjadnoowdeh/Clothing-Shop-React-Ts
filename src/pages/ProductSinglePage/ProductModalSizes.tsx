import React from 'react'
import { Modal,Table,Button } from 'react-bootstrap'
import {IProduct} from "../../interface"
import "./ProductSinglePage.style.scss"
interface IProductModal{
        show:boolean
        onHide:Function
        product:IProduct | undefined
}
const ProductModalSizes:React.FC<IProductModal> = ({show,onHide,product}):JSX.Element => {
    return (
        <>
        <Modal
        show={show}
        onHide={()=>onHide()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <ul>
              <li>در نظر داشته باشید محدوده ی خطای اندازه گیری بین 1 تا 2 سانتیمتر نرمال است.</li>
              <li>اعداد بر حسب سانتی‌متر می باشد.</li>
          </ul>
          <Table striped bordered hover className="mt-4" >
    <thead>
      <tr>
        <th>سایز</th>
        <th>قد</th>
        {product?.waist && <th>دور کمر </th>}
        {product?.roundShip && <th>دور باسن</th>}  
        {product?.aroundChest && <th>دور سینه</th>}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{product?.size}</td>
        <td>{product?.height}</td>
        {product?.waist && <td>{product?.waist}</td>} 
         {product?.roundShip && <td>{product.roundShip}</td>}
        {product?.aroundChest && <td>{product?.aroundChest}</td>} 
      </tr>
     
    </tbody>
  </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>onHide()}>Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}

export default ProductModalSizes
