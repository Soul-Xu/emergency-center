import React, { useEffect, useState, ReactNode } from 'react';
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

const { Header, Sider, Content } = Layout;

const menuItems = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: '首页',
    children: [
      {
        key: 'layoutSquare',
        icon: '',
        label: '架构图广场',
      }
    ]
  },
  {
    key: 'systemSetting',
    icon: <VideoCameraOutlined />,
    label: '系统设置',
    children: [
      {
        key: 'objectManage',
        icon: '',
        label: '对象管理',
      },     
      {
        key: 'relationManage',
        icon: '',
        label: '关系管理',
      },
    ]
  },
]


const labelMap:any = {};

menuItems.forEach(item => {
  if (item.children) {
    item.children.forEach(child => {
      labelMap[child.key] = child.label;
    });
  }
});

interface CustomLayoutProps {
  children: ReactNode;
  // 可以添加其他属性的类型定义
}

const CustomLayout = ({ children }: CustomLayoutProps) => {
  const navigate = useNavigate(); 
  const [collapsed, setCollapsed] = useState(false);
  const [seleteLabel, setSelectLabel] = useState('');
  const [selectMenu, setSelectMenu] = useState<any>(null)
  const [selectedSubMenu, setSelectedSubMenu] = useState<any>(null);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onChangeMenu = (menuItem: any) => {
    setSelectMenu(menuItem)

    // 点击面包屑时进行页面导航
    // eslint-disable
    if (menuItem?.keyPath && menuItem.keyPath.length > 0) {
      const path = `/${menuItem.keyPath.reverse().join('/')}`;
      navigate(path);  // 使用 useNavigate 进行导航
    }
  }

  useEffect(() => {
    if (selectMenu) {
      const selectLabel = labelMap[selectMenu.key];
      setSelectLabel(selectLabel);
    }
  }, [selectMenu])

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
          <div className={classNames("label")}>{seleteLabel}</div>
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
