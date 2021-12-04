import React from "react";
import { Card, Select, Table } from "antd";
import { CustomTitle } from ".";
import { Cars, FeesFilter } from "../mock";

const { Option } = Select;

function CarUse() {
  const handleChange = (e) => {
    console.log(`selected ${e}`);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
      <div style={{ padding: 8 }}>
        <Select
          defaultValue={FeesFilter[dataIndex][0].value}
          style={{ width: 120 }}
          onChange={handleChange}
        >
          {FeesFilter[dataIndex].map(({ value, title }: any) => (
            <Option value={value}>{title}</Option>
          ))}
        </Select>
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
      title: "类别",
      dataIndex: "category",
      key: "category",
      ...getColumnSearchProps("category"),
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
      ...getColumnSearchProps("type"),
    },
    {
      title: "用途",
      dataIndex: "use",
      key: "use",
      ...getColumnSearchProps("use"),
    },
    {
      title: "时间周期",
      dataIndex: "time",
      key: "time",
      ...getColumnSearchProps("time"),
    },
    {
      title: "车辆事故",
      dataIndex: "issue",
      key: "issue",
      // ...getColumnSearchProps("issue"),
    },
    {
      title: "交通违章",
      dataIndex: "rules",
      key: "rules",
      sorter: (a, b) => a.rules - b.rules,
      sortDirections: ["descend", "ascend"],
    },
  ];

  return (
    <Card
      title={
        <CustomTitle
          title="各机关单位用车情况"
          // color="#fff"
          // titleColor="#fff"
        />
      }
      bordered={false}
      // headStyle={{ backgroundColor: "#00b0e4" }}
      // bodyStyle={{ backgroundColor: "#00b0e4" }}
    >
      <Table dataSource={Cars} columns={columns} pagination={false} />
    </Card>
  );
}

export default CarUse;
