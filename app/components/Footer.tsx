'use client';

import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Link,
  Divider,
  Button,
  Input,
} from "@chakra-ui/react";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <Box bg="gray.900" color="white">
      <Container maxW="6xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} pb={8}>
          {/* Brand */}
          <VStack align="flex-start" spacing={4}>
            <Text fontSize="lg" fontWeight="bold">
              LVV Certifier
            </Text>
            <Text fontSize="sm" color="gray.400">
              Your complete platform for LVV certification success.
            </Text>
          </VStack>

          {/* Product */}
          <VStack align="flex-start" spacing={3}>
            <Text fontWeight="bold" fontSize="sm">
              Product
            </Text>
            <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }} onClick={() => console.log("Features link clicked")}>
              Features
            </Link>
            <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }} onClick={() => console.log("Pricing link clicked")}>
              Pricing
            </Link>
            <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }} onClick={() => console.log("FAQ link clicked")}>
              FAQ
            </Link>
          </VStack>

          {/* Company */}
          <VStack align="flex-start" spacing={3}>
            <Text fontWeight="bold" fontSize="sm">
              Company
            </Text>
            <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }} onClick={() => console.log("About link clicked")}>
              About
            </Link>
            <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }} onClick={() => console.log("Blog link clicked")}>
              Blog
            </Link>
            <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }} onClick={() => console.log("Contact link clicked")}>
              Contact
            </Link>
          </VStack>

          {/* Newsletter */}
          <VStack align="flex-start" spacing={3}>
            <Text fontWeight="bold" fontSize="sm">
              Newsletter
            </Text>
            <HStack w="full">
              <Input
                placeholder="Your email"
                size="sm"
                bg="gray.800"
                border="none"
                _placeholder={{ color: "gray.500" }}
              />
              <Button size="sm" colorScheme="blue" onClick={() => console.log("Newsletter button clicked")}>
                <Mail size={16} />
              </Button>
            </HStack>
          </VStack>
        </SimpleGrid>

        <Divider borderColor="gray.700" />

        <HStack justify="space-between" pt={8} fontSize="sm" color="gray.400">
          <Text>© 2024 LVV Certifier. All rights reserved.</Text>
          <HStack spacing={6}>
            <Link href="#" _hover={{ color: "white" }} onClick={() => console.log("Privacy Policy link clicked")}>Privacy Policy</Link>
            <Link href="#" _hover={{ color: "white" }} onClick={() => console.log("Terms of Service link clicked")}>Terms of Service</Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
