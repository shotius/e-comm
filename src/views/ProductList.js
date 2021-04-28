import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../redux/actions/productsAction";
import {useParams} from "react-router-dom";
import {Col, Row, Skeleton} from "antd";
import Products from "../modules/components/Product";


export const ProductList = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const {productsFetchLoading} = useSelector(state => state.productsReducer);

  useEffect(() => {
    dispatch(fetchProducts(params.category));
  }, [])

  return <Skeleton active loading={productsFetchLoading}>
    <Row>
      <Products />
    </Row>
    </Skeleton>

  
}