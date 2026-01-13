'use client';

import {
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Create your account and get instant access to all learning materials.",
  },
  {
    number: "2",
    title: "Learn",
    description: "Work through structured modules at your own pace with interactive lessons.",
  },
  {
    number: "3",
    title: "Practice",
    description: "Test your knowledge with realistic practice exams and get detailed feedback.",
  },
  {
    number: "4",
    title: "Certify",
    description: "Feel confident and ready for your official LVV certification exam.",
  },
];

export default function HowItWorks() {
  return (
    <Box id="how-it-works" py={{ base: 16, md: 24 }} bg="white" _dark={{ bg: "gray.800" }}>
      <Container maxW="6xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" size="xl" fontWeight="bold">
              How It Works
            </Heading>
            <Text color="gray.600" _dark={{ color: "gray.300" }} maxW="2xl">
              Follow these simple steps to begin your LVV certification journey
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
            {steps.map((step, idx) => (
              <Box key={idx}>
                <VStack spacing={4} align="flex-start">
                  <Box
                    w={12}
                    h={12}
                    bg="blue.600"
                    rounded="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="bold"
                    color="white"
                    fontSize="lg"
                  >
                    {step.number}
                  </Box>
                  <Heading as="h3" size="md">
                    {step.title}
                  </Heading>
                  <Text color="gray.600" _dark={{ color: "gray.400" }} fontSize="sm">
                    {step.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
