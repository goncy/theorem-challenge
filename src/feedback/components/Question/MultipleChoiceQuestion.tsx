import React from "react";
import {Stack, Text} from "@chakra-ui/react";

import {MultipleChoiceQuestion as IMultipleChoiceQuestion} from "../../types";

interface Props {
  data: IMultipleChoiceQuestion;
  children: (answer: IMultipleChoiceQuestion["answer"]) => React.ReactElement;
}

const MultipleChoiceQuestion: React.FC<Props> = ({data, children}) => {
  const [answer, setAnswer] = React.useState<IMultipleChoiceQuestion["answer"]>(data.answer);

  return (
    <Stack>
      <Stack>
        {data.options.map((option) => {
          const isSelected = answer === option.value;

          return (
            <Text
              key={option.value}
              autoFocus
              backgroundColor={isSelected ? "primary.500" : "gray.100"}
              borderRadius="md"
              color={isSelected ? "white" : "gray.700"}
              cursor={isSelected ? "inherit" : "pointer"}
              padding={6}
              tabIndex={0}
              transition="all .25s"
              onClick={() => setAnswer(option.value)}
              onKeyDown={(e) => e.keyCode === 32 && setAnswer(option.value)}
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
