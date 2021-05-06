import React, {useEffect} from "react"
import {Row} from "antd";
import {useSelector} from "react-redux";
import {fetchProducts, } from "../../../redux/actions/productsAction";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../redux/actions/cartActions";
import ProductCard from '../Shared/ProductCard'
import "./index.css"
import Spinner from "../Shared/Spinner";
import SortProducts from "../SortProducts";
import {useParams} from "react-router-dom";
import {useQuery} from "../../../hooks/useQuery";


const Products = ({category}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.user);
  const params = useParams();
  const query = useQuery();

  const {products, productsFetchLoading} = useSelector(state => state.productsReducer);
<<<<<<< main

=======
>>>>>>> main
  useEffect(() => {
    let filters = {}
    for (const i of query.keys())
      filters[i] = query.get(i);

    dispatch(fetchProducts(category, filters, null, params.page));
  }, [params.page, query.toString()])

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
