import React, {useEffect} from "react"
import {Button, Card, Col, Row} from "antd";
import {useSelector} from "react-redux";
import {fetchProducts} from "../../../redux/actions/productsAction";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {addToCart} from "../../../redux/actions/cartActions";

import "./index.css"
import Spinner from "../Spinner";

const {Meta} = Card;

const Products = ({category}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.user);

  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [])

  const {products, productsFetchLoading} = useSelector(state => state.productsReducer);
  return productsFetchLoading ? <Spinner/> :
    <Row gutter={[8, 8]} style={{padding: "13px"}}>{products.map((product, i) => (
      <Col xs={12} sm={8} md={6} lg={4} key={i}>
        <Card className="product-item" cover={
          <img
            alt="product picture"
            src={product.image}
          />
        }>
          <Meta
            title=<Link to={`/products/${product.category}/${product.id}`}>{product.title}</Link>
          description={`Price: ${product.price}`}
          style={{width: "100%"}}
          />
          <Button type="primary" style={{marginTop: "15px"}} onClick={() => {
            const {userId, ...pr} = product;
            dispatch(addToCart(pr, user))
          }
          }>Add to Cart</Button>
        </Card>
      </Col>)
    )}</Row>
}

export default Products;
