import React from "react";
import Layout from "antd";
import Header from "../../components/Header";

const {Content} = Layout;

const AppLayout = ({children}) => {
  return <Layout classname="site-layout">
    <Header />
    <Content classname="content-holder">
      {children}
    </Content>
  </Layout>
}

export default AppLayout;