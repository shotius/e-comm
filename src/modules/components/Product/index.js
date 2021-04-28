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

  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [])

  const {products, productsFetchLoading} = useSelector(state => state.productsReducer);
  return productsFetchLoading ? <Spinner /> : products.map((product, i) => (<Col xs={12} sm={8} md={6} lg={4} key={i}>
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
