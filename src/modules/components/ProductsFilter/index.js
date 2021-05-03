import React, {useState} from "react";
import {Button, Col, Collapse, Row, Slider} from "antd";
import "./index.css"
import DropdownMenu from "./DropdownMenu";
import {FilterOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {fetchProducts} from "../../../redux/actions/productsAction";
import {useParams} from "react-router-dom";

const {Panel} = Collapse;

const ProductsFilter = () => {
  const [price, setPrice] = useState([0, 5000]);
  const dispatch = useDispatch();
  const {category} = useParams();


  const onPriceChange = (value) => {
    setPrice(value);
  }

  const handleApplyClick = () => {
    dispatch(fetchProducts(category, {price}))
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
          defaultValue={price}
          onAfterChange={onPriceChange}
        />
      </div>
      <div className="filter-buttons">
        <Button type={"default"}>
          Clear
        </Button>
        <Button type={"primary"} onClick={handleApplyClick}>
          Apply
        </Button>
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