import {Stack, Heading, FormControl, FormLabel, Select} from "@chakra-ui/react";
import React from "react";

import UsersList from "../components/UsersList";
import {useAllFeedback} from "../hooks";

const ShareScreen: React.FC = () => {
  const feedback = useAllFeedback();

  return (
    <Stack spacing={6}>
      <Stack alignItems="flex-end" direction="row" justifyContent="space-between">
        <Heading fontSize="3xl" fontWeight="500">
          Share Feedback
        </Heading>
        <FormControl maxWidth="xs">
          <FormLabel fontSize="xs" fontWeight="500" letterSpacing={1.5} textTransform="uppercase">
            Feedback Period
          </FormLabel>
          <Select size="lg">
            <option value="october-2020">October 2020</option>
          </Select>
        </FormControl>
      </Stack>
      <UsersList data={feedback} />
    </Stack>
  );
};

export default ShareScreen;
