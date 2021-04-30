import React from 'react'
import { Row, Col, Layout} from 'antd'
import SelectedItems from '../modules/components/basket/SelectedItems'
import CheckOutCard from '../modules/components/basket/CheckOutCard'
import Header from '../modules/components/basket/Header'

export const Basket = () => {
    return (
        <Layout className="list-container"> 
            <Header /> 
            <Row justify="space-around" gutter={[1,8]}>
                <Col xs={24} md={24} lg={16}>
                    <SelectedItems /> 
                </Col>
                <Col xs={24} md={24} lg={6}>
                    <CheckOutCard />
                </Col>
            </Row>
        </Layout>
    )
}