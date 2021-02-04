import React from "react";

import FeedbackContext from "./context";
import {Question, User} from "./types";

export function useUsers() {
  const {
    state: {feedback},
    actions: {answer},
  } = React.useContext(FeedbackContext);

  return feedback.map((item) => ({
    ...item,
    questions: item.questions.map((question) => ({
      ...question,
      submit: (questionAnswer: Question["answer"]) =>
        answer(item.user.id, question.id, questionAnswer),
    })),
  }));
}

export function useUser(user: User["id"]) {
  const {
    state: {feedback},
    actions: {answer},
  } = React.useContext(FeedbackContext);

  const match = feedback.find((item) => item.user.id === user);

  if (!match) return null;

  return {
    ...match,
    questions: match.questions.map((question) => ({
      ...question,
      submit: (questionAnswer: Question["answer"]) =>
        answer(match.user.id, question.id, questionAnswer),
    })),
  };
}
