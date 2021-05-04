import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import AddProduct from "../../components/AddProduct";
import Footer from './Footer'
import './index.css'

const { Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout className='app-layout'>
      <Header />
      <Content>{children}</Content>
      <AddProduct />
      <Footer />
    </Layout>
  );
};

export default AppLayout;
