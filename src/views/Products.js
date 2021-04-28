import React from "react";
import Slider from "../modules/components/Slider";
import ProductsFilter from "../modules/components/ProductsFilter";




export const Products = () => {
  return <>
    <Slider />
    <div className="container">
      <ProductsFilter />

    </div>
  </>

}
