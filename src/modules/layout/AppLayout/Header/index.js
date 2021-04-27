import React from "react";
import {Layout, Col, Row, Button} from "antd";
import logo from '../../../../assets/logo.png'

const Header = () => {
  return (
      <Row type="flex" justify="space-between">
        <Col>
          <img src={logo} alt="logo" />
        </Col>
        <Col>
          <Button >Log Out</Button>
        </Col>
      </Row>
  )
}

export default Header;