import React, {useEffect} from "react"
import { Row } from "antd";
import {useSelector} from "react-redux";
import {fetchProducts, setCurrentCategory} from "../../../redux/actions/productsAction";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../redux/actions/cartActions";
import ProductCard from '../Shared/ProductCard'

import "./index.css"
import Spinner from "../Spinner";
import SortProducts from "../SortProducts";

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
    <SortProducts />
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
  </>
  )

}

export default Products;
