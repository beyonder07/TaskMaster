import React from 'react';
import { Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxW="container.sm" py={10}>
      <VStack spacing={6} textAlign="center">
        <Heading size="2xl">404</Heading>
        <Text fontSize="xl">Page not found</Text>
        <Text color="gray.600">
          The page you're looking for doesn't exist or has been moved.
        </Text>
        <Button as={Link} to="/" colorScheme="brand">
          Go to Home
        </Button>
      </VStack>
    </Container>
  );
};

export default NotFound; 