import React from "react";
import {Row, Col, Card} from "antd";
import "./index.css"
import {Link} from "react-router-dom";
import {categoryData} from "../../../const/categoryData";

const Categories = () => {
  return <Row className="categories" align={"middle"} gutter={[8, 10]} style={{padding: "3px", paddingTop: "15px"}}>
    {
      categoryData.map((category, i) => {
        return <Col xs={24} sm={12} md={6} key={i} >
          <div className="categories-card">
            <Link to={`/${category.link}`}>{category.name}</Link>
            <img src={category.img} alt="category"/>
          </div>
        </Col>
      })
    }
  </Row>
}

export default Categories;