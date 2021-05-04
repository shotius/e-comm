import React from "react";
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {openAddProductModal, setNowEditing} from "../../../../redux/actions/itemActions";



const ModifyProduct = ({confirmDeleteModal, product}) => {
  const dispatch = useDispatch()

  const handleClick = (product) => {
    dispatch(setNowEditing(product));
    dispatch(openAddProductModal());
  }

  return <div className="product-modify">
    <Button onClick={() => handleClick(product)}>Edit</Button>
    <Button danger onClick={() => confirmDeleteModal(product.id)}>Delete</Button>
  </div>
}

export default ModifyProduct;