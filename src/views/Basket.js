import React from 'react'
import { Row, Layout} from 'antd'
import ActualBasket from '../modules/components/Basket/'

export const Basket = () => {
    return (
        <Layout className="list-container"> 
            <div className="header">Shopping List</div>
            <Row justify="space-around" gutter={[1,8]}>
                <ActualBasket />
            </Row>
        </Layout>
    )
}