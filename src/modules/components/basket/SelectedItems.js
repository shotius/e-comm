import React from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";
import Product from "./Product";
import Spinner from '../Spinner'
import "./index.css";

export const SelectedItems = ({ productsInBasket }) => {
  const isLoading = useSelector((state) => state.basketReducer.basketItemsFetchLoading)
  
  return (
    <Card
      bordered={true}
      title={`Cart (${productsInBasket.length} items)`}
      className="cart-list"
    >
      { // when products are fetching spinner will appear
          isLoading 
            ? <Spinner />
            : (
                productsInBasket.map((item, index) => (
                    <div key={index}>
                      <Product item={item} />
                      <hr className="line" />
                    </div>
                  ))
            )
      }
    </Card>
  );
};
export default SelectedItems;
