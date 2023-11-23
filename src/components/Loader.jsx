import { Box, Spinner } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <Box paddingTop={"100px"}>
      <Spinner
        w={"2xs"}
        h={"2xs"}
        thickness="10px"
        speed="1s"
        emptyColor="gray.200"
        color="pink.500"
      />
    </Box>
  );
};
