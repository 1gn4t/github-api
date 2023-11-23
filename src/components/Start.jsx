import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";

export const Start = () => {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Find your <br />
            <Text as={"span"} color={"pink.500"}>
              favorite repository
            </Text>
          </Heading>
        </Stack>
      </Container>
    </>
  );
};
