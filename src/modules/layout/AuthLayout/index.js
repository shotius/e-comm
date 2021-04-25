import React from "react";
import {Layout} from "antd";

const {Content} = Layout;

const AuthLayout = ({children}) => {
  return (
    <Layout>
      <Content className="auth-layout-content">
        {children}
      </Content>
    </Layout>
  )
}

export default AuthLayout;