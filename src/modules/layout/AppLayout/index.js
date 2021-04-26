import React from "react";
import {Layout} from "antd";
import Header from "../../components/Header";

const {Content, Footer} = Layout;

const AppLayout = ({children}) => {
  return <Layout classname="site-layout">
    <Header />
    <Content classname="content-holder">
      {children}
    </Content>
    <Footer>Footer</Footer>
  </Layout>
}

export default AppLayout;