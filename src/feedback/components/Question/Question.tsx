import React from "react";

import {Question, QuestionType} from "../../types";

import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import ScaleQuestion from "./ScaleQuestion";
import TextQuestion from "./TextQuestion";

interface Props {
  data: Question;
  children: (answer: Question["answer"]) => React.ReactElement;
}

const Question: React.FC<Props> = ({data, ...props}) => {
  switch (data.type) {
    case QuestionType.Text: {
      return <TextQuestion data={data} {...props} />;
    }

    case QuestionType.Scale: {
      return <ScaleQuestion data={data} {...props} />;
    }

    case QuestionType.MultipleChoice: {
      return <MultipleChoiceQuestion data={data} {...props} />;
    }

    default: {
      return null;
    }
  }
};

export default Question;
