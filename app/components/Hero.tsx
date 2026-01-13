'use client';

import {
  Container,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  Box,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <Box bg="gradient.to-r" _dark={{ bg: "gray.800" }} py={{ base: 16, md: 24 }}>
      <Container maxW="4xl">
        <VStack spacing={8} textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            color="gray.900"
            _dark={{ color: "white" }}
          >
            Become an LVV Certifier with Confidence
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600"
            _dark={{ color: "gray.300" }}
            maxW="2xl"
          >
            Master the Low Volume Vehicle certification requirements in New Zealand. Structured learning, real practice exams, and expert guidance—all in one platform.
          </Text>

          <HStack spacing={4} pt={4} justify="center" flexWrap={{ base: "wrap", md: "nowrap" }}>
            <Link href="/signup" passHref>
              <Button
                as="a"
                colorScheme="blue"
                size="lg"
                rightIcon={<ArrowRight size={20} />}
                onClick={() => console.log("Start Learning button clicked")}
              >
                Start Learning
              </Button>
            </Link>
            <ChakraLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" isExternal>
              <Button
                variant="outline"
                colorScheme="blue"
                size="lg"
                onClick={() => console.log("Watch Demo button clicked")}
              >
                Watch Demo
              </Button>
            </ChakraLink>
          </HStack>

          <Text fontSize="sm" color="gray.500" pt={4}>
            Join 1,000+ aspiring certifiers already on the platform
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
