import React, {useState} from "react"
import {Pagination} from "antd";

export default function PagePagination() {
  const [current, setCurrent] = useState(1);

  const onChange = (value) => {
    console.log(value);
    setCurrent(value)
  }

  return <Pagination
    defaultCurrent={1}
    current={current}
    onChange={onChange}
  />
}