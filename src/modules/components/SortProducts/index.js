import React from "react";
import {Select} from "antd";
import "./index.css";
import {useDispatch} from "react-redux";
import {fetchProducts} from "../../../redux/actions/productsAction";
import {useParams} from "react-router-dom";

const {Option} = Select;

export default function SortProducts() {
  const {category} = useParams()
  const dispatch = useDispatch()

  const handleChange = (value) => {
    dispatch(fetchProducts(category, null, value))
  }

  return (
    <div className="sort-by">
      <h3>Sort By</h3>
      <Select defaultValue="relevance" style={{width: 120}} onChange={handleChange}>
        <Option value="relevance">Relevance</Option>
        <Option value="price">Price</Option>
      </Select>
    </div>
  )
}