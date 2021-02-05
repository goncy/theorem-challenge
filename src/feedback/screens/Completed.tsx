import React from "react";
import {Stack, Heading, Text} from "@chakra-ui/react";

import UsersList from "../components/UsersList";
import {usePendingFeedback} from "../hooks";

const CompletedScreen: React.FC = () => {
  const feedback = usePendingFeedback();

  return (
    <Stack spacing={6}>
      <Stack>
        <Heading fontSize="3xl" fontWeight="500">
          Thank you for sharing your feedback!
        </Heading>
        <Text color="gray.500">Continue to give feedback to other team members.</Text>
      </Stack>
      <UsersList data={feedback} />
    </Stack>
  );
};

export default CompletedScreen;
