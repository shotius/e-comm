import React from "react";
import {useParams} from "react-router-dom";
import {Layout, Row} from "antd";
import Products from "../modules/components/ProductCards";
import ProductsFilter from "../modules/components/ProductsFilter";
const {Content} = Layout;


export const ProductList = () => {
  console.log('ProductList')
  const params = useParams();

  return <Layout>
    <Content>
      <ProductsFilter />
      <Row gutter={[8,8]} style={{padding: "13px"}}>
          <Products category={params.category} />
      </Row>
    </Content>
  </Layout>



  
}