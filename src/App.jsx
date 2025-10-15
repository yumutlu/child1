import { Container, Title, Text, Button } from "@mantine/core";

export default function App() {
  return (
    <Container>
      <Title order={2}>Child 1 Uygulaması</Title>
      <Text>Bu, parent içinden remote olarak yüklenen Child 1 bileşeni.</Text>
      <Button mt="md" onClick={() => alert("Child1 button clicked")}>
        Test Button
      </Button>
    </Container>
  );
}
