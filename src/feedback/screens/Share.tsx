import {
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Image,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";

import {useUsers} from "../hooks";

const ShareScreen: React.FC = () => {
  const users = useUsers();

  return (
    <Stack spacing={6}>
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <Heading>Share Feedback</Heading>
        <FormControl maxWidth="xs">
          <FormLabel fontSize="xs" fontWeight="500" letterSpacing={1.5} textTransform="uppercase">
            Feedback Period
          </FormLabel>
          <Select size="lg">
            <option value="october-2020">October 2020</option>
          </Select>
        </FormControl>
      </Stack>
      <Stack
        borderColor="gray.100"
        borderRadius="md"
        borderWidth={1}
        boxShadow="md"
        divider={<Divider borderColor="gray.200" borderWidth={2} />}
        spacing={0}
      >
        {users.map(({user, questions}) => {
          const isAnswered = questions.some((question) => Boolean(question.answer));

          return (
            <Stack
              key={user.id}
              _hover={{backgroundColor: "primary.50", color: "black"}}
              alignItems="center"
              color="gray.600"
              direction="row"
              justifyContent="space-between"
              padding={6}
              transition="all .25s"
            >
              <Stack alignItems="center" direction="row" spacing={6}>
                <Image height={12} rounded={9999} src={user.avatar} width={12} />
                <Text fontSize="xl" fontWeight="500">
                  {user.firstName} {user.lastName}
                </Text>
              </Stack>
              {isAnswered ? (
                <Link to={`/history/${user.id}`}>
                  <Button
                    fontSize="md"
                    maxWidth={150}
                    paddingX={12}
                    size="lg"
                    variant="outline"
                    width="100%"
                  >
                    View Sumission
                  </Button>
                </Link>
              ) : (
                <Link to={`/${user.id}/0`}>
                  <Button
                    colorScheme="primary"
                    fontSize="md"
                    maxWidth={150}
                    paddingX={12}
                    size="lg"
                    width="100%"
                  >
                    Fill Out
                  </Button>
                </Link>
              )}
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default ShareScreen;
