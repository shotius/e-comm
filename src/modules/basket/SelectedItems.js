import React from 'react'
import { Card } from 'antd'
import './index.css'

import Product from './Product'

 export const SelectedItems = () => {
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
                {data.map((item, index) => (
                    <div key={index}>
                        <Product item={item}/>
                        <hr className="line"/>
                    </div>
                ))}
            </Card> 
    )
}
export default SelectedItems