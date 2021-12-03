import { Card, Row, Col } from "antd";
import React from "react";
import { CustomTitle } from ".";
import styles from "../App.module.less";

import rev_1 from "../assets/rev_1.png";
import rev_2 from "../assets/rev_2.png";
import rev_3 from "../assets/rev_3.png";
import rev_4 from "../assets/rev_4.png";
import rev_5 from "../assets/rev_5.png";
import rev_6 from "../assets/rev_6.png";
import rev_7 from "../assets/rev_7.png";

function Reform() {
  return (
    <Card title={<CustomTitle title="改革成效" />} className={styles.revc}>
      <Row justify="space-between" className={styles.revrow}>
        <Col>
          <div className={styles.revrow_item}>
            <div>
              <img src={rev_1} alt="" />
              <p>
                <span>99</span>次
              </p>
            </div>
            <p>车辆使用审批违规处理</p>
          </div>
        </Col>
        <Col>
          <div className={styles.revrow_item}>
            <div>
              <img src={rev_2} alt="" />
              <p>
                <span>76</span>次
              </p>
            </div>
            <p>处理未及时归还车辆</p>
          </div>
        </Col>
        <Col>
          <div className={styles.revrow_item}>
            <div>
              <img src={rev_3} alt="" />
              <p>
                <span>56</span>次
              </p>
            </div>
            <p>车辆维修违规处理</p>
          </div>
        </Col>
        <Col>
          <div className={styles.revrow_item}>
            <div>
              <img src={rev_4} alt="" />
              <p>
                <span>12</span>次
              </p>
            </div>
            <p>不合理申请驳回</p>
          </div>
        </Col>
        <Col>
          <div className={styles.revrow_item}>
            <div>
              <img src={rev_5} alt="" />
              <p>
                <span>23</span>次
              </p>
            </div>
            <p>维修厂违规操作</p>
          </div>
        </Col>
        <Col>
          <div className={styles.revrow_item}>
            <div>
              <img src={rev_6} alt="" />
              <p>
                <span>12</span>次
              </p>
            </div>
            <p>配件核价驳回</p>
          </div>
        </Col>
        <Col>
          <div className={styles.revrow_item}>
            <div>
              <img src={rev_7} alt="" />
              <p>
                <span>68</span>次
              </p>
            </div>
            <p>公务用车使用(自有车辆)违章</p>
          </div>
        </Col>
      </Row>
      <Row gutter={[32, 24]}>
        <Col span={6}>
          <section className={styles.rev}>
            <h3>1、提升信息化管理水平</h3>
            <p>
              车辆购置时间、维保时间、时效、车辆里程、维保时
              间、时效、车辆里程、维保记录维保记录等……
            </p>
          </section>
        </Col>
        <Col span={6}>
          <section className={styles.rev}>
            <h3>2、加强调度管控手段</h3>
            <p>
              车辆购置时间、维保时间、时效、车辆里程、维保时
              间、时效、车辆里程、维保记录维保记录等……
            </p>
          </section>
        </Col>
        <Col span={6}>
          <section className={styles.rev}>
            <h3>3、维修全面掌控</h3>
            <p>
              车辆购置时间、维保时间、时效、车辆里程、维保时
              间、时效、车辆里程、维保记录维保记录等……
            </p>
          </section>
        </Col>
        <Col span={6}>
          <section className={styles.rev}>
            <h3>4、财务报批有效追查</h3>
            <p>
              车辆购置时间、维保时间、时效、车辆里程、维保时
              间、时效、车辆里程、维保记录维保记录等……
            </p>
          </section>
        </Col>
      </Row>
    </Card>
  );
}

export default Reform;
