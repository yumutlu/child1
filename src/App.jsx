import { Container, Title, Text, Button } from "@mantine/core";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container size="sm" py="xl">
        <Title order={2}>Child 1 Uygulaması</Title>
        <Text mt="md">
          Bu, parent içinden remote olarak yüklenen Child 1 bileşeni.
        </Text>
        <Button mt="md" onClick={() => alert("Child1 button clicked")}>
          Test Button
        </Button>
      </Container>
    </MantineProvider>
  );
}
