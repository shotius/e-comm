import React, {useEffect, useState} from "react";
import {Button, Form, Input, InputNumber, Select, Upload} from "antd";
import ReactQuill from "react-quill";
import {CloudUploadOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";

const {Option} = Select;


const ProductForm = (props) => {
  console.log('form renderred')
  const nowEditing = useSelector(state => state.itemReducer.nowEditing);

  useEffect(() => {
    props.form.setFieldsValue({
      title: nowEditing ? nowEditing.title : null,
      brand: nowEditing ? nowEditing.brand : null,
      category: nowEditing ? nowEditing.category : null,
      price: nowEditing ? nowEditing.price : null,
      description: nowEditing ? nowEditing.description : null,
    })
    if (!nowEditing) {
      props.form.resetFields();
    }
  }, [nowEditing])

  let pic = [...props.selectedImg];

  if (nowEditing) {
    pic = [
      {
        uid: "-1",
        name: "image.png",
        status: "done",
        url: nowEditing.image,
        thumbUrl: nowEditing.image
      }
    ]
  }

  return <Form
    className="add-product-form"
    form={props.form}
    name="product-form"
    initialValues={{

      description: "",
      picture: props.selectedImg
    }}>
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
      <ReactQuill theme="snow"/>
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
        maxCount={1}
        listType="picture"
        showUploadList={true}
        beforeUpload={props.beforeImgUpload}
        onChange={props.handleImgChange}
        fileList={[...pic]}
        disabled={nowEditing}
      >
        <Button icon={<CloudUploadOutlined/>}>Upload Image</Button>
      </Upload>
    </Form.Item>

  </Form>
}

export default ProductForm;