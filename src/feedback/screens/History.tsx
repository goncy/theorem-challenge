import {
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Text,
  Button,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import {Link, useParams} from "react-router-dom";

import Answer from "../components/Answer";
import {useCompletedFeedback, useFeedback} from "../hooks";

interface Params {
  user: string;
}

const HistoryScreen: React.FC = () => {
  const feedback = useCompletedFeedback();
  const {user} = useParams<Params>();
  const selected = useFeedback(user);

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
      {feedback.length ? (
        <Stack
          borderColor="gray.100"
          borderRadius="md"
          borderWidth={1}
          boxShadow="md"
          flexDirection="row"
          spacing={0}
        >
          <Stack flex={0.5} spacing={0}>
            <Text
              borderBottomWidth={1}
              borderColor="gray.200"
              color="gray.500"
              fontSize="xs"
              fontWeight="bold"
              paddingX={3}
              paddingY={2}
              textTransform="uppercase"
            >
              Feedback Received
            </Text>
            <Stack spacing={0}>
              {feedback.map(({user}) => {
                return (
                  <Link key={user.id} to={`/history/${user.id}`}>
                    <Stack
                      _hover={{backgroundColor: "primary.50", color: "black"}}
                      alignItems="center"
                      borderBottomWidth={1}
                      borderColor="gray.200"
                      color="gray.600"
                      direction="row"
                      justifyContent="space-between"
                      padding={6}
                      transition="all .25s"
                    >
                      <Stack alignItems="center" direction="row" spacing={6}>
                        <Avatar height={12} name={user.firstName} src={user.avatar} width={12} />
                        <Text fontSize="xl" fontWeight="500">
                          {user.firstName} {user.lastName}
                        </Text>
                      </Stack>
                    </Stack>
                  </Link>
                );
              })}
            </Stack>
          </Stack>
          <Stack borderColor="gray.200" borderLeftWidth={1} flex={1}>
            {selected ? (
              <Stack>
                <Text
                  borderBottomColor="gray.200"
                  borderBottomWidth={1}
                  fontSize="lg"
                  fontWeight="500"
                  paddingX={6}
                  paddingY={3}
                >
                  {`${selected.user.firstName} ${selected.user.lastName}'s Feedback`}
                </Text>
                <Stack spacing={0}>
                  {selected.questions.map((question, index) => (
                    <Link key={question.id} to={`/${selected.user.id}/${index}`}>
                      <Answer
                        borderBottomWidth={1}
                        borderColor="gray.200"
                        data={question}
                        paddingX={6}
                        paddingY={3}
                      />
                    </Link>
                  ))}
                </Stack>
              </Stack>
            ) : (
              <Flex
                alignItems="center"
                color="gray.400"
                fontSize="lg"
                height="100%"
                justifyContent="center"
                textAlign="center"
              >
                Select a user from the left
              </Flex>
            )}
          </Stack>
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
