import React from "react";
import {Text, Stack, StackProps, Progress} from "@chakra-ui/react";

import {ScaleQuestion} from "../../types";

interface Props extends StackProps {
  data: ScaleQuestion;
}

function getColor(answer: ScaleQuestion["answer"]) {
  if (Number(answer) < 3) {
    return "red";
  }

  if (Number(answer) < 5) {
    return "orange";
  }

  if (Number(answer) < 7) {
    return "yellow";
  }

  return "green";
}

const ScaleAnswer: React.FC<Props> = ({data, ...props}) => {
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
          max={9}
          min={0}
          value={Number(data.answer)}
        />
      )}
    </Stack>
  );
};

export default ScaleAnswer;
