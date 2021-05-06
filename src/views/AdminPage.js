import {Layout} from 'antd'
import React from 'react'
import AdminContent from '../modules/components/AdminPageContent/AdminContent';
import SideMenu from '../modules/components/AdminPageContent/SideMenu';
const { Content, Sider } = Layout;

export const AdminPage = () => {
    return (
        <Layout>
            <Sider width={200} style={{minHeight: "65vh", background: '#d3d3d3'}}>
                <SideMenu />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
                <AdminContent />
                </Content>
            </Layout>
        </Layout>
    )
}