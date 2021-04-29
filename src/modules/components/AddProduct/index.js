import React from "react"
import {useSelector} from "react-redux";
import {Button, Form, Input, InputNumber, Modal, Select} from "antd";
import {useDispatch} from "react-redux";
import {closeAddProductModal} from "../../../redux/actions/addProductActions";
import {Link} from "react-router-dom";
import {CloudUploadOutlined} from "@ant-design/icons";
import "./index.css"
import {Upload} from "antd";

const {TextArea} = Input;
const {Option} = Select;

const AddProduct = () => {
  const [form] = Form.useForm();


  const dispatch = useDispatch();
  const {isModalOpen, addProductLoading} = useSelector(state => state.addProductReducer);

  const handleSubmit = () => {
    form
      .validateFields()
      .then(values => {
        console.log(values, 'success')
      })
      .catch(error => {
        console.log(error, 'failed')
      })
    console.log('Submit button clicked')
  }

  const handleCancel = () => {
    dispatch(closeAddProductModal())
  }

  const handlePictureChange = (info) => {
    console.log(...info.fileList)
  }

  return <Modal
    title="Add a New Product"
    visible={isModalOpen}
    onOk={handleSubmit}
    okText="Add"
    cancelText="Cancel"
    confirmLoading={addProductLoading}
    onCancel={handleCancel}
    width={"auto"}
    style={{maxWidth: "800px"}}
  >
    <Form
      className="add-product-form"
      form={form}
      name="login">
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input product title!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Category"
        name="category"
        rules={[
          {
            required: true,
            message: 'Please input product category!',
          },
        ]}
      >
        <Select style={{width: "100%"}}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"

        rules={[
          {
            required: true,
            message: 'Please input product price!',
          },
        ]}
      >
        <InputNumber min={0} style={{width: "100%"}}/>
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: 'Please input product description!',
          },
        ]}
      >
        <TextArea rows={7}/>
      </Form.Item>

      <Form.Item
        label="Picture"
        name="picture"
        rules={[
          {
            required: true,
            message: 'Please upload product picture!',
          },
        ]}
      >
        <Upload accept="image/png, image/jpeg, image/jpg" onChange={handlePictureChange}>
          <Button icon={<CloudUploadOutlined/>}>Upload</Button>
        </Upload>
      </Form.Item>

    </Form>
  </Modal>
}

export default AddProduct;