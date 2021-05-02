import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import AddProduct from "../../components/ProductModal";

const { Content, Footer} = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout className="site-layout">
      <Header />
      <Content className="content-holder">{children}</Content>
      <AddProduct />
      <Footer >Footer</Footer>
    </Layout>
  );
};

export default AppLayout;
