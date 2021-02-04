import React from "react";
import {Slider, Stack, Text, SliderTrack, SliderFilledTrack, SliderThumb} from "@chakra-ui/react";

import {ScaleQuestion as IScaleQuestion} from "../../types";

interface Props {
  data: IScaleQuestion;
  children: (answer: IScaleQuestion["answer"]) => React.ReactElement;
}

const ScaleQuestion: React.FC<Props> = ({data, children}) => {
  const [answer, setAnswer] = React.useState<IScaleQuestion["answer"]>(null);

  return (
    <Stack>
      <Text>{data.label}</Text>
      <Slider
        aria-label="slider-ex-1"
        colorScheme="primary"
        defaultValue={0}
        max={9}
        min={0}
        onChangeEnd={(amount) => setAnswer(amount as IScaleQuestion["answer"])}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      {children(answer)}
    </Stack>
  );
};

export default ScaleQuestion;
