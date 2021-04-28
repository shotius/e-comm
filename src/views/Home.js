import React from "react";
import Slider from "../modules/components/Slider";
import Categories from "../modules/components/Categories";
import {useSelector} from "react-redux";


export const Home = () => {
  return <>
    {/*{!currentCategory && <Slider />}*/}
    <Slider />
    <div className="container">
      {/*<ProductsFilter />*/}
      <Categories />
      {/*<ProductList />*/}
    </div>
  </>

}
