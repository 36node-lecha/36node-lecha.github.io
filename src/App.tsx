import { Card, Space } from "antd";
import styles from "./App.module.less";
import { CustomTitle } from "./components";
import { DemoColumn } from "./charts";

import Realtime from "./components/Realtime";
import ApplyCase from "./components/ApplyCase";
import SysDesignLogic from "./components/SysDesignLogic";
import Reform from "./components/Reform";
import Intro from "./components/Intro";

import structureImg from "./assets/structure.jpg";
import CarUse from "./components/CarUse";
import AllCarsFees from "./components/AllCarsFees";

function App() {
  return (
    <main className={styles.app}>
      <header className={styles.header}>诸暨市公车一件事数字化应用场景</header>
      <section className={styles.container}>
        <Space direction="vertical" size="large">
          <Intro />
          <SysDesignLogic />
          <Card
            title={<CustomTitle title="多跨协同" />}
            className={styles.structure}
          >
            <img src={structureImg} alt="多跨协同" />
          </Card>
          <Reform />

          <Card
            title={<CustomTitle title="全市公务用车数量" />}
            bordered={false}
          >
            <DemoColumn />
          </Card>

          <AllCarsFees />
          <CarUse />
          <ApplyCase />
          <Realtime />
        </Space>
      </section>
    </main>
  );
}

export default App;
