import React, {useState} from "react";
import {Select} from "antd";
import "./index.css";
import {useDispatch} from "react-redux";
import {fetchProducts} from "../../../redux/actions/productsAction";
import {useParams} from "react-router-dom";

const {Option} = Select;

export default function SortProducts() {
  const [sortBy, setSortBy] = useState('relevance');
  const {category} = useParams();
  const dispatch = useDispatch();
  const {page} = useParams();

  const handleSelect = (value) => {
    setSortBy(value);
    dispatch(fetchProducts(category, null, value, page));
  }

  return (
    <div className="sort-by">
      <h3>Sort By</h3>
      <Select
        style={{width: 120}}
        onSelect={handleSelect}
        defaultValue={sortBy}
      >
        <Option value="relevance">Relevance</Option>
        <Option value="price">Price</Option>
      </Select>
    </div>
  )
}