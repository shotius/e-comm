import React, { useState,  useEffect } from 'react'
import { Card } from 'antd'
import './index.css'
import { useSelector } from 'react-redux'
import Product from './Product'
import axios from 'axios'

 export const SelectedItems = () => {
    const [itemsInBasket, setItemsInBasket] = useState([])
    // const data = useSelector(state => state.productsReducer.products)
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/basket`)
        .then(response => {
            const {userId, ...rest} = response.data[0]
            setItemsInBasket(rest)
        })
        .catch(error =>console.log(error))
    }, [])

    console.log(itemsInBasket)
     
    return (
            <Card bordered={true} title={`Cart (${itemsInBasket.length} items)`} className="cart-list"> 
                {itemsInBasket.map((item, index) => (
                    <div key={index}>
                        <Product item={item}/>
                        <hr className="line"/>
                    </div>
                ))}
            </Card> 
    )
}
export default SelectedItems