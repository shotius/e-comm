 import { Col, Input, Rate, Row, Button } from 'antd'
import { Form } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React, { useState } from 'react'
import { addReview } from '../../../../redux/actions/reviewsActions'

const ReviewForm = ({ dispatch, userId, prodId }) => {
    const [stars, setStars] = useState(0)
    const [form] = Form.useForm();
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

    const onFinish = (values) => {
        form.resetFields()
        const review = {
            ...values,
            userId,
            prodId,
        }
        dispatch(addReview(review))
    }

    return (
        <>
        <h2>write a review</h2>
        <Form 
            form={form}
            onFinish={onFinish}
        >
            <Row gutter={[8,8]} justify="start" align="middle" style={{marginButtom: "10px !important"}}>
                <Col xl={1}>
                    <Form.Item>
                    <Avatar size={40} src="https://cdn.pixabay.com/photo/2016/03/31/19/57/avatar-1295406_960_720.png" />
                    </Form.Item>
                </Col>
                <Col span={14}>
                    <Form.Item name="review">
                        <Input.TextArea  style={{borderRadius: "20px", padding: "10px", fontSize: "1em"}} autoSize={true}/>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name="stars">
                        <Rate tooltips={desc} onChange={(value) => setStars(value)} value={stars}/>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item>
                    <Button type="primary" htmlType="submit">submit</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
        </>
    )
}
export default ReviewForm