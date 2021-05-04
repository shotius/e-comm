import React from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";
import Product from "./Product";
import Spinner from '../Shared/Spinner'
import "./index.css";

export const SelectedItems = ({ basketProducts }) => {
  const isLoading = useSelector((state) => state.basketReducer.basketItemsFetchLoading)
  
  return (
    <Card
      bordered={true}
      title={`Cart (${basketProducts.length} items)`}
      className="cart-list"
    >
      { // when products are fetching spinner will appear
          isLoading 
            ? <Spinner />
            : (
              basketProducts.map((item, index) => (
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
