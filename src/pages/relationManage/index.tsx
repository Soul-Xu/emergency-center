import React from 'react';
import { Input, Button, Collapse, Tooltip, Tabs, Form, Divider, Table, Select, Checkbox } from 'antd';
import { SearchOutlined, PlusCircleOutlined, ArrowUpOutlined, ArrowDownOutlined, ClearOutlined, EditOutlined, DeleteOutlined, UploadOutlined, UpOutlined, CloudDownloadOutlined, CloudUploadOutlined } from '@ant-design/icons';
import CustomLayout from '../../layout/CustomLayout';
import IMAGE_SHAPES from '../../config/image-shapes';
import type { TabsProps } from 'antd';
// @ts-ignore
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);
const { Panel } = Collapse;
const { Search } = Input;

const relationDefinition = () => {
  const dataSourceDefine:any = []
  const columnsDefine = [
    {
      title: '序号',
      dataIndex: 'sort',
      key: 'sort',
    },
    {
      title: '子code',
      dataIndex: 'nodeCode',
      key: 'nodeCode',
    },
    {
      title: '属性名称',
      dataIndex: 'attributeName',
      key: 'attributeName',
    },
    {
      title: '属性类型',
      dataIndex: 'attributeType',
      key: 'attributeType',
    },
    {
      title: 'Label',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: '显示方向',
      dataIndex: 'displayDirection',
      key: 'displayDirection',
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
    },
  ];
  const defineItems = [
    {
      key: '1',
      label: '核心属性',
      children: '',
    },
  ]

  const onDefineTabChange = (key: string) => {
    console.log(key);
  }

  return (
    <>
      <div className={classNames("right-btns")}>
        <div className={classNames("btns-left")}>
        </div>
        <div className={classNames("btns-right")}>
          <Button type='primary' style={{ marginRight: 0 }} className={classNames("btns-left-btn")}>编辑</Button>
        </div>
      </div>
      <div className={classNames("right-setting")}>
        <Form name='relation-setting' className={classNames("right-setting-form")}>
          <Form.Item 
            name='name' 
            label={(
              <div className={classNames("item-label")}>名称</div>
            )}
            className={classNames("right-setting-item")}
          >
            <Input placeholder='包含' disabled />
          </Form.Item>
          <Form.Item  
            name='container' 
            label={(
              <div className={classNames("item-label")}>容器</div>
            )} 
            className={classNames("right-setting-item")}
          >
            <Checkbox />
          </Form.Item>
          <Form.Item  
            name='style' 
            label={(
              <div className={classNames("item-label")}>关系样式</div>
            )} 
            className={classNames("right-setting-item")}
          >

          </Form.Item>
          <Form.Item 
            name='width' 
            label={(
              <div className={classNames("item-label")}>宽度</div>
            )}  
            className={classNames("right-setting-item")}
          >

          </Form.Item>
          <Form.Item 
            name='color' 
            label={(
              <div className={classNames("item-label")}>关系颜色</div>
            )}  
            className={classNames("right-setting-item")}
          >

          </Form.Item>
          <Form.Item 
            name='arrow' 
            label={(
              <div className={classNames("item-label")}>关系箭头</div>
            )}  
            className={classNames("right-setting-item")}
          >

          </Form.Item>
        </Form>
      </div>
      <div className={classNames("right-tab")}>
        <Tabs defaultActiveKey="1" items={defineItems} onChange={onDefineTabChange} />
      </div>
      <div className={classNames("right-table")}>
        <Table dataSource={dataSourceDefine} columns={columnsDefine} />
      </div>
    </>
  )
}

const relationData = () => {
  const onSearch = (value: string) => {
    console.log('onSearch', value);
  }

  const dataSourceData = [
    {
      key: '1',
      sort: 1,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '2',
      sort: 2,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '3',
      sort: 3,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '4',
      sort: 4,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '5',
      sort: 5,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '6',
      sort: 6,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '7',
      sort: 7,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '8',
      sort: 8,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '9',
      sort: 9,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '10',
      sort: 10,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '11',
      sort: 11,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '12',
      sort: 12,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '13',
      sort: 13,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '14',
      sort: 14,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '15',
      sort: 15,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '16',
      sort: 16,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '17',
      sort: 17,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '18',
      sort: 18,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
    {
      key: '19',
      sort: 19,
      servicePrimaryKey: 'JAF1718ACDB_MPC1C',
      ciCode: 'UINO123',
      sourceClassification: '交换机23',
      targetServicePrimaryKey: '192.168.1.26',
      targetCiCode: '交换机',
      targetClassification: '在线',
    },
  ];

  const columnsData = [
    {
      title: '序号',
      dataIndex: 'sort',
      key: 'sort',
    },
    {
      title: '源业务主键',
      dataIndex: 'servicePrimaryKey',
      key: 'servicePrimaryKey',
    },
    {
      title: '源ciCode',
      dataIndex: 'ciCode',
      key: 'ciCode',
    },
    {
      title: '源分类',
      dataIndex: 'sourceClassification',
      key: 'sourceClassification',
    },
    {
      title: '目标业务主键',
      dataIndex: 'targetServicePrimaryKey',
      key: 'targetServicePrimaryKey',
    },
    {
      title: '目标ciCode',
      dataIndex: 'targetCiCode',
      key: 'targetCiCode',
    },
    {
      title: '目标分类',
      dataIndex: 'targetClassification',
      key: 'targetClassification',
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: any) => ({
      name: record.name,
    }),
  };

  return (
    <>
      <div className={classNames("right-btns")}>
        <div className={classNames("btns-left")}>
          <Button className={classNames("btns-left-btn")} icon={<PlusCircleOutlined />}>新建</Button>
          <Button className={classNames("btns-left-btn")} icon={<ClearOutlined />}>全部清除</Button>
          <Button className={classNames("btns-left-btn")} icon={<EditOutlined />}>编辑</Button>
          <Button className={classNames("btns-left-btn")} icon={<DeleteOutlined />}>删除</Button>
          <Button className={classNames("btns-left-btn")} icon={<CloudUploadOutlined />}>导入</Button>
          <Button className={classNames("btns-left-btn")} icon={<CloudDownloadOutlined />}>导出</Button>
        </div>
        <div className={classNames("btns-right")}>
          <Search placeholder="请输入" onSearch={onSearch} style={{ width: 200 }} />
        </div>
      </div>
      {/* <Divider style={{ marginTop: '0' }}/> */}
      <div className={classNames("right-table")}>
        <Table 
          dataSource={dataSourceData}  
          rowSelection={{
          ...rowSelection,
          }} 
          columns={columnsData}
          />
      </div>
    </>
  )
}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '关系定义',
    children: relationDefinition(),
  },
  {
    key: '2',
    label: '关系数据',
    children: relationData(),
  },
];


const RelationManage = () => {
  const onTabChange = (key: string) => {
    console.log(key);
  }

  return (
    <div>
      <CustomLayout>
        <div className={classNames("container")}>
          <div className={classNames("content")}>
            <div className={classNames("content-left")}>
              <div className={classNames("content-left-search")}>
                <Input className={classNames("search-input")} type="text" placeholder="搜索" />
                <Button type='primary' className={classNames("search-btn")}>新建</Button>
              </div>
              <div className={classNames("content-left-list")}>
              <Collapse
                style={{ height: "750px", overflow: "auto"}}
                bordered={false}
                defaultActiveKey={['ccb']}
              >
                <Panel header="CCB包含(23)" key="ccb">
                </Panel>
                <Panel header="ECI(6)" key="eci">
                </Panel>
                <Panel header="PRXI包含(131)" key="prxi">
                </Panel>
                <Panel header="TCP(6)" key="tcp">
                </Panel>
                <Panel header="位于(6)" key="position">
                </Panel>
                <Panel header="依赖(6)" key="reply">
                </Panel>
                <Panel header="影响(6)" key="effect">
                </Panel>
              </Collapse>
              </div>
            </div>
            <div className={classNames("content-right")}>
              <div className={classNames("content-right-tab")}>
                <Tabs defaultActiveKey="1" items={items} onChange={onTabChange} />
              </div>
            </div>
          </div>
        </div>
      </CustomLayout>
    </div>
  );
};

export default RelationManage;