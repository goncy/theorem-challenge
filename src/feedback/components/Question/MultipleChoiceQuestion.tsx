import React from "react";
import {Stack, Text} from "@chakra-ui/react";

import {MultipleChoiceQuestion as IMultipleChoiceQuestion} from "../../types";

interface Props {
  data: IMultipleChoiceQuestion;
  children: (answer: IMultipleChoiceQuestion["answer"]) => React.ReactElement;
}

const MultipleChoiceQuestion: React.FC<Props> = ({data, children}) => {
  const [answer, setAnswer] = React.useState<IMultipleChoiceQuestion["answer"]>(null);

  return (
    <Stack>
      <Stack>
        {data.options.map((option) => {
          const isSelected = answer === option.value;

          return (
            <Text
              key={option.value}
              backgroundColor={isSelected ? "gray.600" : "gray.100"}
              borderRadius="md"
              color={isSelected ? "white" : "gray.700"}
              cursor={isSelected ? "inherit" : "pointer"}
              padding={6}
              onClick={() => setAnswer(option.value)}
            >
              {option.label}
            </Text>
          );
        })}
      </Stack>
      {children(answer)}
    </Stack>
  );
};

export default MultipleChoiceQuestion;
