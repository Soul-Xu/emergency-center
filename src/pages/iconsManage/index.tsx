import React from 'react';
import { Input, Button, Collapse, Tooltip, Tabs, Divider, Table, Select, Checkbox } from 'antd';
import { FileTextOutlined, SearchOutlined, PlusCircleOutlined, ArrowUpOutlined, ArrowDownOutlined, ClearOutlined, EditOutlined, DeleteOutlined, UploadOutlined, UpOutlined, CloudDownloadOutlined, CloudUploadOutlined } from '@ant-design/icons';
import CustomLayout from '../../layout/CustomLayout';
import type { SearchProps } from 'antd/es/input/Search';
import IMAGE_SHAPES from '../../config/image-shapes';
import type { TabsProps } from 'antd';
// @ts-ignore
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);
const { Panel } = Collapse;
const { Search } = Input;

const IconsManage = () => {
  const itemClassList = [
    {
      key: 'icons',
      label: "图标(65)",
      icon: <FileTextOutlined />
    },
    {
      key: 'setting',
      label: "配置(20)",
      icon: <FileTextOutlined />
    }
  ]

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

  return (
    <div>
      <CustomLayout>
        <div className={classNames("container")}>
          <div className={classNames("content")}>
            <div className={classNames("content-left")}>
              <div className={classNames("content-left-title")}>
                <div className={classNames("left-context")}>图标列表</div>
                <Button type='primary' className={classNames("left-btn")}>新建</Button>
                <Button type='primary' className={classNames("left-btn")}>导入</Button>
                <Button type='primary' className={classNames("left-btn")}>导出</Button>
              </div>
              <div className={classNames("content-left-list")}>
                {itemClassList.map((item, index) => {
                  return (
                    <div className={classNames("left-list-item")} key={item.key}> 
                      <div className={classNames("list-item-icon")}>
                        {item.icon}
                      </div>
                      <div className={classNames("list-item-text")}>
                        {item.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={classNames("content-right")}>
              <div className={classNames("content-right-search")}>
                <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
              </div>
              <div className={classNames("content-right-list")}>
                {
                  IMAGE_SHAPES.map((image, index) => {
                    return (
                      <div className={classNames("right-list-item")} key={image.key}>
                        <div className={classNames("list-item-image")}>
                          <img src={image.logo} alt={image.key} />
                        </div>
                        <div className={classNames("list-item-text")}>
                          {image.name}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </CustomLayout>
    </div>
  );
};

export default IconsManage;