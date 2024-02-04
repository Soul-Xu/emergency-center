import React, { useState, ReactNode } from 'react';
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import BreadcrumbComponent from '../BreadcrumbComponent';
import BreadcrumbTabs from '../BreadcrumbTab';
// @ts-ignore
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

const { Header, Sider, Content } = Layout;

/** images */
// import ImgLogo from '@/src/static/images/siderbar_logo.png'

const menuItems = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: '首页',
    children: [
      {
        key: 'serviceArchitecture',
        icon: '',
        label: '服务架构总览',
      }
    ]
  },
  {
    key: 'linkManage',
    icon: <VideoCameraOutlined />,
    label: '链路管理',
    children: [
      {
        key: 'keyLinks',
        icon: '',
        label: '关键链路总览',
      }
    ]
  },
]

interface CustomLayoutProps {
  children: ReactNode;
  // 可以添加其他属性的类型定义
}

const CustomLayout = ({ children }: CustomLayoutProps) => {
  const navigate = useNavigate(); 
  const [collapsed, setCollapsed] = useState(false);
  const [selectMenu, setSelectMenu] = useState<any>(null)
  const [selectedSubMenu, setSelectedSubMenu] = useState<any>(null);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onChangeMenu = (menuItem: any) => {
    setSelectMenu(menuItem)

    // setSelectMenu((prevSelectMenu:any) => {
    //   // 使用回调函数确保获取到正确的 prevSelectMenu
    //   const updatedSelectMenu = { ...prevSelectMenu, ...menuItem };
  
    //   // 点击面包屑时进行页面导航
    //   if (updatedSelectMenu?.keyPath && updatedSelectMenu.keyPath.length > 0) {
    //     const reversedPath = [...updatedSelectMenu.keyPath].reverse();
    //     const path = `/${reversedPath.join('/')}`;
    //     navigate(path);  // 使用 useNavigate 进行导航
    //   }
  
    //   return updatedSelectMenu;
    // });

    // 点击面包屑时进行页面导航
    // eslint-disable
    if (menuItem?.keyPath && menuItem.keyPath.length > 0) {
      const path = `/${menuItem.keyPath.reverse().join('/')}`;
      navigate(path);  // 使用 useNavigate 进行导航
    }
  }

  return (
    <Layout style={{ width: "100vw" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={classNames(collapsed ? "logo-vertical-collapsed" : "logo-vertical")}>
          <img src={require('../../static/images/sidebar_logo.png')} alt="logo" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={['home']}
          inlineCollapsed={collapsed}  // 控制二级菜单的展开状态
          items={menuItems}
          onClick={onChangeMenu}
        />
      </Sider>
      <Layout>
        <Header className={classNames("header")} style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              // height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            // borderRadius: borderRadiusLG,
          }}
        >
          { children }
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
