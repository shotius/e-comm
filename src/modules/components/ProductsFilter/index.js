import React, {useState} from "react";
import {Button, Collapse, Slider} from "antd";
import "./index.css"
import {FilterOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {fetchProducts} from "../../../redux/actions/productsAction";
import {useParams} from "react-router-dom";

const {Panel} = Collapse;

const initialFilters = {
  price: [0, 5000]
}

const ProductsFilter = () => {
  const [price, setPrice] = useState(initialFilters.price);
  const dispatch = useDispatch();
  const {category} = useParams();


  const onPriceChange = (value) => {

  }

  const handleApplyClick = () => {
    dispatch(fetchProducts(category, {price}))
  }

  const clearFields = () => {
    console.log('clicked')
    setPrice(initialFilters.price);
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
        <Button type={"default"} onClick={clearFields}>
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