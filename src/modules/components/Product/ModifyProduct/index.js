import React from "react";
import {Button} from "antd";

const ModifyProduct = ({confirmDeleteModal, id}) => {
  return <div className="product-modify">
    <Button>Edit</Button>
    <Button danger onClick={() => confirmDeleteModal(id)}>Delete</Button>
  </div>
}

export default ModifyProduct;