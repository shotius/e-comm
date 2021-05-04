import React from "react";
import Slider from "../modules/components/Slider";
import Categories from "../modules/components/Categories";
import Products from "../modules/components/ProductCards";
import Pagination from "../modules/components/Pagination";

export const Home = () => {
  return <>
    <Slider/>
    <Categories/>
    <div className="container" style={{border: "2px solid #eee"}}>
      <Products category=""/>
      <Pagination/>
    </div>
  </>

}
