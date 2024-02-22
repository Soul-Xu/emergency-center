import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import CustomLayout from '@/layout/CustomLayout'
import CustomLayout from '../../layout/CustomLayout';
import { Input, Card, Button } from 'antd'
// @ts-ignore
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);
const { Search } = Input;

const cardList = [
  {
    id: "ai-1",
    title: "AI服务架构图",
    createAt: "2024-01-01",
    imgUrl: require("../../static/images/diagram1.png")
  },
  {
    id: "ai-2",
    title: "AI服务架构图",
    createAt: "2024-01-01",
    imgUrl: require("../../static/images/diagram2.png"),
  },
  {
    id: "ai-3",
    title: "AI服务架构图",
    createAt: "2024-01-01",
    imgUrl: require("../../static/images/diagram3.png"),
  },
  {
    id: "ai-4",
    title: "AI服务架构图",
    createAt: "2024-01-01",
    imgUrl: require("../../static/images/diagram4.png"),
  },
  {
    id: "ai-5",
    title: "AI服务架构图",
    createAt: "2024-01-01",
    imgUrl: require("../../static/images/diagram5.png"),
  },
  {
    id: "ai-6",
    title: "AI服务架构图",
    createAt: "2024-01-01",
    imgUrl: require("../../static/images/diagram6.png"),
  },
]

const contentList = [
  {
    id: "xx01",
    name: "Ai服务地铁图",
    number: 8
  },
  {
    id: "xx02",
    name: "登陆链路",
    number: 7
  },
  {
    id: "xx03",
    name: "登陆链路",
    number: 8
  },
  {
    id: "xx04",
    name: "登陆链路",
    number: 6
  },
  {
    id: "xx05",
    name: "xxx链路",
    number: 7
  },
  {
    id: "xx06",
    name: "xx链路",
    number: 8
  },{
    id: "xx07",
    name: "xxxxx图",
    number: 6
  },
  {
    id: "xx08",
    name: "登陆链路",
    number: 7
  },
]

const LayoutSquare = () => {
  const navigate = useNavigate()
  const onSearch = (value: any, _e: any, info: any) => {
    console.log("value", value)
  }

  const onAddDiagram = () => {
    // navigate("/home/layoutSquare/addDiagrams")
    // window.open("/graph", "_blank");
    window.open("http://localhost:8080/", "_blank")
  }

  return (
    <div>
      <CustomLayout>
        <div className={classNames("container")}>
          <div className={classNames("content")}>
            <div className={classNames("search")}>
              <Search
                // addonBefore={<img width={28} height={28} src={require("../../static/images/search_icon.png")} />}
                addonBefore={""}
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                style={{ width: 304 }}
              />
              <Button type='primary' className={classNames("btn")} onClick={onAddDiagram}>新建</Button>
            </div>
            <div className={classNames("card")}>
              {
                cardList.map((card: any) => {
                  return (
                    // eslint-disablep
                    <Card key={card?.id} bordered={false} className={classNames("card-item")}>
                      <div>
                        <div className={classNames("card-item-img")}>
                          <img src={(card?.imgUrl)} alt={card?.title}/>
                        </div>
                        <div className={classNames("card-item-content")}>
                          <span>{card?.title}</span>
                          <span>{card?.createAt}</span>
                        </div>
                      </div>
                    </Card>
                  )
                })
              }
            </div>
          </div>
          <div className={classNames("info")}>
            <div className={classNames("info-title")}>
              <span className={classNames("info-title-tip")}>链路总数(个)</span>
              <span className={classNames("info-title-amount")}>34</span>
            </div>
            <div className={classNames("info-health")}>
              <div className={classNames("info-health-title")}>健康情况</div>
              <div className={classNames("info-health-process")}>
                <div className={classNames("process-no")}>
                  <div className={classNames("process-no-ok")}>78%</div>
                  <div className={classNames("process-no-notok")}>22%</div>
                </div>
                <div className={classNames("process-bar")}>
                  <div className={classNames("process-bar-ok")}></div>
                  <div className={classNames("process-bar-notok")}></div>
                </div>
              </div>
            </div>
            <div className={classNames("info-error")}>
              <div className={classNames("info-error-title")}>异常清单</div>
              <div className={classNames("info-error-list")}>
                <div className={classNames("list-title")}>
                  <div className={classNames("list-title-left")}>链路名称</div>
                  <div className={classNames("list-title-left")}>告警数量</div>
                </div>
                <div className={classNames("list-content")}>
                  {
                    contentList.map((content:any) => {
                      return (
                        <div className={classNames("list-content-item")} key={content.id}>
                          <div className={classNames("content-item-left")}>{content.name}</div>
                          <div className={classNames("content-item-right")}>{content.number}</div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomLayout>
    </div>
  );
};

export default LayoutSquare;