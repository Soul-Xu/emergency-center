// Breadcrumb component (BreadcrumbComponent.js)
import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';

interface Props {
  menuItem: any
}

const BreadcrumbComponent = (props: Props) => {
  const { menuItem } = props
  // @ts-ignore
  const [renderItems, setRenderItems] = useState<any>(null)
  // Logic to get breadcrumb data based on the current route
  const breadcrumbItems = [
    {
      key: 'home',
      title: '首页',
    },
    // eslint-disable
    {
      key: 'layoutSquare',
      title: '架构图广场',
    },
    {
      key: 'systemSetting',
      title: '菜单内容配置',
    },
    {
      key: 'systemSetting',
      title: '菜单内容配置',
    },
    {
      key: 'objectManage',
      title: '对象管理',
    },
  ]

  const generateBreadcrumbRender = (keyPath: any, breadcrumbItems: any) => {
    const breadcrumbRender = keyPath.reduceRight((accumulator: any, currentKey: any) => {
      const currentItem = breadcrumbItems.find((item: any) => item.key === currentKey);
    
      if (currentItem) {
        accumulator.push({ key: currentItem.key, title: currentItem.title });
      }
    
      return accumulator;
    }, []);
    
    return breadcrumbRender.reverse();
  }

  useEffect(() => {
    if (Array.isArray(menuItem?.keyPath)) {
      const renderArr = generateBreadcrumbRender(menuItem?.keyPath, breadcrumbItems)
      setRenderItems(renderArr)
    }
  }, [menuItem])

  return (
    <Breadcrumb
     items={renderItems}
    />
  );
};

export default BreadcrumbComponent;