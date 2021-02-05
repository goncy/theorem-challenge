import React from "react";
import {Stack, Divider, Button, Text, Avatar} from "@chakra-ui/react";
import {Link} from "react-router-dom";

import {Feedback} from "../types";

interface Props {
  data: Feedback[];
}

const UsersList: React.FC<Props> = ({data}) => {
  return (
    <Stack
      borderColor="gray.100"
      borderRadius="md"
      borderWidth={1}
      boxShadow="md"
      divider={<Divider borderColor="gray.200" borderWidth={2} />}
      spacing={0}
    >
      {data.map(({user, questions}) => {
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
              <Avatar height={12} name={user.firstName} src={user.avatar} width={12} />
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
  );
};

export default UsersList;
