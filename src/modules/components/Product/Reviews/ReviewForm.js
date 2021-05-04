import { Col, Input, Rate, Row, Button } from 'antd'
import {Form } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'

const ReviewForm = () => {
    const [stars, setStars] = useState(0)
    // const [form] = Form.useForm();
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

    return (
        <>
        <h3>write a review</h3>
       <Form >
           <Form.Item>
               <Row gutter={[8,8]} justify="space-around" align="middle" style={{marginButtom: "10px !important"}}>
                   <Col >
                   <Avatar size={40} src="https://yt3.ggpht.com/ytc/AAUvwngw35YY8vYI86RTOoEGafSxEjghjzTcKw3LbMyZ=s900-c-k-c0x00ffffff-no-rj" />
                   </Col>
                   <Col span={14}>
                        <Input.TextArea  style={{borderRadius: "20px", padding: "10px", fontSize: "1em"}} autoSize={true}/>
                   </Col>
                   <Col>
                       <Rate tooltips={desc} onChange={(value) => setStars(value)} value={stars}/>
                   </Col>
                   <Col>
                    <Button type="primary">submit</Button>
                   </Col>
               </Row>
           </Form.Item>
       </Form>
        </>
    )
}
export default ReviewForm