import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Heading,
  Avatar,
  Stack,
  Button,
  Badge,
  useColorModeValue,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import store from "../store/store";

export default function CardRepo({ data }) {
  const { setCurrRepo, setFavoriteRepo } = store;
  return (
    <Stack
      maxW={"320px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
      gap={"10px"}
      justify={"space-between"}
    >
      <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
        <Avatar size={"xl"} src={data.owner.avatar_url} pos={"relative"} />
        <Stack align={"center"} justify={"center"} direction={"column"}>
          <Badge px={2} py={1} bg={"pink.200"} borderRadius={"7px"}>
            star: {data.stargazers_count}
          </Badge>
          <Badge px={2} py={1} bg={"pink.200"} borderRadius={"7px"}>
            fork: {data.forks}
          </Badge>
        </Stack>
      </Stack>

      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {data.full_name}
      </Heading>

      <Link href={data.html_url} isExternal color={"pink.400"}>
        {data.full_name} <ExternalLinkIcon mx="2px" />
      </Link>

      <SimpleGrid columns={{ base: 1, sm: 2 }} gap={"10px"}>
        <NavLink to={`/${data.name}`}>
          <Button
            fontSize={"sm"}
            rounded={"full"}
            minW={"100%"}
            onClick={() => setCurrRepo(data)}
          >
            More...
          </Button>
        </NavLink>
        <Button
          colorScheme="pink"
          fontSize={"sm"}
          rounded={"full"}
          minW={"50%"}
          onClick={() => setFavoriteRepo(data)}
        >
          Add
        </Button>
      </SimpleGrid>
    </Stack>
  );
}
