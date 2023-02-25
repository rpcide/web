import { Container, Heading, Text } from "@chakra-ui/react";

function Contribute() {
  return (
    <section>
      <Container maxW="container.md" mt={16}>
        <Heading as="h4" size="lg" mb={8}>
          Contribuir
        </Heading>

        <Text>
          Si quieres aportar en este increible proyecto no dudes en escribirme
          en mis redes sociales.
        </Text>
      </Container>
    </section>
  );
}

export default Contribute;
