import { Card, Row, Col } from "antd";
import React from "react";
import { CustomTitle } from ".";
import styles from "../App.module.less";

import sdl1 from "../assets/sdl_1.png";
import sdl2 from "../assets/sdl_2.png";
import sdl3 from "../assets/sdl_3.png";
import sdl4 from "../assets/sdl_4.png";
import sdl5 from "../assets/sdl_5.png";
import sdl6 from "../assets/sdl_6.png";
import sdl7 from "../assets/sdl_7.png";
import sdl8 from "../assets/sdl_8.png";
import sdl9 from "../assets/sdl_9.png";
import sdl10 from "../assets/sdl_10.png";

function SysDesignLogic() {
  return (
    <Card title={<CustomTitle title="系统设计逻辑" />} className={styles.sdl}>
      <Row justify="space-between">
        <Col>
          <img src={sdl1} alt="" />
        </Col>
        <Col>
          <img src={sdl2} alt="" />
        </Col>
        <Col>
          <img src={sdl3} alt="" />
        </Col>
        <Col>
          <img src={sdl4} alt="" />
        </Col>
        <Col>
          <img src={sdl5} alt="" />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col>
          <img src={sdl6} alt="" />
        </Col>
        <Col>
          <img src={sdl7} alt="" />
        </Col>
        <Col>
          <img src={sdl8} alt="" />
        </Col>
        <Col>
          <img src={sdl9} alt="" />
        </Col>
        <Col>
          <img src={sdl10} alt="" />
        </Col>
      </Row>
    </Card>
  );
}

export default SysDesignLogic;
