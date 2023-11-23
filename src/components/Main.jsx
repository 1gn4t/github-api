import { Grid, GridItem, useMediaQuery } from "@chakra-ui/react";

import { observer } from "mobx-react-lite";
import { Start } from "./Start";
import { Error } from "./Error";
import { List } from "./List";

import store from "../store/store";

import { Loader } from "./Loader";
import { FavoriteList } from "./FavoriteList";

export const Main = observer(() => {
  const { response, getMoreRepo } = store;
  const [mediaQuery] = useMediaQuery("(max-width: 768px)");

  const displayRepo = () => {
    switch (response.state) {
      case "fulfilled":
        return <List response={response} getMoreRepo={getMoreRepo} />;
      case "pending":
        return <Loader />;
      case "rejected":
        return <Error />;
      default:
        return <Start />;
    }
  };

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "2fr 1fr" }}
      maxW="1280px"
      m={(0, "auto")}
    >
      <GridItem p={4}>{displayRepo()}</GridItem>
      <GridItem p={4}>{mediaQuery || <FavoriteList />}</GridItem>
    </Grid>
  );
});
