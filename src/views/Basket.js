import React from 'react'
import { Row, Col, Layout} from 'antd'
import SelectedItems from '../modules/basket/SelectedItems'
import CheckOutCard from '../modules/basket/CheckOutCard'
import Header from '../modules/basket/Header'

export const Basket = () => {
    return (
        <Layout className="list-container"> 
            <Header /> 
            <Row justify="space-around" >
                <Col xs={24} md={24} lg={16}>
                    <SelectedItems /> 
                </Col>
                <Col xs={24} md={7}>
                    <CheckOutCard />
                </Col>
            </Row>
        </Layout>
    )
}