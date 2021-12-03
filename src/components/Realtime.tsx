import React from "react";
import { Card, Row, Col, List } from "antd";
import { CustomTitle } from ".";
import {
  UsedCars,
  RepairedCars,
  DoneCars,
  IlegalCars,
  PoliceCars,
  WarningCars,
} from "../mock";

function Realtime() {
  return (
    <Card title={<CustomTitle title="实时数据" />} bordered={false}>
      <Row gutter={[24, 24]}>
        <Col span={8}>
          <Card
            title={
              <CustomTitle title="使用中车辆" color="#fff" titleColor="#fff" />
            }
            headStyle={{ backgroundColor: "#cf5718" }}
            bodyStyle={{ backgroundColor: "#e6954e" }}
            bordered={false}
          >
            <List
              dataSource={UsedCars}
              size="small"
              renderItem={(item) => (
                <List.Item
                  style={{
                    color: "#fff",
                    borderBottom: "1px dashed #fff",
                  }}
                >
                  {item}
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={
              <CustomTitle title="正在维修" color="#fff" titleColor="#fff" />
            }
            headStyle={{ backgroundColor: "#c39e32" }}
            bodyStyle={{ backgroundColor: "#dfc971" }}
            bordered={false}
          >
            <List
              dataSource={RepairedCars}
              size="small"
              renderItem={(item) => (
                <List.Item
                  style={{
                    color: "#fff",
                    borderBottom: "1px dashed #fff",
                  }}
                >
                  {item}
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={
              <CustomTitle title="已处理问题" color="#fff" titleColor="#fff" />
            }
            headStyle={{ backgroundColor: "#ca3131" }}
            bodyStyle={{ backgroundColor: "#e37070" }}
            bordered={false}
          >
            <List
              dataSource={DoneCars}
              size="small"
              renderItem={(item) => (
                <List.Item
                  style={{
                    color: "#fff",
                    borderBottom: "1px dashed #fff",
                  }}
                >
                  {item}
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={
              <CustomTitle title="违规事件" color="#fff" titleColor="#fff" />
            }
            headStyle={{ backgroundColor: "#1fa56c" }}
            bodyStyle={{ backgroundColor: "#42c598" }}
            bordered={false}
          >
            <List
              dataSource={IlegalCars}
              size="small"
              renderItem={(item) => (
                <List.Item
                  style={{
                    color: "#fff",
                    borderBottom: "1px dashed #fff",
                  }}
                >
                  {item}
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={
              <CustomTitle title="违章报警" color="#fff" titleColor="#fff" />
            }
            headStyle={{ backgroundColor: "#7068c7" }}
            bodyStyle={{ backgroundColor: "#a9a3e1" }}
            bordered={false}
          >
            <List
              dataSource={PoliceCars}
              size="small"
              renderItem={(item) => (
                <List.Item
                  style={{
                    color: "#fff",
                    borderBottom: "1px dashed #fff",
                  }}
                >
                  {item}
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={
              <CustomTitle title="预警问题" color="#fff" titleColor="#fff" />
            }
            headStyle={{ backgroundColor: "#c55471" }}
            bodyStyle={{ backgroundColor: "#e092aa" }}
            bordered={false}
          >
            <List
              dataSource={WarningCars}
              size="small"
              renderItem={(item) => (
                <List.Item
                  style={{
                    color: "#fff",
                    borderBottom: "1px dashed #fff",
                  }}
                >
                  {item}
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default Realtime;
