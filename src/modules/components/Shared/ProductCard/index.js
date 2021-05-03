import React from 'react'
import {Link} from "react-router-dom";
import { Col, Card, Button} from 'antd'

const ProductCard = ({ product, user, dispatch, addToCart }) => {
    const style= {
        width: '40px',
        whiteSpace: "wrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    }

    return (
        <Col xs={24} sm={12} md={8} lg={6} >
            <Card className="product-item" cover={
              <img
                alt="product picture"
                className="product-picture"
                src={product.image}
              />
            }>
              <div className="product-details">
                    <Link 
                        to={`/products/${product.category}/${product.id}`} 
                        className="product-title"
                        >
                            {product.title}
                    </Link>
                <p className="product-price">$ {product.price}</p>
                <Button type="primary" className="product-button" onClick={() => {
                  const {userId, ...pr} = product;
                  dispatch(addToCart(pr, user))
                }
                }>Add to Cart</Button>
              </div>
    
            </Card>
          </Col>
    )
}
export default ProductCard