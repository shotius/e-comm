import React from "react"
import {Col} from "antd";
import {useSelector} from "react-redux";
import "./index.css"

const Products = () => {
  const {products} = useSelector(state => state.productsReducer);
  return products.map((product, i) => {
    console.log(product.image)
    return <Col xs={24} sm={12} md={8} lg={6} key={i}>
      <div className="product-item">
        <img src={product.image} alt="product picture"/>
        <p>{product.title}</p>
        <span>{product.price}</span>
      </div>
    </Col>
  })
}

export default Products;
