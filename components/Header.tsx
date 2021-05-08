import { Title, Text } from "@mantine/core";

export default function Header() {
  return (
    <div style={{ marginBottom: 5 }}>
      <title>HTTP Status Codes</title>
      <Title order={1}>HTTP Status Codes</Title>
      <Text color="gray" size="sm">
        This is a list of Hypertext Transfer Protocol (HTTP) response status
        codes.{" "}
      </Text>
    </div>
  );
}
