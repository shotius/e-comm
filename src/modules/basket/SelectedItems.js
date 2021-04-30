import React, { useState, useEffect } from "react";
import { Card } from "antd";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { fetchBasketProducts } from "../../redux/actions/basketActions";

export const SelectedItems = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basketReducer.products);
  const [itemsInBasket, setItemsInBasket] = useState([]);

  // to get products on the basket page we need to fetch it from db
  useEffect(() => {
    dispatch(fetchBasketProducts());
  }, [dispatch]);

  // save products from db in local variable
  useEffect(() => {
    const data = basketItems.map((item) => item.product);
    setItemsInBasket(data);
  }, [basketItems]);

  return (
    <Card
      bordered={true}
      title={`Cart (${itemsInBasket.length} items)`}
      className="cart-list"
    >
      {itemsInBasket.map((item, index) => (
        <div key={index}>
          <Product item={item} />
          <hr className="line" />
        </div>
      ))}
    </Card>
  );
};
export default SelectedItems;
