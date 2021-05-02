import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button } from 'antd'
import { addToCart } from '../../../redux/actions/cartActions'
const {Meta} = Card;

const ProductsList = ({ products }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.user);
    
    return (
        <Row gutter={[8, 8]} style={{padding: "13px"}}>
            {
                products.map((product, i) => (
                    <Col xs={12} sm={8} md={6} lg={4} key={i}>
                        <Card 
                            className="product-item" 
                            cover={
                                <img 
                                    alt="product picture" 
                                    src={product.image}
                                    />
                            }
                            >
                            <Meta
                                title=<Link to={`/products/${product.category}/${product.id}`}>{product.title}</Link>
                                description={`Price: ${product.price}`}
                                style={{width: "100%"}}
                                />
                            <Button type="primary" style={{marginTop: "15px"}} onClick={() => dispatch(addToCart(product, user))}>Add to Cart</Button>
                        </Card>
                    </Col>)
          )}
        </Row>
    )
}
export default ProductsList