import React from 'react'
import { Modal,Button } from 'react-bootstrap';
interface ICartPageModaleRemove{
    show:boolean
    onHide:Function
    onClick:Function
}
const CartPageModalRemove:React.FC<ICartPageModaleRemove> = ({show,onHide,onClick}) => {
    return (
        <Modal
      show={show}
      onHide={()=>onHide()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className=" dialog-container"
    //   style={{width:"40rem",marginRight: "6rem"}}
    >
      <Modal.Header className="m-0" closeButton>
        <Modal.Title style={{ width: "90%",display: "flex",justifyContent: "center"}} id="contained-modal-title-vcenter" className="m-auto mt-4">
           حذف کالا
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="m-auto">
       
        <p className="text__remove">
         آیا از حذف این کالا مطمعنی؟
        </p>
      </Modal.Body>
      <Modal.Footer className="m-auto mb-5">
        <Button className="btn__remove" onClick={()=>onClick()}>حذف</Button>
        <Button className="btn__cancel" onClick={()=>onHide()}>انصراف</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CartPageModalRemove
