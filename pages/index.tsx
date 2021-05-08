import { TypographyStylesProvider } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <TypographyStylesProvider>
      <Link href="/test">test-page</Link>
    </TypographyStylesProvider>
  );
}
