import React, {useEffect, useState} from "react"
import {useSelector} from "react-redux";
import {message, Form, Input, InputNumber, Modal, Select, Button} from "antd";
import {useDispatch} from "react-redux";
import {addProduct, closeAddProductModal} from "../../../redux/actions/addProductActions";
import {Link} from "react-router-dom";
import {CloudUploadOutlined} from "@ant-design/icons";
import "./index.css"
import {Upload} from "antd";
import {beforeImageUpload} from "../../../utils/Shared/imgUpload";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const {TextArea} = Input;
const {Option} = Select;

const AddProduct = () => {
  const [selectedImg, setSelectedImg] = useState([{
    uid: "-1",
    name: "no-img.png",
    status: "done",
    url: "https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png",
    thumbUrl: "https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png"
  }]);
  const [form] = Form.useForm();


  const dispatch = useDispatch();
  const {isModalOpen, addProductLoading} = useSelector(state => state.addProductReducer);
  const userId = useSelector(state => state.authReducer.user.sub);

  const handleSubmit = () => {
    form
      .validateFields()
      .then(values => {
        console.log(values, 'valueees');
        const image = selectedImg[0].thumbUrl;
        dispatch(addProduct({...values, image, userId,}));
        form.resetFields();
        dispatch(closeAddProductModal())
      })
      .catch(error => {
        console.log(error, 'failed')
      })
  }

  const handleCancel = () => {
    dispatch(closeAddProductModal())
  }

  const handleImgChange = (info) => {
    let fileList = [...info.fileList]
    fileList = fileList.slice(-1)
    setSelectedImg(fileList);
  }

  const beforeImgUpload = (file) => {
    const [status, errors] = beforeImageUpload(file);
    errors.forEach(err => {
      message.error(err)
    })
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
        label="Brand"
        name="brand"
        rules={[
          {
            required: true,
            message: 'Please input product brand!',
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
          <Option value="laptops">Laptop</Option>
          <Option value="smartphones">Smartphone</Option>
          <Option value="home-appliances">Home Appliances</Option>
          <Option value="kitchen-appliances">Kitchen Appliance</Option>
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
        <ReactQuill theme="snow" />
      </Form.Item>

      <Form.Item
        label="Picture"
        rules={[
          {
            required: true,
            message: 'Please upload product picture!',
          },
        ]}
      >
        <Upload
          name="picture"
          listType="picture"
          showUploadList={true}
          beforeUpload={beforeImgUpload}
          onChange={handleImgChange}
          fileList={[...selectedImg]}
        >
          <Button icon={<CloudUploadOutlined/>}>Upload Image</Button>
        </Upload>
      </Form.Item>

    </Form>
  </Modal>
}

export default AddProduct;