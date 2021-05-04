import React from 'react'
import { Button, Card, Col, Row, Divider } from 'antd'

 export const CheckOutCard = ({ basketProducts }) => {
     const productPriceTotal = basketProducts.reduce((acc, cur) => acc + Number(cur.price), 0)
     let shippingTotal = basketProducts.reduce((acc, cur) => acc + Number(cur.shipping), 0)
     shippingTotal = Math.floor(shippingTotal * 100)/100
     const totalPrice = productPriceTotal + shippingTotal

    return (
        <Card bordered={true} title="The Total Amount Of">
            <Row>
                <Col span={20}><b>The product price:</b></Col>
                <Col span={4}><div className="total">${productPriceTotal}</div></Col>
            </Row>
            <Row>
                <Col span={20}><b>Total Shipping: </b></Col>
                <Col span={4}><div>${shippingTotal}</div></Col>
            </Row>
            <Divider />
            <Row>
                <Col span={20}>
                    <b>The Total Amount (inlcuding shipping)</b>
                </Col>
                <Col span={4}>${totalPrice}</Col>
            </Row>
            <Row justify="center">
                <Col span={24}>
                    <Button type="primary" className="chekout" style={{marginTop: 10, width: "100%"}}>Check Out</Button>
                </Col>
            </Row>
        </Card>    )
}
export default CheckOutCard