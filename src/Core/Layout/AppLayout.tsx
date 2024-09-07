import React from 'react';
import { Layout, Menu, Breadcrumb, theme, Button } from 'antd';
import { menuItems } from './menuItems';

const { Header, Content, Footer, Sider } = Layout;

interface AppLayoutProps {
  logout: () => void;
}

const AppLayout: React.FC<{ logout: () => void }> = ({ logout }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" style={{ flex: 1, minWidth: 0 }} items={menuItems} />
        <Button onClick={logout} style={{ marginLeft: 'auto' }} type="primary">
          Logout
        </Button>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }} items={menuItems} />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ padding: 24, margin: 0, minHeight: 280, background: colorBgContainer, borderRadius: borderRadiusLG }}>
            <h1>Protected Content</h1>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
