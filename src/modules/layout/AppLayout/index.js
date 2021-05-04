import React from "react";
import { Layout } from "antd";
import Header from "./Header";

import Footer from './Footer'
import './index.css'
import AddProduct from "../../components/ProductModal";


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
