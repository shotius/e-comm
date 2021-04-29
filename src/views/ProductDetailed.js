import React from "react";
import {Layout} from "antd";
import {useParams} from "react-router-dom";
import Product from "../modules/components/Product";


const {Content} = Layout;

export const ProductDetailed = () => {
  const {id} = useParams();



  return <Layout>
    <Content>
        <Product id={id} />
    </Content>
  </Layout>
}