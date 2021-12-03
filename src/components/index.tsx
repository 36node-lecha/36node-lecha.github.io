import React from "react";
import { Divider } from "antd";

interface ICustomTitleProps {
  title: string;
  color?: string;
  titleColor?: string;
}

export const CustomTitle = ({
  title,
  color,
  titleColor,
}: ICustomTitleProps) => {
  return (
    <div style={{ color: titleColor || "#111" }}>
      <Divider
        type="vertical"
        style={{ borderWidth: 5, borderColor: color || "#018EED", height: 18 }}
      />
      {title}
    </div>
  );
};
