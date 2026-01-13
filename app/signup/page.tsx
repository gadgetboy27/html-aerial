'use client';

import {
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
  Box,
} from "@chakra-ui/react";

export default function Signup() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup form submitted");
  };

  return (
    <Container maxW="lg" py={{ base: 12, md: 24 }}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="xl" fontWeight="bold">
          Create your LVV Certifier Account
        </Heading>
        <Text color="gray.600">
          Get started on your certification journey today.
        </Text>
      </VStack>

      <Box mt={12}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input type="text" placeholder="John Doe" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" placeholder="you@example.com" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="••••••••" />
            </FormControl>

            <HStack w="full" justify="space-between">
              <Checkbox>Remember me</Checkbox>
              <Link color="blue.500" href="#" onClick={() => console.log("Forgot password link clicked")}>
                Forgot password?
              </Link>
            </HStack>

            <Button colorScheme="blue" type="submit" w="full" size="lg" mt={4}>
              Sign Up
            </Button>
          </VStack>
        </form>
      </Box>

      <Text mt={8} align="center">
        Already have an account?{" "}
        <Link color="blue.500" href="/login" onClick={() => console.log("Log in link clicked")}>
          Log in
        </Link>
      </Text>
    </Container>
  );
}
