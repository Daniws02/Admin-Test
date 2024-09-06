import React from 'react';
import { UserOutlined, LaptopOutlined, NotificationOutlined, DashboardOutlined, SettingOutlined, FileOutlined } from '@ant-design/icons';

const routes = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
    path: '/dashboard',
    children: [],
  },
  {
    key: 'users',
    icon: <UserOutlined />,
    label: 'Users',
    path: '/users',
    children: [
      {
        key: 'list',
        label: 'User List',
        path: '/users/list',
      },
      {
        key: 'create',
        label: 'Create User',
        path: '/users/create',
      },
      {
        key: 'edit',
        label: 'Edit User',
        path: '/users/edit',
      },
    ],
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: 'Settings',
    path: '/settings',
    children: [
      {
        key: 'profile',
        label: 'Profile Settings',
        path: '/settings/profile',
      },
      {
        key: 'security',
        label: 'Security Settings',
        path: '/settings/security',
      },
    ],
  },
  {
    key: 'reports',
    icon: <FileOutlined />,
    label: 'Reports',
    path: '/reports',
    children: [
      {
        key: 'monthly',
        label: 'Monthly Report',
        path: '/reports/monthly',
      },
      {
        key: 'annual',
        label: 'Annual Report',
        path: '/reports/annual',
      },
    ],
  },
  {
    key: 'notifications',
    icon: <NotificationOutlined />,
    label: 'Notifications',
    path: '/notifications',
    children: [],
  },
  {
    key: 'products',
    icon: <LaptopOutlined />,
    label: 'Products',
    path: '/products',
    children: [
      {
        key: 'inventory',
        label: 'Product Inventory',
        path: '/products/inventory',
      },
      {
        key: 'new-product',
        label: 'Add New Product',
        path: '/products/new',
      },
    ],
  },
];

const menuItems = routes.map((route) => ({
  key: route.key,
  icon: route.icon,
  label: route.label,
  children: route.children.map((subRoute) => ({
    key: subRoute.key,
    label: subRoute.label,
    path: subRoute.path,
  })),
}));

export { menuItems, routes };
