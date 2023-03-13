import { Container, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

function Features() {
  return (
    <section>
      <Container maxW="container.md">
        <Heading as="h3" size="lg" mb={8}>
          Características
        </Heading>

        <UnorderedList>
          <ListItem>
            Soporte de los siguientes lenguajes: Python, Java y C++
          </ListItem>
          <ListItem>Compartir archivos</ListItem>
          <ListItem>Modo claro y oscuro</ListItem>
          <ListItem>
            Creación de tests para el uso en la programación competitiva
          </ListItem>
          <ListItem>Subir archivos y descargarlos</ListItem>
          <ListItem>Uso del localStorage para guardar los archivos</ListItem>
        </UnorderedList>
      </Container>
    </section>
  );
}

export default Features;
