import React, {useEffect} from "react"
import {Button, Card, Col, Row} from "antd";
import {useSelector} from "react-redux";
import {fetchProducts, setCurrentCategory} from "../../../redux/actions/productsAction";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {addToCart} from "../../../redux/actions/cartActions";

import "./index.css"
import Spinner from "../Spinner";
import SortProducts from "../../../SortProducts";


const Products = ({category}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.user);

  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [])

  const {products, productsFetchLoading} = useSelector(state => state.productsReducer);

  if (productsFetchLoading) {
    return <Spinner/>
  }

  return (
    <>
      <SortProducts/>
      <Row gutter={[12, 12]} style={{padding: "13px"}}>
        {
          products.map((product, i) => {
              return <Col xs={24} sm={12} md={8} lg={6} key={i}>
                <Card className="product-item" cover={
                  <img
                    alt="product picture"
                    className="product-picture"
                    src={product.image}
                  />
                }>
                  <div className="product-details">
                    <Link to={`/products/${product.category}/${product.id}`}
                          className="product-title">{product.title}</Link>
                    <p className="product-price">$ {product.price}</p>
                    <Button type="primary" className="product-button" onClick={() => {
                      const {userId, ...pr} = product;
                      dispatch(addToCart(pr, user))
                    }
                    }>Add to Cart</Button>
                  </div>

                </Card>
              </Col>
            }
          )
        }
      </Row>
    </>
  )
}

export default Products;
