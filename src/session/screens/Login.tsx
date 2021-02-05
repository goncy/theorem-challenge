import {Stack, Heading, Button} from "@chakra-ui/react";
import React from "react";

interface Props {
  isLoading: boolean;
  onLogin: (token: string) => Promise<void>;
}

const LoginScreen: React.FC<Props> = ({isLoading, onLogin}) => {
  return (
    <Stack alignItems="center" backgroundColor="primary.200" height="100%" justifyContent="center">
      <Stack
        alignItems="center"
        backgroundColor="white"
        borderRadius="md"
        boxShadow="lg"
        justifyContent="center"
        padding={12}
        spacing={6}
      >
        <Heading fontSize="3xl" fontWeight="500">
          Honesto
        </Heading>
        <Button
          colorScheme="primary"
          isLoading={isLoading}
          size="lg"
          onClick={() => onLogin("some-token")}
        >
          Login with Google
        </Button>
      </Stack>
    </Stack>
  );
};

export default LoginScreen;
