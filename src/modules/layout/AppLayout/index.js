import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import AddProduct from "../../components/AddProduct";
import Footer from "./Footer";

const { Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout className="site-layout">
      <Header />
      <Content className="content-holder">{children}</Content>
      <AddProduct />
      <Footer />
    </Layout>
  );
};

export default AppLayout;
