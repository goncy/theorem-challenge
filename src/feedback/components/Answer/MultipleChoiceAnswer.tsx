import React from "react";
import {Text, Stack, StackProps, Progress} from "@chakra-ui/react";

import {MultipleChoiceQuestion} from "../../types";

interface Props extends StackProps {
  data: MultipleChoiceQuestion;
}

function getColor(answer: MultipleChoiceQuestion["answer"]) {
  if (Number(answer) === 1) {
    return "red";
  }

  if (Number(answer) === 2) {
    return "yellow";
  }

  if (Number(answer) === 3) {
    return "green";
  }

  return "gray";
}

const MultipleChoiceAnswer: React.FC<Props> = ({data, ...props}) => {
  return (
    <Stack alignItems="center" direction="row" opacity={data.answer ? 1 : 0.5} {...props}>
      <Text flex={1} fontWeight="500">
        {data.label}
      </Text>
      {data.answer !== null && (
        <Progress
          colorScheme={getColor(data.answer)}
          flex={1}
          height={6}
          max={3}
          min={0}
          value={Number(data.answer)}
        />
      )}
    </Stack>
  );
};

export default MultipleChoiceAnswer;
