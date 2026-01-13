'use client';

import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { BookOpen, FileText, ShieldCheck, BarChart3 } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Interactive Learning",
    description: "Engage with comprehensive modules covering chassis, brakes, suspension, and more.",
  },
  {
    icon: FileText,
    title: "Document Library",
    description: "Access the full, searchable LVVTA standards and regulations database.",
  },
  {
    icon: ShieldCheck,
    title: "Practice Exams",
    description: "Test your knowledge with realistic exams that mirror the real certification.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed performance analytics.",
  },
];

export default function Features() {
  return (
    <Box id="features" py={{ base: 16, md: 24 }} bg="gray.50" _dark={{ bg: "gray.900" }}>
      <Container maxW="6xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" size="xl" fontWeight="bold">
              Why Choose LVV Certifier?
            </Heading>
            <Text color="gray.600" _dark={{ color: "gray.300" }} maxW="2xl">
              Everything you need to succeed in your LVV certification journey
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Box
                  key={idx}
                  bg="white"
                  _dark={{ bg: "gray.800" }}
                  p={8}
                  rounded="lg"
                  boxShadow="sm"
                  _hover={{ boxShadow: "md", transform: "translateY(-4px)" }}
                  transition="all 0.3s"
                >
                  <VStack spacing={4} align="flex-start">
                    <Box p={3} bg="blue.100" _dark={{ bg: "blue.900" }} rounded="lg">
                      <Icon size={24} color="#3182ce" />
                    </Box>
                    <Heading as="h3" size="md">
                      {feature.title}
                    </Heading>
                    <Text color="gray.600" _dark={{ color: "gray.400" }} fontSize="sm">
                      {feature.description}
                    </Text>
                  </VStack>
                </Box>
              );
            })}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
