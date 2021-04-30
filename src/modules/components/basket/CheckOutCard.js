import React from 'react'
import { Button, Card, Col, Row } from 'antd'

 export const CheckOutCard = () => {
     const total = 201
     const shipping = 0
    return (
        <Card bordered={true} title="The Total Amount Of">
            <Row>
                <Col span={20}><b>The product price:</b></Col>
                <Col span={4}><div className="total">${total}</div></Col>
            </Row>
            <Row>
                <Col span={20}><b>Shipping: </b></Col>
                <Col span={4}><div>${shipping}</div></Col>
            </Row>
            <hr className="line-price"/>
            <Row>
                <Col span={20}>
                    <b>The Total Amount (inlcuding shipping)</b>
                </Col>
                <Col span={4}>${total + shipping}</Col>
            </Row>
            <Row justify="center">
                <Col span={24}>
                    <Button type="primary" className="chekout" style={{marginTop: 10, width: "100%"}}>Check Out</Button>
                </Col>
            </Row>
        </Card>    )
}
export default CheckOutCard