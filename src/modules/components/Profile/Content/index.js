import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table, Button, Popconfirm } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'


const ProfileContent = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        axios
            .get("http://localhost:3001/users")
            .then(({ data }) => {
                const users = data.map((user, key) => {
                    const { password, ...rest} = user
                    return {...rest, key}
                 })
                setUsers(users)
            })
            .catch(error => console.log(error))
    }, [])

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
            title: "UserName",
            dataIndex: "username",
            key: "username",
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'age',
        },
        {
          title: 'Role',
          dataIndex: 'role',
          key: 'role',
          render: (text) => text || "user"
        },
        {
            title: "Phone Num",
            dataIndex: "phone",
            key: 'phone'
        },
        {
          title: 'Action',
          key: 'action',
          render: (data) => (
                <Popconfirm title={'Are you sure?'}  okText="Yes" cancelText="No">
                    <Button icon={<DeleteOutlined />}/>
                </Popconfirm>
        )
        },
      ];
      
      
    return (
        <Table columns={columns} dataSource={users} />
    )
}
export default ProfileContent