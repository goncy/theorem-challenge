import React from "react";
import {Text, Stack, Heading, Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";

interface Props {
  onRetry: VoidFunction;
}

const ErrorScreen: React.FC<Props> = ({onRetry}) => {
  return (
    <Stack borderColor="gray.200" borderWidth={1} boxShadow="sm" padding={6} spacing={6}>
      <Stack>
        <Text>Oops!</Text>
        <Heading>Sorry! Something failed 😢.</Heading>
      </Stack>
      <Link to="/">
        <Button colorScheme="primary" size="lg" onClick={onRetry}>
          Try again
        </Button>
      </Link>
    </Stack>
  );
};

export default ErrorScreen;
