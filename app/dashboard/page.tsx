"use client";

import {
  Container,
  Card,
  Image,
  Text,
  Title,
  Overlay,
  Box,
  Stack,
} from "@mantine/core";
import { Masonry } from "masonic";
import { useEffect, useState } from "react";

// Dashboard items data
const dashboardItems = [
  {
    id: 1,
    type: "hero",
    title: "Reykjavik",
    subtitle: "Iceland, the Land of Fire and Ice",
    image: "/images/1 (1).jpg",
    height: 400,
  },
  {
    id: 2,
    type: "text",
    title: "Explore",
    description:
      "Golden Circle tour – waterfalls, geysers, and national parks.",
    backgroundColor: "#8B4513",
    height: 300,
  },
  {
    id: 3,
    type: "image",
    title: "Puffin",
    image: "/images/1 (2).jpg",
    height: 250,
  },
  {
    id: 4,
    type: "text",
    title: "Unleash your adventurous spirit in Iceland.",
    description:
      "Witness the Northern Lights, soak in geothermal pools, and explore dramatic landscapes sculpted by volcanoes and glaciers.",
    backgroundColor: "#8B4513",
    height: 300,
  },
  {
    id: 5,
    type: "image",
    title: "Cabin",
    image: "/images/1 (3).jpg",
    height: 250,
  },
  {
    id: 6,
    type: "text",
    title: "Cuisine",
    description: "Try Icelandic lamb and rye bread baked in hot springs.",
    backgroundColor: "#8B4513",
    height: 200,
  },
  {
    id: 7,
    type: "image",
    title: "Snowy Mountain",
    image: "/images/1 (4).jpg",
    height: 200,
  },
  {
    id: 8,
    type: "image",
    title: "Lamb & Rye Bread",
    image: "/images/1 (5).jpg",
    height: 200,
  },
];

// Card component for masonry
const DashboardCard = ({ data }) => {
  if (data.type === "hero") {
    return (
      <Card
        shadow="lg"
        padding={0}
        radius="xl"
        withBorder
        style={{
          height: data.height,
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Image
          src={data.image}
          height={data.height}
          alt={data.title}
          style={{ objectFit: "cover" }}
        />
        <Overlay
          gradient="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)"
          opacity={0.6}
        />
        <Box
          pos="absolute"
          bottom={0}
          left={0}
          right={0}
          p="xl"
          style={{ zIndex: 2 }}
        >
          <Stack gap="xs">
            <Title order={2} size="2rem" c="white">
              {data.title}
            </Title>
            <Text size="lg" c="white" opacity={0.9}>
              {data.subtitle}
            </Text>
          </Stack>
        </Box>
      </Card>
    );
  }

  if (data.type === "text") {
    return (
      <Card
        shadow="lg"
        padding="xl"
        radius="xl"
        withBorder
        style={{
          height: data.height,
          backgroundColor: data.backgroundColor,
          color: "white",
          width: "100%",
        }}
      >
        <Stack gap="md" h="100%" justify="center">
          <Title order={3} size="1.2rem" c="white">
            {data.title}
          </Title>
          <Text size="sm" c="white" opacity={0.9}>
            {data.description}
          </Text>
        </Stack>
      </Card>
    );
  }

  if (data.type === "image") {
    return (
      <Card
        shadow="lg"
        padding={0}
        radius="xl"
        withBorder
        style={{
          height: data.height,
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Image
          src={data.image}
          height={data.height}
          alt={data.title}
          style={{ objectFit: "cover" }}
        />
        <Overlay
          gradient="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)"
          opacity={0.5}
        />
        <Box
          pos="absolute"
          bottom={0}
          left={0}
          right={0}
          p="lg"
          style={{ zIndex: 2 }}
        >
          <Title order={3} size="1.2rem" c="white">
            {data.title}
          </Title>
        </Box>
      </Card>
    );
  }

  return null;
};

export default function Dashboard() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container
        size="xl"
        py="xl"
        style={{ backgroundColor: "#2C2C2C", minHeight: "100vh" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Text size="lg" c="white">
            Loading dashboard...
          </Text>
        </div>
      </Container>
    );
  }

  return (
    <Container
      size="xl"
      py="xl"
      style={{ backgroundColor: "#2C2C2C", minHeight: "100vh" }}
      p={"xl"}
    >
      <Masonry
        items={dashboardItems}
        columnGutter={16}
        columnWidth={300}
        overscanBy={5}
        render={DashboardCard}
      />
    </Container>
  );
}
