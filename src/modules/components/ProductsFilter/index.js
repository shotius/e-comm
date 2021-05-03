import React, {useState} from "react";
import {Col, Collapse, Row, Slider} from "antd";
import "./index.css"
import DropdownMenu from "./DropdownMenu";
import {FilterOutlined} from "@ant-design/icons";

const {Panel} = Collapse;

const ProductsFilter = () => {
  const [price, setPrice] = useState(0);
  const onPriceChange = (value) => {
    console.log(value);
  }
  return <Collapse>
    <Panel
      className="filter-panel"
      header="Filters"
      key="1"
      extra={<FilterOutlined/>}>
      <div className="filter-price">
        <h3>Price</h3>
        <Slider
          range
          step={100}
          max={10000}
          defaultValue={[0, 1000]}
          onAfterChange={onPriceChange}
        />
      </div>
    </Panel>
  </Collapse>
}

// const ProductsFilter = () => {
//   return <Row className="products-filter">
//     <Col xs={12} md={6}>
//       <DropdownMenu title="Category" items={
//         [
//           'საყოფაცხოვრებო ტექნიკა',
//           'ტანსაცმელი',
//           'კომპიუტერული ნაწილები'
//         ]
//       } />
//     </Col>
//     <Col xs={12} md={6}>
//       <DropdownMenu title="Test" items={
//         [
//           'საყოფაცხოვრებო ტექნიკა',
//           'ტანსაცმელი',
//           'კომპიუტერული ნაწილები'
//         ]
//       } />
//     </Col>
//     <Col xs={12} md={6}>
//       <DropdownMenu title="Category" items={
//         [
//           'საყოფაცხოვრებო ტექნიკა',
//           'ტანსაცმელი',
//           'კომპიუტერული ნაწილები'
//         ]
//       } />
//     </Col>
//     <Col xs={12} md={6}>
//       <DropdownMenu title="Category" items={
//         [
//           'საყოფაცხოვრებო ტექნიკა',
//           'ტანსაცმელი',
//           'კომპიუტერული ნაწილები'
//         ]
//       } />
//     </Col>
//   </Row>
// }

export default ProductsFilter;