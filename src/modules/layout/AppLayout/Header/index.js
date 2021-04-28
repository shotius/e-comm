import React from "react";
import {Col, Row, Button, Input, Space, Dropdown, Menu} from "antd";
import  {ShoppingCartOutlined, UserOutlined} from '@ant-design/icons';
import logo from '../../../../assets/logo.png'
import './index.css';
import { logOut } from '/home/shoutius/e-comm/src/redux/actions/authActions.js'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()


const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

  return (
    <div >
      <img src={logo} className="logo" alt="logo" />
      <Row type="flex" justify="space-around"  align="middle" className="row" >
        <Col xs={9} sm={8} className="col col-2">  
          <Input className="search"/> 
        </Col>
        <Col sm={2} md={2} push={2} className="col col-3" style={{display: "flex"}}>
          <Space size="middle">
            <ShoppingCartOutlined className="icon" />
            <Dropdown overlay={menu} trigger={['click']}>
              <UserOutlined className="icon" style={{color: "white"}}/>
            </Dropdown>
          </Space>
            {/* <Button className="logout" onClick={() => dispatch(logOut())}>Log Out</Button>   */}
        </Col>
      </Row>      
    </div>
  )
}


export default Header;