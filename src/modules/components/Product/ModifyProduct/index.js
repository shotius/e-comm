import React from "react";
import {Button, Col} from "antd";

const ModifyProduct = ({confirmDeleteModal, id}) => {
  return <div className="product-modify">
    <Button primary>Edit</Button>
    <Button type="primary" danger onClick={() => confirmDeleteModal(id)}>Delete</Button>
  </div>
}

export default ModifyProduct;