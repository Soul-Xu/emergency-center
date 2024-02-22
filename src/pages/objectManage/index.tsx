import React from 'react';
import { Input, Button, Collapse, Tooltip, Tabs, Divider, Table, Select, Checkbox } from 'antd';
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

const iconDefinition = () => {
  const levelOptions = [
    {
      key: 'key',
      value: '关键'
    },
    {
      key: 'important',
      value: '重要'
    },
    {
      key: 'refer',
      value: '参考'
    },
  ]

  const dataSourceDefine = [
    {
      key: '1',
      sort: 1,
      attributeName: '序列号',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '2',
      sort: 2,
      attributeName: '资产名称',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '3',
      sort: 3,
      attributeName: '管理IP',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '4',
      sort: 4,
      attributeName: '资产分类',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '5',
      sort: 5,
      attributeName: '资产状态',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '6',
      sort: 6,
      attributeName: '厂商',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '7',
      sort: 7,
      attributeName: '型号',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '8',
      sort: 8,
      attributeName: '归属地域',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '9',
      sort: 9,
      attributeName: '归属地点',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '10',
      sort: 10,
      attributeName: '归属房间',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '11',
      sort: 11,
      attributeName: '归属机柜',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '12',
      sort: 12,
      attributeName: '货架位置',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '13',
      sort: 13,
      attributeName: '起始U位',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '14',
      sort: 14,
      attributeName: '结束U位',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '15',
      sort: 15,
      attributeName: '环境类别',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '16',
      sort: 16,
      attributeName: '逻辑区域',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '17',
      sort: 17,
      attributeName: '硬件负责人A',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '18',
      sort: 18,
      attributeName: '硬件负责人B',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
    {
      key: '19',
      sort: 19,
      attributeName: '软件版本',
      attributeType: '',
      constraintRule: '',
      importanceLevel: 'key',
      audit: false,
      required: false,
      primaryKey: false,
      defaultValue: false
    },
  ];

  const columnsDefine = [
    {
      title: '序号',
      dataIndex: 'sort',
      key: 'sort',
    },
    {
      title: '属性名称',
      dataIndex: 'attributeName',
      key: 'attributeName',
      render: (text: string, record: any, index: number) => {
        return <Input value={text} onChange={(e) => {
          
        }}/>
      }
    },
    {
      title: '属性类型',
      dataIndex: 'attributeType',
      key: 'attributeType',
      render: (text: string, record: any, index: number) => {
        return <Select value={text} defaultValue={"字符串"} onChange={(e) => {
          
        }} />
      }
    },
    {
      title: '约束规则',
      dataIndex: 'constraintRule',
      key: 'constraintRule',
      render: (text: string, record: any, index: number) => {
        return <Select value={text} onChange={(e) => {
          
        }} />
      }
    },
    {
      title: '重要等级',
      dataIndex: 'importanceLevel',
      key: 'importanceLevel',
      render: (text: string, record: any, index: number) => {
        return <Select value={text} options={levelOptions} onChange={(e) => {
          
        }} />
      }
    },
    {
      title: '审计',
      dataIndex: 'audit',
      key: 'audit',
      render: (text: string, record: any, index: number) => {
        return <Checkbox />
      }
    },
    {
      title: '必填',
      dataIndex: 'required',
      key: 'required',
      render: (text: string, record: any, index: number) => {
        return <Checkbox />
      }
    },
    {
      title: 'Label',
      dataIndex: 'label',
      key: 'label',
      render: (text: string, record: any, index: number) => {
        return <Checkbox />
      }
    },
    {
      title: '业务主键',
      dataIndex: 'primaryKey',
      key: 'primaryKey',
      render: (text: string, record: any, index: number) => {
        return <Checkbox />
      }
    },
    {
      title: '默认属性值',
      dataIndex: 'defaultValue',
      key: 'defaultValue',
      render: (text: string, record: any, index: number) => {
        return <Input value={text} onChange={(e) => {
          
        }}/>
      }
    },
  ];

  return (
    <>
      <div className={classNames("right-btns")}>
        <div className={classNames("btns-left")}>
          <Button className={classNames("btns-left-btn")} icon={<PlusCircleOutlined />}>新建</Button>
          <Button className={classNames("btns-left-btn")} icon={<ArrowUpOutlined />}>上移</Button>
          <Button className={classNames("btns-left-btn")} icon={<ArrowDownOutlined />}>下移</Button>
        </div>
        <div className={classNames("btns-right")}>
          <Button className={classNames("btns-left-btn")}>取消</Button>
          <Button type='primary' style={{ marginRight: 0 }} className={classNames("btns-left-btn")}>保存</Button>
        </div>
      </div>
      {/* <Divider style={{ marginTop: '0' }}/> */}
      <div className={classNames("right-table")}>
        <Table dataSource={dataSourceDefine} columns={columnsDefine} />
      </div>
    </>
  )
}

const iconData = () => {
  const onSearch = (value: string) => {
    console.log('onSearch', value);
  }

  const dataSourceData = [
    {
      key: '1',
      sort: 1,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '2',
      sort: 2,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '3',
      sort: 3,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '4',
      sort: 4,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '5',
      sort: 5,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '6',
      sort: 6,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '7',
      sort: 7,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '8',
      sort: 8,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '9',
      sort: 9,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '10',
      sort: 10,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '11',
      sort: 11,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '12',
      sort: 12,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '13',
      sort: 13,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '14',
      sort: 14,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '15',
      sort: 15,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '16',
      sort: 16,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '17',
      sort: 17,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '18',
      sort: 18,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
    {
      key: '19',
      sort: 19,
      ciCode: 'JAF1718ACDB_MPC1C',
      serial: 'UINO123',
      assetName: '交换机23',
      managementIP: '192.168.1.26',
      assetClassification: '交换机',
      assetStatus: '在线',
      manufacturer: '思科',
      modelNumber: 'PCA-123',
      homeTerritory: '',
      homePlace: '',
      homeRoom: '',
      homeCabinet: '',
      shelfLocation: '',
      'initialU-position': 'xxxxxx',
      'endU-bit': 'xxxx-xxxxx',
      environmentalCategory: '',
      logicalRegion: '',
      hardwareManagerA: '',
      hardwareManagerB: '',
      softwareVersion: '0.0.1',
    },
  ];

  const columnsData = [
    {
      title: '序号',
      dataIndex: 'sort',
      key: 'sort',
    },
    {
      title: 'ciCode',
      dataIndex: 'ciCode',
      key: 'ciCode',
    },
    {
      title: '序列号',
      dataIndex: 'serial',
      key: 'serial',
    },
    {
      title: '资产名称',
      dataIndex: 'assetName',
      key: 'assetName',
    },
    {
      title: '管理IP',
      dataIndex: 'managementIP',
      key: 'managementIP',
    },
    {
      title: '资产分类',
      dataIndex: 'assetClassification',
      key: 'assetClassification',
    },
    {
      title: '资产状态',
      dataIndex: 'assetStatus',
      key: 'assetStatus',
    },
    {
      title: '厂商',
      dataIndex: 'manufacturer',
      key: 'manufacturer',
    },
    {
      title: '型号',
      dataIndex: 'modelNumber',
      key: 'modelNumber',
    },
    {
      title: '归属地域',
      dataIndex: 'homeTerritory',
      key: 'homeTerritory',
    },
    {
      title: '归属地点',
      dataIndex: 'homePlace',
      key: 'homePlace',
    },
    {
      title: '归属房间',
      dataIndex: 'homeRoom',
      key: 'homeRoom',
    },
    {
      title: '归属机柜',
      dataIndex: 'homeCabinet',
      key: 'homeCabinet',
    },
    {
      title: '货架位置',
      dataIndex: 'shelfLocation',
      key: 'shelfLocation',
    },
    {
      title: '起始U位',
      dataIndex: 'initialU-position',
      key: 'initialU-position',
    },
    {
      title: '结束U位',
      dataIndex: 'endU-bit',
      key: 'endU-bit',
    },
    {
      title: '环境类别',
      dataIndex: 'environmentalCategory',
      key: 'environmentalCategory',
    },
    {
      title: '逻辑区域',
      dataIndex: 'logicalRegion',
      key: 'logicalRegion',
    },
    {
      title: '硬件负责人A',
      dataIndex: 'hardwareManagerA',
      key: 'hardwareManagerA',
    },
    {
      title: '硬件负责人B',
      dataIndex: 'hardwareManagerB',
      key: 'hardwareManagerB',
    },
    {
      title: '软件版本',
      dataIndex: 'softwareVersion',
      key: 'softwareVersion',
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
    label: '图标定义',
    children: iconDefinition(),
  },
  {
    key: '2',
    label: '图标数据',
    children: iconData(),
  },
];


const ObjectManage = () => {
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
                defaultActiveKey={['common', 'svg', 'picture', 'card']}
              >
                <Panel header="图形" key="picture">
                  {IMAGE_SHAPES.map(shape => {
                    return (
                      (
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            return false;
                          }}
                          key={`panel_a_${shape.key}`}
                          href="a"
                          className={classNames("custom-sidebar-node")}
                          data-shape-type="image"
                          data-shape-width={shape.width}
                          data-shape-height={shape.height}
                          data-shape-name={shape.key}
                          data-shape-label={shape.name}
                          title={shape.name}
                        >
                          <Tooltip
                            placement="top"
                            title={shape.name}
                            key={`panel_${shape.key}`}
                            className={classNames("tooltip")}
                          >
                            <img
                              className={classNames("sidebar-node-image")} 
                              src={shape.logo} alt="" 
                            />
                            <span className={classNames("sidebar-node-label")}>
                              {shape.name}
                            </span>
                          </Tooltip>
                        </a>
                      )
                    )
                  })}
    
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

export default ObjectManage;