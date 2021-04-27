import React from "react";
import {Form, Input, Button} from 'antd';
import "./index.css"
import { Link, useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/actions/authActions'

export const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  
  const onFinish = (values) => {
    dispatch(loginUser(values))
  };

  return<Form
    className="auth-form"
    name="login"
    onFinish={onFinish}
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
        Sign In
      </Button>
      <p>
        <small>Need an account?</small> <Link to="/register">Register Now</Link>
      </p>
    </Form.Item>
  </Form>

}

