import { theming, MantineTheme } from "@mantine/core";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme: MantineTheme) => ({
    "@global body": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    },
  }),
  { theming }
);

export default function AppWrapper({ children }) {
  useStyles();
  return <> {children} </>;
}
