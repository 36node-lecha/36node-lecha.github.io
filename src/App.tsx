import { useState } from "react";
import { Card, Col, Divider, Row, Space } from "antd";
import styles from "./App.module.less";
import structureImg from "./assets/structure.png";
import { Map, APILoader, Geolocation } from "@uiw/react-amap";

function App() {
  const [data, setData] = useState();
  return (
    <main className={styles.app}>
      <header className={styles.header}>诸暨市公务用车-事件管理平台</header>
      <section className={styles.container}>
        <Space direction="vertical" size="large">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Card
                title={
                  <>
                    <Divider
                      type="vertical"
                      style={{ borderWidth: 5, borderColor: "red", height: 18 }}
                    />
                    系统介绍
                  </>
                }
                className={styles.structure}
              >
                <img src={structureImg} alt="多跨协同" />
              </Card>
            </Col>
            <Col span={16}>
              <Card
                title={
                  <>
                    <Divider
                      type="vertical"
                      style={{ borderWidth: 5, borderColor: "red", height: 18 }}
                    />
                    核心指标
                  </>
                }
                className={styles.structure}
              >
                <img src={structureImg} alt="多跨协同" />
              </Card>
            </Col>
          </Row>

          <Card
            title={
              <>
                <Divider
                  type="vertical"
                  style={{ borderWidth: 5, borderColor: "red", height: 18 }}
                />
                系统设计逻辑
              </>
            }
            className={styles.structure}
          >
            <img src={structureImg} alt="多跨协同" />
          </Card>

          <Card
            title={
              <>
                <Divider
                  type="vertical"
                  style={{ borderWidth: 5, borderColor: "red", height: 18 }}
                />
                多跨协同
              </>
            }
            className={styles.structure}
          >
            <img src={structureImg} alt="多跨协同" />
          </Card>

          <Card
            title={
              <>
                <Divider
                  type="vertical"
                  style={{ borderWidth: 5, borderColor: "red", height: 18 }}
                />
                改革成效
              </>
            }
            className={styles.structure}
          >
            <img src={structureImg} alt="多跨协同" />
          </Card>

          <Card
            title={
              <>
                <Divider
                  type="vertical"
                  style={{ borderWidth: 5, borderColor: "red", height: 18 }}
                />
                全市公务用车数量
              </>
            }
            bordered={false}
            className={styles.structure}
          >
            <img src={structureImg} alt="多跨协同" />
          </Card>

          <Card
            title={
              <>
                <Divider
                  type="vertical"
                  style={{ borderWidth: 5, borderColor: "red", height: 18 }}
                />
                全市公务用车费用情况
              </>
            }
            bordered={false}
            className={styles.structure}
          >
            <img src={structureImg} alt="多跨协同" />
          </Card>

          <Card
            title={
              <>
                <Divider
                  type="vertical"
                  style={{ borderWidth: 5, borderColor: "red", height: 18 }}
                />
                各机关用车情况
              </>
            }
            bordered={false}
            className={styles.structure}
          >
            <img src={structureImg} alt="多跨协同" />
          </Card>

          <Card
            title={
              <>
                <Divider
                  type="vertical"
                  style={{ borderWidth: 5, borderColor: "red", height: 18 }}
                />
                应用场景
              </>
            }
            bordered={false}
            className={styles.structure}
          >
            <div style={{ width: "100%", height: "300px" }}>
              <APILoader akay="a862b590921eac6638988faca50827da">
                <Map>
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

          <Card
            title={
              <>
                <Divider
                  type="vertical"
                  style={{ borderWidth: 5, borderColor: "red", height: 18 }}
                />
                实时数据
              </>
            }
            bordered={false}
            className={styles.structure}
          >
            <img src={structureImg} alt="多跨协同" />
          </Card>
        </Space>
      </section>
    </main>
  );
}

export default App;
