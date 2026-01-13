'use client';

import {
  Box,
  Container,
  Flex,
  Button,
  HStack,
  useColorMode,
  IconButton,
  useDisclosure,
  VStack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <Box bg="white" boxShadow="sm" position={{ base: "sticky", md: "static" }} top={0} zIndex={100}>
      <Container maxW="7xl" py={4}>
        <Flex justify="space-between" align="center">
          <Link href="/" style={{ textDecoration: "none" }}>
            <Box fontSize="xl" fontWeight="bold" color="blue.600" onClick={() => console.log("Brand link clicked")}>
              LVV Certifier
            </Box>
          </Link>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <Button variant="ghost" fontSize="sm" onClick={() => console.log(`Nav link ${link.label} clicked`)}>
                  {link.label}
                </Button>
              </Link>
            ))}
          </HStack>

          {/* Desktop CTA */}
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            <Link href="/login">
              <Button colorScheme="blue" size="sm" onClick={() => console.log("Sign In button clicked")}>
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button colorScheme="blue" variant="solid" size="sm" onClick={() => console.log("Get Started button clicked")}>
                Get Started
              </Button>
            </Link>
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            aria-label="Toggle menu"
            icon={<Menu size={24} />}
            display={{ base: "inline-flex", md: "none" }}
            onClick={() => { onOpen(); console.log("Mobile menu opened"); }}
            variant="ghost"
          />
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody pt={8}>
            <VStack spacing={4} align="stretch">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={onClose} style={{ textDecoration: "none" }}>
                  <Button w="full" variant="ghost" justifyContent="flex-start" onClick={() => console.log(`Nav link ${link.label} clicked`)}>
                    {link.label}
                  </Button>
                </Link>
              ))}
              <Link href="/login" onClick={onClose}>
                <Button colorScheme="blue" w="full" onClick={() => console.log("Sign In button clicked")}>
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" onClick={onClose}>
                <Button colorScheme="blue" variant="solid" w="full" onClick={() => console.log("Get Started button clicked")}>
                  Get Started
                </Button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
