import { UserOutlined } from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'

const UserProfileContent = () => {

    return (
        <div style={{width: "80px", margin: "auto"}}>
            <Avatar size={64} icon={<UserOutlined />} />
            <h1>User Profile</h1>
        </div>
    )
}
export default UserProfileContent