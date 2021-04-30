import React, { useState } from "react";
import {Col, Row,Input, Space, Dropdown, Menu, Button} from "antd";
import {ShoppingCartOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';
import logo from '../../../../assets/logo.png'
import './index.css';

import { logOut } from '../../../../redux/actions/authActions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
const { Search } = Input;


const Header = () => {
  const dispatch = useDispatch()
  const [menuIsSmall, setMenuIsSmall] = useState(true)

  const menu = (
    <Menu>
      <Menu.Item key="0">Profile</Menu.Item>
      <Menu.Item key="1" onClick={() => dispatch(logOut())}>Log Out</Menu.Item>
    </Menu>
  );


  return (
    <div >
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <Row type="flex" justify="end"  align="middle" className="row" >
        <Col pull={1} className="col col-3">
          <Space size="large">
            {/* search field */}
            <div className="search-container">
              <Input className="search-field" />
              <Button className="search-buton" style={{border: 'none'}}><SearchOutlined/></Button>
            </div>
            {/* links */}
            <Link to='/basket'>
              <ShoppingCartOutlined className="icon"/>
            </Link>
            <Dropdown overlay={menu} trigger={['click']}>
              <MenuOutlined 
                className={`icon ${menuIsSmall ? 'small' : 'large'}`} 
                onClick={() => setMenuIsSmall(!menuIsSmall)}
                // onMouseOut={() => setMenuIsSmall(true)}
                />
            </Dropdown>
          </Space>
        </Col>
      </Row>
    </div>
  )
}


export default Header;