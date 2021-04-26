import React from "react";
import {Form, Input, Button} from 'antd';
import "./index.css"
import {Link} from "react-router-dom";

export const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
        Sign In
      </Button>
      <p>
        <small>Need an account?</small> <Link to="/register">Register Now</Link>
      </p>
    </Form.Item>
  </Form>

}

