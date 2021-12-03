import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";
import { CustomTitle } from ".";
import {
  Map,
  APILoader,
  Geolocation,
  ScaleControl,
  ToolBarControl,
  ControlBarControl,
} from "@uiw/react-amap";

import styles from "../App.module.less";

import entry_1 from "../assets/entry_1.png";
import entry_2 from "../assets/entry_2.png";
import entry_3 from "../assets/entry_3.png";
import entry_4 from "../assets/entry_4.png";

function ApplyCase() {
  const [data, setData] = useState();

  return (
    <Card
      title={<CustomTitle title="应用场景" />}
      bordered={false}
      className={styles.map}
    >
      <Row justify="space-between" className={styles.maprow}>
        <Col>
          <img src={entry_1} alt="" />
          <span className={styles.title}>监督单位入口</span>
        </Col>
        <Col>
          <img src={entry_2} alt="" />
          <span className={styles.title}>使用单位入口</span>
        </Col>
        <Col>
          <img src={entry_3} alt="" />
          <span className={styles.title}>维修工厂入口</span>
        </Col>
        <Col>
          <img src={entry_4} alt="" />
          <span className={styles.title}>浙政钉入口</span>
        </Col>
      </Row>
      <div className={styles.mapcontainer}>
        <ul className={styles.entry}>
          {[
            { name: "选择单位", bg: "#e64e4e" },
            { name: "显示全部", bg: "#db872e" },
            { name: "单位查询", bg: "#cdb42b" },
            { name: "车辆查询", bg: "#2acf9b" },
            { name: "轨迹查询", bg: "#2889cd" },
          ].map(({ name, bg }) => (
            <li style={{ backgroundColor: bg }}>{name}</li>
          ))}
        </ul>
        <APILoader akay="a862b590921eac6638988faca50827da">
          <Map center={[120.246602, 29.709398]}>
            <ScaleControl offset={[16, 30]} position="LB" />
            <ToolBarControl offset={[16, 10]} position="RB" />
            <ControlBarControl offset={[16, 180]} position="RB" />
            <Geolocation
              // 是否使用高精度定位，默认:true
              enableHighAccuracy={true}
              // 超过10秒后停止定位，默认：5s
              timeout={10000}
              // 定位按钮的停靠位置
              // 官方 v2 不再支持
              // buttonPosition="RB"

              // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
              // 官方 v2 不再支持
              // buttonOffset={new AMap.Pixel(10, 20)}

              // 定位成功后是否自动调整地图视野到定位点
              zoomToAccuracy={true}
              onComplete={(data) => {
                console.log("返回数据：", setData, data);
                setData(data);
              }}
              onError={(data) => {
                console.log("错误返回数据：", data);
                setData(data);
              }}
            />
          </Map>
        </APILoader>
      </div>
    </Card>
  );
}

export default ApplyCase;
