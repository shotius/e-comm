import React from "react";
import {useParams} from "react-router-dom";
import {Layout, Row} from "antd";
import Products from "../modules/components/Product";
const {Content} = Layout;


export const ProductList = () => {
  console.log('ProductList')
  const params = useParams();

  return <Layout>
    <Content>
      <Row>
          <Products category={params.category} />
      </Row>
    </Content>
  </Layout>



  
}