import {
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
} from "@chakra-ui/react";

export const Error = () => {
  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="300px"
      borderRadius={"30px"}
    >
      <AlertIcon boxSize="60px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Oops...
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Something went wrong. Try searching again or reload the page
      </AlertDescription>
    </Alert>
  );
};
