import React from "react";
import {Row, Col, Card} from "antd";
import "./index.css"
import {Link} from "react-router-dom";
import {categoryData} from "../../../const/categoryData";

const Categories = () => {
  return <Row className="categories" align={"middle"} gutter={8}>
    {
      categoryData.map((category, i) => {
        return <Col xs={24} sm={12} md={6} key={i} >
          <Link to={`/products/${category.link}`}><div className="categories-card">
            <p>{category.name}</p>
            <img src={category.img} alt="category"/>
          </div></Link>
        </Col>
      })
    }
  </Row>
}

export default Categories;