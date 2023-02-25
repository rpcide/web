import { Container, Flex, Heading, Box, Button, Link } from "@chakra-ui/react";

function Header() {
  return (
    <header>
      <Container maxW="container.lg" py={8}>
        <Flex justifyContent="space-between">
          <Heading size="md">RPC IDE</Heading>

          <Box>
            <Link href="https://rpcide.vercel.app" target="_blank">
              Empezar
            </Link>
          </Box>
        </Flex>
      </Container>
    </header>
  );
}

export default Header;
