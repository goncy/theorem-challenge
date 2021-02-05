import React from "react";

import FeedbackContext from "./context";
import {Question, User} from "./types";

export function useAllFeedback() {
  const {
    state: {feedback},
  } = React.useContext(FeedbackContext);

  return feedback;
}

export function useCompletedFeedback() {
  const {
    state: {feedback},
  } = React.useContext(FeedbackContext);

  return feedback.filter(({questions}) => questions.some((question) => Boolean(question.answer)));
}

export function usePendingFeedback() {
  const {
    state: {feedback},
  } = React.useContext(FeedbackContext);

  return feedback.filter(({questions}) => questions.every((question) => !question.answer));
}

export function useFeedback(user: User["id"]) {
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
