import React from "react";
import Slider from "../modules/components/Slider";
import ProductsFilter from "../modules/components/ProductsFilter";
import Categories from "../modules/components/Categories";




export const Products = () => {
  return <>
    <Slider />
    <div className="container">
      {/*<ProductsFilter />*/}
      <Categories />
    </div>
  </>

}
