// Questions general
export enum QuestionType {
  Text = "text",
  MultipleChoice = "multipleChoice",
  Scale = "scale",
}

interface BaseQuestion {
  id: string;
  type: QuestionType;
  required: boolean;
  label: string;
}

// Text question
export interface TextQuestion extends BaseQuestion {
  type: QuestionType.Text;
  answer: null | string;
}

// Scale question
export interface ScaleQuestion extends BaseQuestion {
  type: QuestionType.Scale;
  answer: null | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

// Multiple choice question
interface MultipleChoiceOption {
  value: 1 | 2 | 3;
  label: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: QuestionType.MultipleChoice;
  options: MultipleChoiceOption[];
  answer: null | 1 | 2 | 3;
}

// Exports
export interface User {
  avatar: string;
  firstName: string;
  id: string;
  lastName: string;
}

export type Question = TextQuestion | ScaleQuestion | MultipleChoiceQuestion;

export interface RawQuestion extends Omit<BaseQuestion, "type"> {
  type: "text" | "scale" | "multipleChoice";
  options?: MultipleChoiceOption[];
}

export interface Feedback {
  user: User;
  questions: Question[];
}
