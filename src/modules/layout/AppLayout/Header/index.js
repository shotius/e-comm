import React from "react";
import { Col, Row, Input, Space, Dropdown, Menu } from "antd";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "../../../../assets/logo.png";
import "./index.css";

import { logOut } from "../../../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openAddProductModal } from "../../../../redux/actions/addProductActions";
const { Search } = Input;

const Header = () => {
  const dispatch = useDispatch();

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={() => dispatch(openAddProductModal())}>
        Add
      </Menu.Item>
      <Menu.Item key="1" onClick={() => dispatch(logOut())}>
        Log Out
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ position: "relative" }}>
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <Row type="flex" justify="end" align="middle" className="row">
        <Col pull={1} className="col col-3">
          <Space size="large">
            <Search className="search" />
            <Link to="/basket">
              <ShoppingCartOutlined className="icon" />
            </Link>
            <Dropdown overlay={menu} trigger={["click"]}>
              <MenuOutlined className="icon" style={{ color: "white" }} />
            </Dropdown>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
