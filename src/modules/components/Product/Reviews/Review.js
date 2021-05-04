import { UserOutlined } from '@ant-design/icons'
import { Card, Rate } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'

const Review = ({ review, user }) => {
    return (
            <Card style={{marginBottom: 5}}>
                <div>
                    <Avatar icon={<UserOutlined />} style={{marginRight: 10}}/>
                    {user.email}
                    <div><Rate disabled defaultValue={review.stars || 0}/></div>
                </div>
                {review.review}
            </Card>
    )
}
export default Review