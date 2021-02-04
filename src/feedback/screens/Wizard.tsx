import React from "react";
import {Button, Heading, Stack, Text, Image, Progress} from "@chakra-ui/react";
import {Link, Redirect, useHistory, useParams} from "react-router-dom";

import {useUser} from "../hooks";
import Question from "../components/Question";
import {Question as IQuestion} from "../types";

interface Params {
  user: string;
  question: string;
}

const WizardScreen: React.FC = () => {
  const {user, question: questionIndex} = useParams<Params>();
  const history = useHistory();
  const match = useUser(user);

  const question = match?.questions[Number(questionIndex)];

  function handleSubmit(answer: IQuestion["answer"]) {
    question?.submit(answer);

    if (Number(questionIndex) + 1 === match?.questions.length) {
      return history.push(`/${match.user.id}/completed`);
    }

    return history.push(`/${match?.user.id}/${Number(questionIndex) + 1}`);
  }

  if (!match || !question) {
    return <Redirect to="/404" />;
  }

  return (
    <Stack spacing={6}>
      <Link to="/">
        <Button variant="link" width="fit-content">
          Back
        </Button>
      </Link>
      <Stack direction="row" justifyContent="space-between" spacing={6}>
        <Stack>
          <Heading fontWeight="500">{question?.label}</Heading>
          <Text color="gray.400" fontWeight="500" textTransform="uppercase">
            Share your feedback for {match.user.firstName} {match.user.lastName}
          </Text>
        </Stack>
        <Image height={16} rounded={9999} src={match.user.avatar} width={16} />
      </Stack>
      <Stack>
        <Question data={question}>
          {(answer) => (
            <Stack spacing={6}>
              <Stack direction="row" justifyContent="space-between" marginTop={6}>
                {Number(questionIndex) > 0 && (
                  <Button size="lg" variant="outline">
                    Previous
                  </Button>
                )}
                {!question.required && (
                  <Button size="lg" variant="outline">
                    Skip
                  </Button>
                )}
                <Button
                  colorScheme="primary"
                  isDisabled={Boolean(!answer)}
                  marginLeft="auto"
                  size="lg"
                  onClick={() => handleSubmit(answer)}
                >
                  Next
                </Button>
              </Stack>
              <Stack spacing={3}>
                <Progress
                  borderRadius="sm"
                  colorScheme="primary"
                  size="sm"
                  value={(Number(questionIndex) * 100) / match.questions.length}
                />
                <Stack spacing={1}>
                  <Text
                    fontSize="xs"
                    fontWeight="bold"
                    letterSpacing={1.5}
                    textTransform="uppercase"
                  >
                    Questions completed
                  </Text>
                  <Text>
                    {Number(questionIndex) + 1}/{match.questions.length}
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          )}
        </Question>
      </Stack>
    </Stack>
  );
};

export default WizardScreen;
