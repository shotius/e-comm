import React, {useEffect, useState} from "react";
import {Select} from "antd";
import "./index.css";
import {useDispatch} from "react-redux";
import {fetchProducts} from "../../../redux/actions/productsAction";
import {useParams} from "react-router-dom";

const {Option} = Select;

const defaultSortBy = 'relevance';

export default function SortProducts() {
  const [sortBy, setSortBy] = useState(defaultSortBy);
  const {category} = useParams();
  const dispatch = useDispatch();
  const {page} = useParams();

  const handleSelect = (value) => {
    setSortBy(value);
    dispatch(fetchProducts(category, null, value, page));
  }

  // when page changes set the sortBy default value('relevance')
  useEffect(() => {
    // console.log('yes changed');
    setSortBy(defaultSortBy)
  }, [page])
  
  // console.log(sortBy, 'coconut');


  return (
    <div className="sort-by">
      <h3>Sort By</h3>
      <Select
        style={{width: 120}}
        onSelect={handleSelect}
        defaultValue={sortBy}
        value={sortBy}
      >
        <Option value="relevance">Relevance</Option>
        <Option value="price">Price</Option>
      </Select>
    </div>
  )
}