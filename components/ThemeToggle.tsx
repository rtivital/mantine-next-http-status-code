import { ActionIcon, useMantineTheme } from "@mantine/core";
import { SunIcon, MoonIcon } from "@modulz/radix-icons";
import { useContext } from "react";
import ColorSchemeContext from "./ColorSchemeContext";
import utilStyles from "../styles/utils.module.css";

export default function ThemeToggle() {
  const theme = useMantineTheme();
  const dark = theme.colorScheme === "dark";
  const colorSchemeContext = useContext(ColorSchemeContext);

  return (
    <div
      className={utilStyles.button}
      style={{ position: "fixed", right: "10px" }}
    >
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={() => colorSchemeContext.onChange(dark ? "light" : "dark")}
      >
        {dark ? (
          <SunIcon style={{ width: 18, height: 18 }} />
        ) : (
          <MoonIcon style={{ width: 18, height: 18 }} />
        )}
      </ActionIcon>
    </div>
  );
}
