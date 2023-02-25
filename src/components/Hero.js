import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

function Hero() {
  return (
    <section>
      <Container maxW="container.md" textAlign="center" py={16}>
        <Flex direction="column" alignItems="center">
          <Heading as="h2" size="lg" maxW="container.sm" textAlign="center">
            El editor de código perfecto para la programación competitiva
          </Heading>

          <Spacer my={4} />

          <Text color="text">
            Programa en diferentes lenguajes como Python, Java y C++.
          </Text>

          <Spacer my={4} />

          <Box mb={16}>
            <Button colorScheme="purple" shadow="md">
              <Link href="https://rpcide.vercel.app/" target="_blank">
                Empezar
              </Link>
            </Button>
          </Box>

          <Image src="/images/banner.png" rounded="md" shadow="md" />
        </Flex>
      </Container>
    </section>
  );
}

export default Hero;
