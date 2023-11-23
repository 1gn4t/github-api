import {
  Heading,
  SimpleGrid,
  Stack,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import CardRepo from "./CardRepo";
import { DrawerFavorites } from "./DrawerFavorites";

export const List = ({ response, getMoreRepo }) => {
  const [mediaQuery] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Stack
        spacing={4}
        maxW={"6xl"}
        textAlign={"center"}
        justify={"space-between"}
        alignItems={"center"}
        gap={"30px"}
      >
        <Heading fontSize={{ base: "xl", sm: "2xl" }}>
          Found repositories
          {mediaQuery && <DrawerFavorites />}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={10}>
          {response.value?.map((repo) => (
            <CardRepo key={repo.id} data={repo} />
          ))}
        </SimpleGrid>
        <Button
          colorScheme="pink"
          fontSize={"xl"}
          rounded={"full"}
          minW={"50%"}
          onClick={() => {
            getMoreRepo();
          }}
        >
          Next page
        </Button>
      </Stack>
    </>
  );
};
