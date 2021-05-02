import React, {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../Spinner";
import {Button, Col, Divider, Modal, Row} from "antd";
import {ArrowLeftOutlined, ExclamationCircleOutlined} from "@ant-design/icons";
import {useHistory} from "react-router-dom";

import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../../redux/actions/cartActions";
import {deleteProduct} from "../../../redux/actions/productsAction";
import ModifyProduct from "./ModifyProduct";
// import DeleteModal froom "./DeleteModal"
const {confirm} = Modal;
const Product = ({id}) => {

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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


  function confirmDeleteModal(id) {
    confirm({
      title: "Do you want to delete this item?",
      icon: <ExclamationCircleOutlined/>,
      onOk() {
        dispatch(deleteProduct(id))
        history.goBack()
      },
      onCancel() {
      }
    });
  }

  console.log(user)
  console.log(product);


  return <div className="product-detailed container">
    {isLoading ? <Spinner/> : <Row className="product-detail">
      <Col sm={24} md={10} className="product-col-1">
        <button onClick={history.goBack} className="btn-back"><ArrowLeftOutlined/></button>
        <img src={product.image} alt="picture of product"/>
      </Col>
      <Col sm={24} md={14}>
        {user.sub === product.userId ? <ModifyProduct confirmDeleteModal={confirmDeleteModal} id={product.id}/> : null}
        <div className="product-content-holder">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">${product.price}</p>
          <Divider/>
          <p className="product-description" dangerouslySetInnerHTML={{
            __html: product.description
          }}/>
          <Button type={"primary"} loading={addToCartLoading} className="product-btn" onClick={() => {
            const {userId, ...pr} = product;
            dispatch(addToCart(pr, user))
          }
          }>Add to Cart</Button>
        </div>

      </Col>
    </Row>}
  </div>
}

export default Product;