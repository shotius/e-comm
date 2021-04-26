import React from "react";
import {Layout, Card} from "antd";
import "./index.css";

const {Content} = Layout;

const AuthLayout = ({children}) => {
  return (
    <Layout style={{minHeight: "100vh"}} >
      <Content className="auth-layout-content">
        <Card bordered={true} className="auth-layout-card">
          {children}
        </Card>
      </Content>
    </Layout>
  )
}

export default AuthLayout;