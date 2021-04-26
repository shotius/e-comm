import React, {useCallback, useRef, useState} from "react";
import {Button, Form, Input, Select} from "antd";
import { Link, useHistory, userHistory } from "react-router-dom";
import { registerUser } from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'

const {Option} = Select;

// matches georgian phone numbers /^[0-9]{3}\s([0-9]{2}\s*)*$/g

export const Register = () => {

  const dispatch = useDispatch()
  const history = useHistory()

   const [inputEmail, setInputEmail] = useState("gmail.com");
   const [inputPhone, setInputPhone] = useState("+995");

  const isValidPhone = useCallback((e) => {
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105) ||
      e.keyCode === 8 ||
      e.keyCode === 190 ||
      e.keyCode === 9
    ) {
      return;
    }
    e.preventDefault();
  }, [])


  const selectAfterEmail = (
    <Select onChange={(e) => setInputEmail(e)} defaultValue="@gmail.com" className="select-after">
      <Option value="@gmail.com">@gmail.com</Option>
      <Option value="@yahoo.com">@yahoo.com</Option>
      <Option value="@sweeft.com">@sweeft.com</Option>
    </Select>
  );

  const selectBeforePhone = (
    <Select defaultValue="+995" onChange={e => setInputPhone(e)} className="select-before">
      <Option value="+995">+995</Option>
    </Select>
  )


  const onFinish = (values) => {
    dispatch(registerUser(values, () => history.push('/login')))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Form Failed:', errorInfo);
  };

  return <Form
    className="auth-form"
    name="login"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    initialValues={{username: "username", name: "name", phone: 123123123, email: "test@gmail.com", password: "1234", confirm_password: "1234"}}
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input maxLength={20}/>
    </Form.Item>

    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Phone"
      name="phone"
      rules={[
        {
          required: true,
          message: 'Please input your phone!',
        },
      ]}
    >
      <Input maxLength={9} onKeyDown={(e) => isValidPhone(e)} addonBefore={selectBeforePhone}/>
    </Form.Item>

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
      <Input addonAfter={selectAfterEmail}/>
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

    <Form.Item
      label="Confirm Password"
      name="confirm_password"
      rules={[
        {
          required: true,
          message: 'Please confirm your password!',
        },
      ]}
    >
      <Input.Password/>
    </Form.Item>


    <Form.Item>
      <Button type="primary" htmlType="submit">
        Sign Up
      </Button>
      <p>
        <small>Already have an account?</small> <Link to="/login">Sign In Now</Link>
      </p>
    </Form.Item>
  </Form>
}