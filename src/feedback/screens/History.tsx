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

const HistoryScreen: React.FC = () => {
  const users = useUsers();
  const usersWithFeedback = users.filter(({questions}) =>
    questions.some((question) => Boolean(question.answer)),
  );

  return (
    <Stack spacing={6}>
      <Stack alignItems="flex-end" direction="row" justifyContent="space-between">
        <Heading fontSize="3xl" fontWeight="500">
          My Feedback
        </Heading>
        <Stack alignItems="flex-end" direction="row" flex={1} justifyContent="flex-end" spacing={4}>
          <FormControl maxWidth="xs">
            <FormLabel fontSize="xs" fontWeight="500" letterSpacing={1.5} textTransform="uppercase">
              Feedback Period
            </FormLabel>
            <Select size="lg">
              <option value="october-2020">October 2020</option>
            </Select>
          </FormControl>
          <Button colorScheme="primary" size="lg">
            Publish Feedback
          </Button>
        </Stack>
      </Stack>
      {usersWithFeedback.length ? (
        <Stack
          borderColor="gray.100"
          borderRadius="md"
          borderWidth={1}
          boxShadow="md"
          divider={<Divider borderColor="gray.200" borderWidth={2} />}
          spacing={0}
        >
          {usersWithFeedback.map(({user}) => {
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
              </Stack>
            );
          })}
        </Stack>
      ) : (
        <Text color="gray.400" fontSize="lg">
          No feedback was found yet,{" "}
          <Link to="/">
            <Text _hover={{textDecoration: "underline"}} as="span" color="primary.500">
              go to give some
            </Text>
          </Link>
          !
        </Text>
      )}
    </Stack>
  );
};

export default HistoryScreen;
