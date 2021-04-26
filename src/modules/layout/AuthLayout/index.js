import React from "react";
import {Layout, Row, Col} from "antd";

const {Content} = Layout;

const AuthLayout = ({children}) => {
  return (
    <Layout>
      <Content className="auth-layout-content">
        <Row>
          <Col span={8}>
            {children}
          </Col>
        </Row>

      </Content>
    </Layout>
  )
}

export default AuthLayout;