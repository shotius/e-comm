import React from 'react'
import { Row, Col, Layout} from 'antd'
import SelectedItems from '../modules/basket/SelectedItems'
import CheckOutCard from '../modules/basket/CheckOutCard'
import Header from '../modules/basket/Header'

export const Basket = () => {
    return (
        <Layout > 
            <Header /> 
            <Row justify="space-around" >
                <Col xs={24} md={17}>
                    <SelectedItems /> 
                </Col>
                <Col xs={24} md={6}>
                    <CheckOutCard />
                </Col>
            </Row>
        </Layout>
    )
}