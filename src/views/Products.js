import React from "react";
import Slider from "../modules/components/Slider";
import ProductsFilter from "../modules/components/ProductsFilter";
import Categories from "../modules/components/Categories";
import {useSelector} from "react-redux";
import productsReducer from "../redux/reducers/productsReducer";


export const Products = () => {
  const currentCategory = useSelector(state => state.productsReducer.currentCategory);
  return <>
    {!currentCategory && <Slider />}
    <div className="container">
      {/*<ProductsFilter />*/}
      <Categories />
      {/*<ProductList />*/}
    </div>
  </>

}
