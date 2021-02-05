import {StackProps} from "@chakra-ui/react";
import React from "react";

import {Question, QuestionType} from "../../types";

import MultipleChoiceAnswer from "./MultipleChoiceAnswer";
import ScaleAnswer from "./ScaleAnswer";
import TextAnswer from "./TextAnswer";

interface Props extends StackProps {
  data: Question;
}

const Answer: React.FC<Props> = ({data, ...props}) => {
  switch (data.type) {
    case QuestionType.Text: {
      return <TextAnswer data={data} {...props} />;
    }

    case QuestionType.Scale: {
      return <ScaleAnswer data={data} {...props} />;
    }

    case QuestionType.MultipleChoice: {
      return <MultipleChoiceAnswer data={data} {...props} />;
    }

    default: {
      return null;
    }
  }
};

export default Answer;
