import {
  Stack,
  FormControl,
  Input,
  Heading,
  Container,
  Flex,
  useToast,
  Button,
} from "@chakra-ui/react";

import store from "../store/store";
import { observer } from "mobx-react-lite";
import { CopyIcon } from "@chakra-ui/icons";
import CopyToClipboard from "react-copy-to-clipboard";

export const Search = observer(() => {
  const { searchStr, setSearchStr, getRepo, copied, switchCopy } = store;
  const toast = useToast();

  return (
    <Flex align={"center"} justify={"center"} bg="gray.100" minW={"100%"}>
      <Container p={6}>
        <Heading
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign={"center"}
          mb={5}
        >
          Searching github repositories
        </Heading>
        <Stack direction={"row"} as={"form"} spacing={"12px"}>
          <FormControl>
            <Input
              focusBorderColor="pink.400"
              placeholder="Repository name"
              borderColor="grey.300"
              value={searchStr}
              onChange={(e) => {
                const string = e.target.value;
                setSearchStr(string);
                getRepo();
                switchCopy(false);
              }}
            />
          </FormControl>
          <FormControl w={"20%"}>
            <CopyToClipboard text={searchStr}>
              <Button
                w="100%"
                colorScheme="pink"
                onClick={() => {
                  switchCopy(true);
                  if (!copied) {
                    toast({
                      title: "Copied",
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                    });
                  }
                }}
              >
                {copied ? "copied" : <CopyIcon />}
              </Button>
            </CopyToClipboard>
          </FormControl>
        </Stack>
      </Container>
    </Flex>
  );
});
