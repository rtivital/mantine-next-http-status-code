import { Text, Highlight } from "@mantine/core";
import React from "react";
import { Badge } from "@mantine/core";

interface CodeProps {
  number: string;
  name: string;
  description: string;
  color: string;
  value: string;
}

export default function HttpCode({
  color,
  number,
  name,
  description,
  value,
}: CodeProps) {
  return (
    <div style={{ marginTop: 7 }}>
      <div style={{ position: "relative", top: "1px" }}>
        <Badge radius="xs" color={color}>
          {number}
        </Badge>
      </div>

      <Highlight
        highlight={value}
        weight={500}
        style={{
          position: "relative",
          bottom: "20px",
          left: "60px",
        }}
      >
        {name}
      </Highlight>

      <Text
        size="sm"
        style={{
          marginTop: -8,
          position: "relative",
          bottom: "10px",
          left: "60px",
          width: "92%",
        }}
      >
        {description}
      </Text>
    </div>
  );
}
