import React from "react";
import {Col, Row} from "antd";
import "./index.css"
import DropdownMenu from "./DropdownMenu";

const ProductsFilter = () => {
  return <Row className="products-filter">
    <Col xs={12} md={6}>
      <DropdownMenu title="Category" items={
        [
          'საყოფაცხოვრებო ტექნიკა',
          'ტანსაცმელი',
          'კომპიუტერული ნაწილები'
        ]
      } />
    </Col>
    <Col xs={12} md={6}>
      <DropdownMenu title="Test" items={
        [
          'საყოფაცხოვრებო ტექნიკა',
          'ტანსაცმელი',
          'კომპიუტერული ნაწილები'
        ]
      } />
    </Col>
    <Col xs={12} md={6}>
      <DropdownMenu title="Category" items={
        [
          'საყოფაცხოვრებო ტექნიკა',
          'ტანსაცმელი',
          'კომპიუტერული ნაწილები'
        ]
      } />
    </Col>
    <Col xs={12} md={6}>
      <DropdownMenu title="Category" items={
        [
          'საყოფაცხოვრებო ტექნიკა',
          'ტანსაცმელი',
          'კომპიუტერული ნაწილები'
        ]
      } />
    </Col>
  </Row>
}

export default ProductsFilter;