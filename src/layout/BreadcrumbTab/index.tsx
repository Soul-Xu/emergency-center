// BreadcrumbTabs.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Space } from 'antd';

const BreadcrumbTabs = ({ menuItems }:any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const onNavigate = (menuItem:any) => {
    const newPath = `/${menuItem.key}`;
    navigate(newPath);
  };

  const onCloseTab = (key:any) => {
    const newPathSegments = pathSegments.filter((segment) => segment !== key);
    const newPath = `/${newPathSegments.join('/')}`;
    navigate(newPath);
  };

  return (
    <Space>
      {menuItems.map((menuItem:any) => (
        <Button key={menuItem.key} onClick={() => onNavigate(menuItem)}>
          {menuItem.label}
          <Button type="text" size="small" onClick={() => onCloseTab(menuItem.key)}>
            x
          </Button>
        </Button>
      ))}
    </Space>
  );
};

export default BreadcrumbTabs;
