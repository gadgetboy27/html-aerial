'use client';

import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  Box,
  VStack,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "LVV Certifier",
    image: "S",
    text: "This platform made studying so much easier. The practice exams were incredibly helpful!",
  },
  {
    name: "Mike Chen",
    role: "Automotive Engineer",
    image: "M",
    text: "I passed my certification on the first try thanks to the comprehensive learning modules.",
  },
  {
    name: "Emma Williams",
    role: "LVV Inspector",
    image: "E",
    text: "The document library is a game-changer. Everything I need is organized and searchable.",
  },
];

export default function Testimonials() {
  return (
    <Box id="testimonials" py={{ base: 16, md: 24 }} bg="gray.50" _dark={{ bg: "gray.900" }}>
      <Container maxW="6xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" size="xl" fontWeight="bold">
              What Our Users Say
            </Heading>
            <Text color="gray.600" _dark={{ color: "gray.300" }} maxW="2xl">
              Join thousands of successful LVV certifiers
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            {testimonials.map((testimonial, idx) => (
              <Box
                key={idx}
                bg="white"
                _dark={{ bg: "gray.800" }}
                p={8}
                rounded="lg"
                boxShadow="sm"
              >
                <VStack spacing={4} align="flex-start">
                  {/* Stars */}
                  <HStack spacing={1}>
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                      ))}
                  </HStack>

                  <Text color="gray.600" _dark={{ color: "gray.300" }} fontSize="sm">
                    "{testimonial.text}"
                  </Text>

                  <HStack spacing={3} pt={4} w="full">
                    <Avatar name={testimonial.name} size="sm" />
                    <VStack spacing={0} align="flex-start">
                      <Text fontWeight="bold" fontSize="sm">
                        {testimonial.name}
                      </Text>
                      <Text color="gray.500" fontSize="xs">
                        {testimonial.role}
                      </Text>
                    </VStack>
                  </HStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
