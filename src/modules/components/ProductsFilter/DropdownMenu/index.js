import React from "react";
import {Select} from "antd";

const {Option} = Select;

const DropdownMenu = (props) => {
  return <Select
    style={{width: "100%"}}
    placeholder={props.title}
  >
    {props.items.map(item => (
      <Option key={item} value={item}>{item}</Option>
    ))}
  </Select>
}

export default DropdownMenu;