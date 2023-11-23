import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Heading, Avatar, Stack, Button, Link } from "@chakra-ui/react";
import store from "../store/store";

export default function FavoritesCard({ data }) {
  const { removeFavoriteRepo } = store;

  return (
    <Stack
      maxW={"320px"}
      w={"full"}
      bg="pink.50"
      boxShadow={"base"}
      border={(1, "solid")}
      borderColor={"pink.200"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
      gap={"10px"}
      justify={"space-between"}
    >
      <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
        <Avatar size={"xl"} src={data.owner.avatar_url} pos={"relative"} />
      </Stack>

      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {data.name}
      </Heading>

      <Link href={data.html_url} isExternal color={"pink.400"}>
        {data.full_name} <ExternalLinkIcon mx="2px" />
      </Link>

      <Button
        colorScheme="pink"
        fontSize={"sm"}
        rounded={"full"}
        minW={"50%"}
        onClick={() => removeFavoriteRepo(data)}
      >
        Remove
      </Button>
    </Stack>
  );
}
