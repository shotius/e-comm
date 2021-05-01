import React from 'react'
import { Button, Card, Col, Row } from 'antd'

 export const CheckOutCard = ({ basketProducts }) => {
     const productPriceTotal = basketProducts.reduce((acc, cur) => acc + Number(cur.price), 0)
     const shippingTotal = basketProducts.reduce((acc, cur) => acc + Number(cur.shipping), 0)
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
            <hr className="line"/>
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