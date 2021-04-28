import React from "react";
import {Col, Row, Button, Input, Space, Dropdown, Menu} from "antd";
import {ShoppingCartOutlined, UserOutlined} from '@ant-design/icons';
import logo from '../../../../assets/logo.png'
import './index.css';
import {logOut} from '../../../../redux/actions/authActions'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

const {Search} = Input;

const Header = () => {
  const dispatch = useDispatch()


  const menu = (
    <Menu>
      <Menu.Item key="0">Profile</Menu.Item>
      <Menu.Item key="1" onClick={() => dispatch(logOut())}>Log Out</Menu.Item>
    </Menu>
  );


  return (
    <div style={{position: "relative"}}>
      <Link to="/"><img src={logo} className="logo" alt="logo"/></Link>
      <Row type="flex" justify="end" align="middle" className="row">
        <Col pull={1} className="col col-3">
          <Space size="large">
            <Search className="search"/>
            <Link to='/basket'>
              <ShoppingCartOutlined className="icon"/>
            </Link>
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