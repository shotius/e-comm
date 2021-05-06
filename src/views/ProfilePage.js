import {Layout} from 'antd'
import React from 'react'
import { useSelector } from 'react-redux';
import { Roles } from '../const/Roles';
import AdminProfileContent from '../modules/components/Profile/AdminProfile/Content'
import UserProfileContent from '../modules/components/Profile/UserProfile/Content';
// import SideMenu from '../modules/components/AdminPageContent/SideMenu';
const { Content } = Layout;

export const ProfilePage = () => {
    const role = useSelector(state => state.authReducer.role)
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
                {role === Roles.admin ? (
                    <AdminProfileContent />
                ): (
                    <UserProfileContent />
                )}
                </Content>
            </Layout>
        </Layout>
    )
}