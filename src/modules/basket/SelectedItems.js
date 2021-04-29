import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'antd'
import './index.css'
import Layout from 'antd/lib/layout/layout'
import { HeartOutlined, HeartFilled,MinusOutlined,PlusOutlined} from '@ant-design/icons'

 export const SelectedItems = () => {
    const [quantity, setQuantity] = useState(0)
    const isSelected = false
    const data = [
        {
            "title": "Iphone pro max 12",
            "price": 2000,
            "brand": "Apple",
            "category": "smartphones",
            "userId": 1,
            "description": "ummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            "image": "https://images.samsung.com/is/image/samsung/assets/africa_pt/galaxy-s21/pcd/HOME_T_O_KV_Main_Animated_KV_720X1080.jpg"
          },
          {
            "title": "Pixel XL 2",
            "price": 1500,
            "brand": "Google",
            "category": "smartphones",
            "description": "ummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            "userId": 2,
            "image": "https://images.samsung.com/is/image/samsung/assets/africa_pt/galaxy-s21/pcd/HOME_T_O_KV_Main_Animated_KV_720X1080.jpg"
          },
          {
            "title": "Dell Latitute 5510",
            "price": 4000,
            "brand": "Dell",
            "category": "laptops",
            "userId": 1,
            "description": "ummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            "image": "https://images.samsung.com/is/image/samsung/assets/africa_pt/galaxy-s21/pcd/HOME_T_O_KV_Main_Animated_KV_720X1080.jpg"
          },
          {
            "title": "Lenovo Thinkpad",
            "price": 4000,
            "brand": "Lenovo",
            "category": "laptops",
            "userId": 3,
            "description": "ummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            "image": "https://images.samsung.com/is/image/samsung/assets/africa_pt/galaxy-s21/pcd/HOME_T_O_KV_Main_Animated_KV_720X1080.jpg"
          },
    ]
    return (
            <Card bordered={true} title={`Cart (${data.length} items)`} className="cart-list"> 
                {data.map(item => (
                    <div>
                    <Row className="cart-content" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginBottom: "10px"}} >
                        <Col xs={8} sm={24} md={6} lg={5} className="col1 col" style={{padding: 0}}>
                            <img src={item.image} className="image"/>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={13}>
                            <h2>{item.title}</h2>
                            <p>brand: {item.brand}</p>
                            <p>description: {item.description}</p>
                            <div>move to wish list {isSelected ?<HeartOutlined />: <HeartFilled />}</div>
                        </Col>
                        <Col xs={24} md={6} className="col3" >
                            <div className="quant">
                                <Button onClick={() => setQuantity(quantity+1)}><MinusOutlined /></Button>
                                <span className="quantity" >{quantity}</span>
                                <Button onClick={() => setQuantity(quantity+1)}><PlusOutlined /></Button>
                            </div>
            
                            <h2 className="price">${item.price}</h2>
                        </Col>
                    </Row>
                    <hr className="line"/>
                    </div>
                ))}
            </Card> 
    )
}
export default SelectedItems