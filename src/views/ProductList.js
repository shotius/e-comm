import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../redux/actions/productsAction";
import {useParams} from "react-router-dom";


export const ProductList = () => {
  const params = useParams();

  console.log(params)
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.productsReducer);

  useEffect(() => {
    dispatch(fetchProducts(''));
  }, [])

  return <div>{JSON.stringify(products)}</div>
  
}