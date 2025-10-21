import { Container, Title, Text, Button, Stack, Center } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <Container size="xl" py="xl">
      <Center style={{ minHeight: "80vh" }}>
        <Stack align="center" gap="xl">
          <Title order={1} size="3rem" ta="center">
            Little Known Planet
          </Title>
          <Text size="xl" c="dimmed" ta="center" maw={600}>
            Discover unforgettable experiences around the world
          </Text>
          <Button
            size="lg"
            color="cyan"
            radius="xl"
            component={Link}
            href="/dashboard"
          >
            Go to Dashboard
          </Button>
        </Stack>
      </Center>
    </Container>
  );
}
