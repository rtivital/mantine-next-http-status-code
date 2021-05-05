import { Text } from "@mantine/core";

export default function Footer() {
  return (
    <div style={{ display: "flex" }}>
      <Text>
        This is example project for{" "}
        <Text component="a" variant="link" href="https://mantine.dev">
          Mantine
        </Text>{" "}
        usage this Next.js. Browse{" "}
        <Text
          component="a"
          variant="link"
          href="https://github.com/mantinedev/mantine-next-http-status-code"
        >
          source code
        </Text>{" "}
        of this project on Github or{" "}
        <Text
          component="a"
          variant="link"
          href="https://mantine.dev/pages/examples/"
        >
          see other examples
        </Text>{" "}
        on Mantine docs website.
      </Text>
    </div>
  );
}
