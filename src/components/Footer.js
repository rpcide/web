import { Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <Container maxW="container.lg" mt={16} pb={12}>
        <Flex justifyContent="space-between">
          <Text>
            Desarrollado con ❤️ por{" "}
            <Link
              href="https://byandrev.dev"
              target="_blank"
              style={{ textDecoration: "underline" }}
            >
              Andres Parra Garzon
            </Link>
          </Text>

          <Flex gap={4}>
            <Link
              href="https://github.com/rpcide"
              target="_blank"
              style={{ textDecoration: "underline" }}
            >
              Github
            </Link>
            <Link
              href="https://twitter.com/byandrev"
              target="_blank"
              style={{ textDecoration: "underline" }}
            >
              Twitter
            </Link>
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
}

export default Footer;
