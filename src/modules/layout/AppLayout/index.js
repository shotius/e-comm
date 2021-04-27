import React from "react";
import {Layout} from "antd";
import Header from "./Header";

const {Content, Footer} = Layout;

const AppLayout = ({children}) => {

  return (
    <Layout className="site-layout">
      <Header />
      <Content className="content-holder">
        {children}
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default AppLayout;