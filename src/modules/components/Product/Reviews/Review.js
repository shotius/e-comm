import { UserOutlined } from '@ant-design/icons'
import { Card, Rate } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'

const Review = ({ review, user }) => {
    console.log(user)
    return (
        <div>
            <Card>
                <div>
                    <Avatar icon={<UserOutlined />} style={{marginRight: 10}}/>
                    {user.email}
                    <div><Rate disabled defaultValue={2}/></div>
                </div>
                {review}
            </Card>
        </div>
    )
}
export default Review