import React from 'react';
import { Layout, Menu, Button, Typography, theme } from 'antd';
import { menuItems } from './menuItems';
import { HomeOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

interface AppLayoutProps {
  logout: () => void;
  username: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ logout, username }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
          <HomeOutlined style={{ fontSize: '24px', color: 'white', marginRight: '8px' }} />
          <div style={{ color: 'white', fontSize: '18px' }}>CompanyName</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <UserOutlined style={{ fontSize: '18px', color: 'white', marginRight: '8px' }} />
          <Typography style={{ color: 'white', fontSize: '18px', marginRight: '16px' }}>
            {username}
          </Typography>
          <Button onClick={logout} type="primary" icon={<LogoutOutlined />} />
        </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }} items={menuItems} />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
