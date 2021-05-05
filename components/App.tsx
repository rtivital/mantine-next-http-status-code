import { MantineProvider, Container } from "@mantine/core";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppWrapper from "./AppWrapper";
import ThemeToogle from "./ThemeToggle";
import ColorSchemeContext from "./ColorSchemeContext";
import CodesList from "./CodesList";

export default function App() {
  const [colorScheme, setColorSheme] = useState<"light" | "dark">("light");
  return (
    <ColorSchemeContext.Provider
      value={{ colorScheme, onChange: setColorSheme }}
    >
      <MantineProvider theme={{ colorScheme }}>
        <AppWrapper>
          <Container size="sm">
            <Header
              toggleColorScheme={() =>
                setColorSheme((c) => (c === "light" ? "dark" : "light"))
              }
            />
            <ThemeToogle />
            <CodesList />
            <Footer />
          </Container>
        </AppWrapper>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}
