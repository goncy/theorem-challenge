import React from "react";
import {Textarea, Stack} from "@chakra-ui/react";

import {TextQuestion as ITextQuestion} from "../../types";

interface Props {
  data: ITextQuestion;
  children: (answer: ITextQuestion["answer"]) => React.ReactElement;
}

const TextQuestion: React.FC<Props> = ({children}) => {
  const [answer, setAnswer] = React.useState<ITextQuestion["answer"]>(null);

  return (
    <Stack>
      <Textarea
        placeholder="Say something"
        rows={10}
        onChange={(event) => setAnswer(event.target.value)}
      />
      {children(answer)}
    </Stack>
  );
};

export default TextQuestion;
