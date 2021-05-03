import React from "react";
import Slider from "../modules/components/Slider";
import Categories from "../modules/components/Categories";
import Products from "../modules/components/ProductCards";


export const Home = () => {
  return <>
    {/*{!currentCategory && <Slider />}*/}
    <Slider />

      <Categories />
    <div className="container" style={{border: "2px solid #eee"}}>
      {/*<ProductsFilter />*/}
      <Products category="" />
    </div>
  </>

}
