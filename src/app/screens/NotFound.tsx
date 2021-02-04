import React from "react";
import {Text, Stack, Heading, Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const NotFoundScreen: React.FC = () => {
  return (
    <Stack borderColor="gray.200" borderWidth={1} boxShadow="sm" padding={6} spacing={6}>
      <Stack>
        <Text>404</Text>
        <Heading>Sorry! The page you are looking for cannot be found. 😢</Heading>
      </Stack>
      <Link to="/">
        <Button colorScheme="primary" size="lg">
          Back to Share Feedback
        </Button>
      </Link>
    </Stack>
  );
};

export default NotFoundScreen;
