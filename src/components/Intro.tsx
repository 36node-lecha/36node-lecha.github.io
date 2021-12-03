import React from "react";
import { DemoPie1, DemoPie2, DemoPie3, DemoPie4 } from "../charts";
import { Row, Col, Card, Divider, Typography, Progress, Badge } from "antd";
import { CustomTitle } from ".";
const { Title, Paragraph } = Typography;

import car from "../assets/sys_car.png";
import core_bg1 from "../assets/core_bg1.png";
import core_bg2 from "../assets/core_bg2.png";

function Intro() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <Card
          title={<CustomTitle title="系统介绍" />}
          // style={{ paddingBottom: 40 }}
        >
          <Title level={5}>牵头单位：诸暨市大数据发展管理中心</Title>
          <Title level={5}>使用单位：面向全市企事业单位开放使用</Title>
          <Paragraph>
            <span style={{ fontSize: 16, fontWeight: "bold" }}>应用介绍：</span>
            结合我市的实际需求，为用车单位提供集约、安全、一体和便捷
            的使用方式。在规避各单位重复建设导致资源浪费的同时，更能有效的抓取
            我市公务用车使用和管理的过程与成果数据，从而真正做到数据的汇总与整
            合。 将传统用车的“结果倒查”向“过程管控”转型，向“预判决策” 的方
            向迈进，利用大数据的结构化分析体系，建立高效的用车数据化管理模型，从
            而向用车单位提供科学合理的建议与指令，大幅节约公务用车的使用经费。
            项目利用大数据作为量化分析依据,以智能调度、扁平化指挥、数据可视化应
            用，全过程自动监管的先进方法和理念, 实现对我市公务用车的智慧决策、监
            管与建议的目标。
          </Paragraph>
          <Row justify="end" gutter={[24, 24]}>
            <img src={car} style={{ width: "50%", marginTop: 50 }} />
          </Row>
        </Card>
      </Col>
      <Col span={16}>
        <Card title={<CustomTitle title="核心指标" />}>
          <Row justify="end" gutter={[64, 24]}>
            <Col span={11}>
              <Title level={5}>全市公务用车管控（上线）率：</Title>
              <Row justify="space-around" style={{ textAlign: "center" }}>
                <Col>
                  <div
                    style={{
                      marginTop: 20,
                      width: 128,
                      height: 128,
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "center",
                      background: `no-repeat 100%/100% url(${core_bg1})`,
                    }}
                  >
                    <span
                      style={{ color: "white", fontSize: 24, marginBottom: 20 }}
                    >
                      76%
                    </span>
                  </div>
                  <p style={{ margin: "20px 0" }}>自有车辆</p>
                </Col>
                <Col>
                  <div
                    style={{
                      marginTop: 20,
                      width: 128,
                      height: 128,
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "center",
                      background: `no-repeat 100%/100% url(${core_bg2})`,
                    }}
                  >
                    <span
                      style={{ color: "white", fontSize: 24, marginBottom: 20 }}
                    >
                      80%
                    </span>
                  </div>
                  <p style={{ margin: "20px 0" }}>租赁车辆</p>
                </Col>
              </Row>
            </Col>
            <Col span={13} pull={1}>
              <Badge dot color="#5399F0" text="全市公务用车使用申请审批量：" />
              <Progress
                percent={50}
                strokeColor="#5399F0"
                status="active"
                format={(percent) => `${percent * 100}次`}
                style={{ margin: "10px 0" }}
              />
              <Badge dot color="#2274E7" text="全市公用车维修申请审批量：" />
              <Progress
                percent={70}
                strokeColor="#2274E7"
                status="active"
                format={(percent) => `${percent * 100}次`}
                style={{ margin: "10px 0" }}
              />
              <Badge dot color="#FFB800" text="全市公务用车维修结果反馈量：" />
              <Progress
                percent={90}
                strokeColor="#FFB800"
                status="active"
                format={(percent) => `${percent * 100}次`}
                style={{ margin: "10px 0" }}
              />
            </Col>
          </Row>
          <Divider />
          <Row justify="end" gutter={[24, 24]}>
            <Col
              span={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Title level={5}>
                全市公务用车费用总计：
                <span style={{ fontWeight: "bold", color: "#999999" }}>
                  万元
                </span>
              </Title>
              <div style={{ width: "80%", height: 160 }}>
                <DemoPie1 />
              </div>
            </Col>
            <Col
              span={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Title level={5}>公务用车（自有车辆） 支出费用同比：</Title>
              <div style={{ width: "80%", height: 160 }}>
                <DemoPie2 />
              </div>
            </Col>
            <Col
              span={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Title level={5}>公务用车（租赁车辆） 支持费用同比：</Title>
              <div style={{ width: "80%", height: 160 }}>
                <DemoPie3 />
              </div>
            </Col>
            <Col
              span={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Title level={5}>公务用车 违章次数同比：</Title>
              <div style={{ width: "80%", height: 160 }}>
                <DemoPie4 />
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default Intro;
