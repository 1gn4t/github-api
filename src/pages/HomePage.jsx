import { Container } from "@chakra-ui/react";

import { Search } from "../components/Search";
import { Main } from "../components/Main";

export const HomePage = () => {
  return (
    <Container minW="100%" p={0} centerContent>
      <Search />
      <Main />
    </Container>
  );
};
