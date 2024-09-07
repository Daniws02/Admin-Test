import React from 'react';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  FileOutlined,
  NotificationOutlined,
  LaptopOutlined,
  DollarOutlined,
  StockOutlined,
  PieChartOutlined,
  CustomerServiceOutlined,
  CalendarOutlined,
  ProjectOutlined,
  ReconciliationOutlined
} from '@ant-design/icons';

const routes = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
    path: '/dashboard'
  },
  {
    key: 'users',
    icon: <UserOutlined />,
    label: 'Users',
    path: '/users'
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: 'Settings',
    path: '/settings'
  },
  {
    key: 'reports',
    icon: <FileOutlined />,
    label: 'Reports',
    path: '/reports'
  },
  {
    key: 'notifications',
    icon: <NotificationOutlined />,
    label: 'Notifications',
    path: '/notifications'
  },
  {
    key: 'products',
    icon: <LaptopOutlined />,
    label: 'Products',
    path: '/products'
  },
  {
    key: 'sales',
    icon: <DollarOutlined />,
    label: 'Sales',
    path: '/sales'
  },
  {
    key: 'inventory',
    icon: <StockOutlined />,
    label: 'Inventory',
    path: '/inventory'
  },
  {
    key: 'analytics',
    icon: <PieChartOutlined />,
    label: 'Analytics',
    path: '/analytics'
  },
  {
    key: 'support',
    icon: <CustomerServiceOutlined />,
    label: 'Support',
    path: '/support'
  },
  {
    key: 'calendar',
    icon: <CalendarOutlined />,
    label: 'Calendar',
    path: '/calendar'
  },
  {
    key: 'projects',
    icon: <ProjectOutlined />,
    label: 'Projects',
    path: '/projects'
  },
  {
    key: 'tasks',
    icon: <ReconciliationOutlined />,
    label: 'Tasks',
    path: '/tasks'
  }
];


const menuItems = routes.map((route) => ({
  key: route.key,
  icon: route.icon,
  label: route.label
}));

export { menuItems, routes };
