import React from "react";
import {Col, Row, Button, Input, Space, Dropdown, Menu} from "antd";
import  {ShoppingCartOutlined, UserOutlined} from '@ant-design/icons';
import logo from '../../../../assets/logo.png'
import './index.css';
import { logOut } from '/home/shoutius/e-comm/src/redux/actions/authActions.js'
import { useDispatch } from 'react-redux'
const { Search } = Input;

const Header = () => {
  const dispatch = useDispatch()


const menu = (
  <Menu>
    <Menu.Item key="0">Profile</Menu.Item>
    <Menu.Item key="1"onClick={() => dispatch(logOut())}>Log Out</Menu.Item>

  </Menu>
);

  return (
    <div >
      <img src={logo} className="logo" alt="logo" />
      <Row type="flex" justify="end"  align="middle" className="row" >
        <Col pull={1} className="col col-3" style={{display: "flex"}}>
          <Space size="large">
            <Search className="search"/> 
            <ShoppingCartOutlined className="icon" />
            <Dropdown overlay={menu} trigger={['click']}>
              <UserOutlined className="icon" style={{color: "white"}}/>
            </Dropdown>
          </Space>
        </Col>
      </Row>      
    </div>
  )
}


export default Header;