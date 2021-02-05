import React from "react";
import {Stack, Text, SimpleGrid, Box, AspectRatio} from "@chakra-ui/react";

import {ScaleQuestion as IScaleQuestion} from "../../types";

interface Props {
  data: IScaleQuestion;
  children: (answer: IScaleQuestion["answer"]) => React.ReactElement;
}

const SCALE = new Array(10).fill(true).map((_, index) => index);

const ScaleQuestion: React.FC<Props> = ({data, children}) => {
  const [answer, setAnswer] = React.useState<IScaleQuestion["answer"]>(data.answer);

  return (
    <Stack>
      <Stack>
        <SimpleGrid columns={10} gap={1}>
          {SCALE.map((index) => (
            <AspectRatio
              key={index}
              autoFocus
              cursor="pointer"
              ratio={1}
              tabIndex={0}
              onClick={() => setAnswer(index as IScaleQuestion["answer"])}
              onKeyDown={(e) => e.keyCode === 32 && setAnswer(index as IScaleQuestion["answer"])}
            >
              <Box
                backgroundColor={answer !== null && answer >= index ? "primary.500" : "gray.100"}
                height="100%"
                width="100%"
              />
            </AspectRatio>
          ))}
        </SimpleGrid>
        {answer !== null && <Text textAlign="right">{answer + 1}/10</Text>}
      </Stack>
      {children(answer)}
    </Stack>
  );
};

export default ScaleQuestion;
