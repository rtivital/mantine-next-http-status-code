import { MantineProvider, Container } from "@mantine/core";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppWrapper from "./AppWrapper";
import ThemeToggle from "./ThemeToggle";
import ColorSchemeContext from "./ColorSchemeContext";
import CodesList from "./CodesList";

export default function App() {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");
  return (
    <ColorSchemeContext.Provider
      value={{ colorScheme, onChange: setColorScheme }}
    >
      <MantineProvider theme={{ colorScheme }}>
        <AppWrapper>
          <Container size="sm">
            <Header />
            <ThemeToggle />
            <CodesList />
            <Footer />
          </Container>
        </AppWrapper>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}
