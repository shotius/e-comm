import React, {useState} from "react"
import {Pagination} from "antd";

export default function PagePagination() {
  const [current, setCurrent] = useState(1);

  const onChange = (value) => {
    console.log(value);
  }


  return <Pagination
    current={current}
    onChange={onChange}
    total={50}
  />
}