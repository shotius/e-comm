import React from "react";
import {Layout, Menu} from "antd";

const {Header: LayoutHeader} = Layout;

const Header = () => {
  return <LayoutHeader>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">Products</Menu.Item>
      <Menu.Item key="3">About</Menu.Item>
    </Menu>
  </LayoutHeader>
}

export default Header;