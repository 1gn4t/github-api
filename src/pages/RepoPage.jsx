import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  Badge,
  Link,
} from "@chakra-ui/react";

import { observer } from "mobx-react-lite";
import store from "../store/store";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export const RepoPage = observer(() => {
  const { currRepo } = store;
  return (
    <Container>
      <SimpleGrid
        columns={1}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 20 }}
        gap={"20px"}
      >
        <Flex justify={"space-between"} align={"center"}>
          <Image
            rounded={"full"}
            alt={"product image"}
            src={currRepo.owner.avatar_url}
            fit={"cover"}
            align={"center"}
            w={{ base: "70px", sm: "150px", lg: "200px" }}
            h={{ base: "70px", sm: "150px", lg: "200px" }}
          />

          <Stack>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
            >
              {currRepo.full_name}
            </Heading>
            <Stack gap={"20px"} direction={"row"}>
              <Badge px={2} py={1} bg={"pink.200"} borderRadius={"7px"}>
                star: {currRepo.stargazers_count}
              </Badge>
              <Badge px={2} py={1} bg={"pink.200"} borderRadius={"7px"}>
                fork: {currRepo.forks}
              </Badge>
            </Stack>
          </Stack>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider />}
          >
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={"pink.400"}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Repositories Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Description:
                  </Text>{" "}
                  {currRepo.description}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Link:
                  </Text>{" "}
                  <Link href={currRepo.html_url} isExternal color={"pink.400"}>
                    {currRepo.full_name} <ExternalLinkIcon mx="2px" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Open issues:
                  </Text>{" "}
                  {currRepo.open_issues}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Visibility:
                  </Text>{" "}
                  {currRepo.visibility}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Language:
                  </Text>{" "}
                  {currRepo.language}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <NavLink to="/">
            <Button
              w="100%"
              colorScheme="pink"
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Back
            </Button>
          </NavLink>
        </Stack>
      </SimpleGrid>
    </Container>
  );
});
