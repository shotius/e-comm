import React, {useState} from "react";
import {Select} from "antd";
import "./index.css";
import {useDispatch} from "react-redux";
import {fetchProducts} from "../../../redux/actions/productsAction";
import {useParams} from "react-router-dom";

const {Option} = Select;

export default function SortProducts() {
  const [sortBy, setSortBy] = useState(null);
  const {category} = useParams();
  const dispatch = useDispatch();

  const handleSelect = (value) => {
    console.log(value,'value');
    setSortBy(value);
    dispatch(fetchProducts(category, null, value));
  }
  console.log(sortBy, 'sortBy');
  return (
    <div className="sort-by">
      <h3>Sort By</h3>
      <Select
        style={{width: 120}}
        onSelect={handleSelect}
        defaultValue={sortBy}
        allowClear
      >
        <Option value="relevance">Relevance</Option>
        <Option value="price">Price</Option>
      </Select>
    </div>
  )
}