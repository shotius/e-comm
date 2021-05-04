import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Row } from 'antd'
import { addToCart } from '../../../redux/actions/cartActions'
import ProductCard from '../Shared/ProductCard'


const ProductsList = ({ products }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.user);
    
    return (
       <>
            {
                products.length === 0
                    ? <h2>No results found</h2>
                    : (
                        <Row gutter={[12, 12]} style={{padding: "13px"}}>
                        {
                            products.map((product, i) => (
                                <ProductCard 
                                    key={i}
                                    product={product} 
                                    user={user}
                                    dispatch={dispatch}
                                    addToCart={addToCart}
                                    /> 
                            ))
                        }
                    </Row>
                    )
            }
       </>
    )
}
export default ProductsList