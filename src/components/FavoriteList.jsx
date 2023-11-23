import { Container, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import FavoritesCard from "./FavoritesCard";
import store from "../store/store";
import { observer } from "mobx-react-lite";

export const FavoriteList = observer(() => {
  const { favoriteList } = store;
  return (
    <Stack spacing={4} maxW={"6xl"} textAlign={"center"} gap={"30px"}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "xl", sm: "2xl" }} color={"pink.500"}>
          Favorites
        </Heading>
      </Stack>
      <SimpleGrid columns={1} spacing={10}>
        {favoriteList.map((item) => (
          <FavoritesCard key={item.id} data={item} />
        ))}
      </SimpleGrid>
    </Stack>
  );
});
