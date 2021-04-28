import React, {useEffect} from "react"
import {Card, Col} from "antd";
import {useSelector} from "react-redux";
import {fetchProducts} from "../../../redux/actions/productsAction";
import {useDispatch} from "react-redux";

import "./index.css"
import Spinner from "../Spinner";

const {Meta} = Card;

const Products = ({category}) => {
  const dispatch = useDispatch();
  console.log("Products")
  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [category, dispatch])

  const {products, productsFetchLoading} = useSelector(state => state.productsReducer);
  return productsFetchLoading ? <Spinner /> : products.map((product, i) => (<Col xs={24} sm={12} md={8} lg={6} key={i}>
      <Card className="product-item" cover={
        <img
          alt="product picture"
          src={product.image}
        />
      }>
        <Meta
          title={product.title}
          description={`Price: ${product.price}`}
        />
      </Card>
    </Col>)
  )
}

export default Products;
