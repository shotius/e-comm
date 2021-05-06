import {Layout} from 'antd'
import React from 'react'
import ProfileContent from '../modules/components/Profile/Content'
// import SideMenu from '../modules/components/AdminPageContent/SideMenu';
const { Content, Sider } = Layout;

export const ProfilePage = () => {
    return (
        <Layout>
            {/* <Sider width={200} style={{minHeight: "65vh", background: '#d3d3d3'}}>
                <SideMenu />
            </Sider> */}
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
                <ProfileContent />
                </Content>
            </Layout>
        </Layout>
    )
}