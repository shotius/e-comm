import React, {useEffect} from "react"
import {Pagination, Row} from "antd";
import {useSelector} from "react-redux";
import {fetchProducts, setCurrentCategory} from "../../../redux/actions/productsAction";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../redux/actions/cartActions";
import ProductCard from '../Shared/ProductCard'

import "./index.css"
import Spinner from "../Shared/Spinner";
import SortProducts from "../SortProducts";
import {useParams} from "react-router-dom";

const Products = ({category}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.user);
  const {page} = useParams();

  const {products, productsFetchLoading} = useSelector(state => state.productsReducer);

  useEffect(() => {
    dispatch(fetchProducts(category, null, null, page));
  }, [page])

  return (
    <>
      <SortProducts/>
      {productsFetchLoading ? <Spinner/> : <Row gutter={[12, 12]} style={{padding: "13px"}}>
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
      </Row>}
    </>
  )

}

export default Products;
