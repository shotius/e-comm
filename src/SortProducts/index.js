import React from "react";
import {Select} from "antd";

const {Option} = Select;

export default function SortProducts() {
  const handleChange = (value) => {
    console.log(value)
  }
  return (
    <div className="sort-by">
      <h3>Sort By</h3>
      <Select defaultValue="" style={{width: 120}} onChange={handleChange}>
        <Option value="relevance">Relevance</Option>
        <Option value="price">Price</Option>
      </Select>
    </div>
  )
}