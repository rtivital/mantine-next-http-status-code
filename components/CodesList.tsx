import { Text, TextInput, Hr } from "@mantine/core";
import data from "./http_codes.json";
import HttpCode from "./HttpCode";
import React, { useState } from "react";

export default function CodesList() {
  const [value, setValue] = useState("");
  const parsedValue = value.trim().toLowerCase();

  const items = data.map((group) => {
    const codes = group.codes
      .filter(
        (code) =>
          code.number.includes(value) ||
          code.name.trim().toLowerCase().includes(parsedValue)
      )
      .map((code) => (
        <HttpCode
          color={group.color}
          number={code.number}
          name={code.name}
          description={code.description}
          key={code.name}
          value={parsedValue}
        />
      ));

    if (codes.length === 0) {
      return null;
    }

    return (
      <div key={group.mask}>
        <div style={{ marginBottom: 20 }}>
          <Text size="lg" weight={700} color={group.color}>
            {group.mask}{" "}
          </Text>
          <Text size="sm" color="gray">
            {" "}
            {group.group_description}
          </Text>
        </div>
        {codes}
        <Hr variant="solid" size="md" style={{ margin: 10, opacity: 0.2 }} />
      </div>
    );
  });

  return (
    <div>
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Search by code or name"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        id="search"
      />

      <div>{items}</div>
    </div>
  );
}
