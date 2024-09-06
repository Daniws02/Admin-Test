import React from 'react';
import { Layout, Menu, Breadcrumb, theme } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const routes = [
  { name: 'Users', icon: UserOutlined, path: '/users' },
  { name: 'Laptops', icon: LaptopOutlined, path: '/laptops' },
  { name: 'Notifications', icon: NotificationOutlined, path: '/notifications' },
];

const items2 = routes.map((route, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(route.icon),
    label: route.name,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
        path: `${route.path}/option${subKey}`,
      };
    }),
  };
});

const AppLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          //defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            //defaultSelectedKeys={['1']}
            //defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
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