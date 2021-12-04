import React from "react";
import { Card, Radio, Space, Table, Typography } from "antd";
import { CustomTitle } from ".";
import { FeesFilter, SelfCarsFees } from "../mock";
const { Title } = Typography;

function AllCarsFees() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
      <div style={{ padding: 8 }}>
        <Radio.Group
          defaultValue={FeesFilter[dataIndex][0].value}
          onChange={handleChange}
          style={{ marginTop: 16 }}
        >
          {FeesFilter[dataIndex].map(({ value, title }: any) => (
            <Radio.Button value={value}>{title}</Radio.Button>
          ))}
        </Radio.Group>
      </div>
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
  });

  const columns = [
    {
      title: "全部机关",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "日期选择",
      dataIndex: "date",
      key: "date",
      ...getColumnSearchProps("date"),
    },
    {
      title: "全部费用",
      dataIndex: "fee",
      key: "fee",
      ...getColumnSearchProps("fee"),
    },
    {
      title: "行驶里程",
      dataIndex: "distance",
      key: "distance",
      ...getColumnSearchProps("distance"),
    },
  ];

  return (
    <Card title={<CustomTitle title="全市公务用车费用情况" />} bordered={false}>
      <Title level={5}>自有车辆：</Title>
      <br />
      <Table dataSource={SelfCarsFees} columns={columns} pagination={false} />
      <br />
      <Title level={5}>公务用车使用支出费用（租赁车辆）：</Title>
      <br />
      <Table dataSource={SelfCarsFees} columns={columns} pagination={false} />
    </Card>
  );
}

export default AllCarsFees;
