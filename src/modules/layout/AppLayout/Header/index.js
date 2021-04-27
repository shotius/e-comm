import React from "react";
import {Col, Row, Button, Input} from "antd";
import logo from '../../../../assets/logo.png'
import '/home/shoutius/e-comm/src/modules/layout/AppLayout/Header/index.css'
import { logOut } from '/home/shoutius/e-comm/src/redux/actions/authActions.js'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()

  return (
      <Row type="flex"   align="middle" style={{height: "70px", background: 'black'}} >
        <Col span={2 }>
          <img src={logo} className="logo" alt="logo" />
        </Col>
        <Col span={13}>
          <Input /> 
        </Col>
        <Col span={8}>
          <Button className="logout" onClick={() => dispatch(logOut())}>Log Out</Button>
        </Col>
      </Row>
  )
}


export default Header;