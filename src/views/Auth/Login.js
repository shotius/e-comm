import React from "react";
import {Form, Input, Button} from 'antd';
import "./index.css"
import { loginUser } from '../../redux/actions/authActions'
import {useDispatch, useSelector} from 'react-redux'

export const Login = () => {
  const dispatch = useDispatch()
  
  const onFinish = (values) => {
    dispatch(loginUser(values))
  };

  const onFinishFailed = (errorInfo) => {
    // dispatch(loginUser(errorInfo))
  };

  return<Form
    className="auth-form"
    name="login"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password/>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

}

