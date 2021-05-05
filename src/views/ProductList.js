import React from "react";
import {useParams} from "react-router-dom";
import {Layout} from "antd";
import Products from "../modules/components/ProductCards";
import ProductsFilter from "../modules/components/ProductsFilter";
import Pagination from "../modules/components/Pagination";
import {useSelector} from "react-redux";
const {Content} = Layout;


export const ProductList = () => {
  const params = useParams();
  const totalCount = useSelector(state => state.productsReducer.totalCount);

  return <Layout className="container">
    <Content>
         <ProductsFilter />

          <Products category={params.category} />
          <Pagination total={totalCount} />
    </Content>
  </Layout>



  
}