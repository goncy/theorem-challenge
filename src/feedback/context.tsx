import React from "react";

import api from "./api";
import ErrorScreen from "./screens/Error";
import LoadingScreen from "./screens/Loading";
import {
  Feedback,
  MultipleChoiceQuestion,
  Question,
  QuestionType,
  ScaleQuestion,
  TextQuestion,
  User,
} from "./types";

enum Status {
  Pending = "pending",
  Resolved = "resolved",
  Rejected = "rejected",
}

interface Context {
  state: {
    feedback: Feedback[];
  };
  actions: {
    answer: (
      userId: User["id"],
      questionId: Question["id"],
      questionAnswer: Question["answer"],
    ) => void;
  };
}

const FeedbackContext = React.createContext<Context>({} as Context);

const FeedbackProvider: React.FC = ({children}) => {
  const [feedback, setFeedback] = React.useState<Feedback[]>([]);
  const [status, setStatus] = React.useState<Status>(Status.Pending);

  function handleAnswer(
    userId: User["id"],
    questionId: Question["id"],
    questionAnswer: Question["answer"],
  ) {
    // Update feedback
    setFeedback((feedback) =>
      feedback.map((item) => {
        // If this is the user we want to update feedback for
        if (item.user.id === userId) {
          return {
            ...item,
            questions: item.questions.map((question) => {
              // And the question we want to answer
              if (question.id === questionId) {
                // Based on the question type
                switch (question.type) {
                  case QuestionType.Text: {
                    return {
                      ...question,
                      // Update the answer
                      answer: questionAnswer,
                    } as TextQuestion;
                  }

                  case QuestionType.Scale: {
                    return {
                      ...question,
                      // Update the answer
                      answer: questionAnswer,
                    } as ScaleQuestion;
                  }

                  case QuestionType.MultipleChoice: {
                    return {
                      ...question,
                      // Update the answer
                      answer: questionAnswer,
                    } as MultipleChoiceQuestion;
                  }
                }
              }

              // Otherwise return the untouched question
              return question;
            }),
          };
        }

        // Otherwise return the original item
        return item;
      }),
    );
  }

  function handleRetry() {
    setStatus(Status.Pending);

    return api
      .list()
      .then((feedback) => {
        setFeedback(feedback);
        setStatus(Status.Resolved);
      })
      .catch(() => setStatus(Status.Rejected));
  }

  React.useEffect(() => {
    api
      .list()
      .then((feedback) => {
        setFeedback(feedback);
        setStatus(Status.Resolved);
      })
      .catch(() => setStatus(Status.Rejected));
  }, []);

  if (status === Status.Pending) return <LoadingScreen />;
  if (status === Status.Rejected) return <ErrorScreen onRetry={handleRetry} />;

  const state = {
    feedback,
  };
  const actions = {
    answer: handleAnswer,
  };

  return <FeedbackContext.Provider value={{state, actions}}>{children}</FeedbackContext.Provider>;
};

export {FeedbackContext as default, FeedbackProvider as Provider};
