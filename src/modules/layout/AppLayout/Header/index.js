import React, { useState, useRef } from "react";
import { Col, Row, Input, Space, Dropdown, Menu, Button } from "antd";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import {
  ShoppingCartOutlined,
  MenuOutlined,
  SearchOutlined,
  PlusCircleOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import logo from "../../../../assets/logo.png";
import "./index.css";

import { logOut } from "../../../../redux/actions/authActions";
import { openAddProductModal } from "../../../../redux/actions/addProductActions";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [menuIsSmall, setMenuIsSmall] = useState(true);
  const searchValue = useRef()

  const menu = (
    <Menu>
      <Menu.Item
        key="0"
        onClick={() => {
          setMenuIsSmall(true);
          dispatch(openAddProductModal());
        }}
      >
        <PlusCircleOutlined style={{fontSize: "16px"}}/> Add a New Product
      </Menu.Item>
      <Menu.Item key="1" onClick={() => dispatch(logOut())}>
        <LogoutOutlined style={{fontSize: "16px"}}/> Log Out
      </Menu.Item>
    </Menu>
  );

  const redirectToResult = () => {
    searchValue.current.blur()
    history.push(`/search/${searchValue.current.state.value}`)
  }
  return (
    <div>
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <Row type="flex" justify="end" align="middle" className="row">
        <Col pull={1} className="col col-3">
          <Space size="middle">
            {/* search field */}
            <div className="search-container">
              <Input 
                ref={searchValue}
                className="search-field"
                onPressEnter={redirectToResult}
                />
              <Button 
                className="search-buton" 
                onClick={redirectToResult}  
                >
                <SearchOutlined />
              </Button>
            </div>
            {/* links */}
            <div className="icon-container">
              <Link to="/basket">
                <ShoppingCartOutlined className="icon-basket icon" />
              </Link>
            </div>
            <div className="icon-container">
              <Dropdown overlay={menu} trigger={["click"]}>
                <MenuOutlined
                  className={`icon-menu icon ${menuIsSmall ? "" : "large"}`}
                  onClick={() => setMenuIsSmall(!menuIsSmall)}
                />
              </Dropdown>
            </div>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
