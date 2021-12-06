import { Column, Pie } from "@ant-design/charts";

export const DemoColumn = () => {
  const data = [
    {
      name: "自有车辆",
      部门: "市政府",
      汽车数量: 720,
    },
    {
      name: "租赁车辆",
      部门: "市政府",
      汽车数量: 240,
    },
    {
      name: "自有车辆",
      部门: "公安局",
      汽车数量: 380,
    },
    {
      name: "租赁车辆",
      部门: "公安局",
      汽车数量: 640,
    },
    {
      name: "自有车辆",
      部门: "交警大队",
      汽车数量: 720,
    },
    {
      name: "租赁车辆",
      部门: "交警大队",
      汽车数量: 440,
    },
    {
      name: "自有车辆",
      部门: "城市管理局",
      汽车数量: 620,
    },
    {
      name: "租赁车辆",
      部门: "城市管理局",
      汽车数量: 640,
    },
    {
      name: "自有车辆",
      部门: "法院",
      汽车数量: 380,
    },
    {
      name: "租赁车辆",
      部门: "法院",
      汽车数量: 640,
    },
    {
      name: "自有车辆",
      部门: "大数据管理中心",
      汽车数量: 180,
    },
    {
      name: "租赁车辆",
      部门: "大数据管理中心",
      汽车数量: 440,
    },
  ];
  const config = {
    data,
    isGroup: true,
    xField: "部门",
    yField: "汽车数量",
    seriesField: "name",

    /** 设置颜色 */
    color: ["#30DE99", "#28B5F7"],

    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
      // 可手动配置 label 数据标签位置
      position: "top",
      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: "interval-adjust-position",
        }, // 数据标签防遮挡
        {
          type: "interval-hide-overlap",
        }, // 数据标签文颜色自动调整
        {
          type: "adjust-color",
        },
      ],
    },
  };
  return <Column {...config} />;
};

export const DemoPie1 = () => {
  const data = [
    {
      type: "公务用车费用",
      value: 189,
    },
    {
      type: "全年总费用",
      value: 390,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    color: ["#62c1dd", "#FDA57F"],
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    legend: false,
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "",
      },
    },
  };
  return <Pie {...config} />;
};

export const DemoPie2 = () => {
  const data = [
    {
      type: "公务用车",
      value: 75,
    },
    {
      type: "自有车辆支出费用占比",
      value: 25,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    color: ["#21d9e0", "#EB6C53"],
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    legend: false,
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "",
      },
    },
  };
  return <Pie {...config} />;
};

export const DemoPie3 = () => {
  const data = [
    {
      type: "公务用车",
      value: 35,
    },
    {
      type: "租赁车辆支出费用占比",
      value: 55,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    color: ["#21d9e0", "#EB6C53"],

    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    legend: false,
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "",
      },
    },
  };
  return <Pie {...config} />;
};

export const DemoPie4 = () => {
  const data = [
    {
      type: "公务用车",
      value: 15,
    },
    {
      type: "自有车辆违章次数占比",
      value: 80,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    color: ["#21d9e0", "#EB6C53"],
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    legend: false,
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "",
      },
    },
  };
  return <Pie {...config} />;
};
