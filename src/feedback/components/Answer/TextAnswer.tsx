import React from "react";
import {Text, Stack, StackProps} from "@chakra-ui/react";

import {TextQuestion} from "../../types";

interface Props extends StackProps {
  data: TextQuestion;
}

const TextAnswer: React.FC<Props> = ({data, ...props}) => {
  return (
    <Stack opacity={data.answer ? 1 : 0.5} {...props}>
      <Text fontWeight="500">{data.label}</Text>
      {data.answer !== null && <Text>{data.answer}</Text>}
    </Stack>
  );
};

export default TextAnswer;
