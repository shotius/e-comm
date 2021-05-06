import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table, Button, Popconfirm } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getUsers } from '../../../../redux/actions/adminActions'


const ProfileContent = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.adminReducer.users)
    
    useEffect(() => {
        dispatch(getUsers())
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
                <Popconfirm title={'Are you sure?'} onConfirm={() => dispatch(deleteUser(data))} okText="Yes" cancelText="No">
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