import React, {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../Spinner";
import {Button, Col, Divider, Row} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useHistory} from "react-router-dom";

import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../../redux/actions/cartActions";

const Product = ({id}) => {

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const addToCartLoading = useSelector(state => state.cartReducer.addToCartLoading);
  const user = useSelector(state => state.authReducer.user)

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${process.env.REACT_APP_BASE_URL}/products?id=${id}`)
      .then(response => {
        setProduct(response.data[0]);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false);
      })
  }, [id])

  // const handleAddToCart = () => {
  //
  //
  // }

  return <div className="product-detailed container">
    {isLoading ? <Spinner /> : <Row className="product-detail">
      <Col sm={24} md={10}>
      <button onClick={history.goBack} className="btn-back"><ArrowLeftOutlined /></button>
        <img src={product?.image} alt="picture of product"/>
      </Col>
      <Col sm={24} md={14}>
        <div className="product-content-holder">
          <h2 className="product-title">{product?.title}</h2>
          <p className="product-price">${product?.price}</p>
          <Divider />
          <p className="product-description">{product?.description}</p>
        <Button type={"primary"} loading={addToCartLoading} className="product-btn" onClick={() => dispatch(addToCart(product, user))}>Add to Cart</Button>
        </div>

      </Col>
    </Row>}
  </div>
}

export default Product;