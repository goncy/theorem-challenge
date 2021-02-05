import {Feedback, Question, RawQuestion, User} from "./types";

function parseFeedback(users: User[], questions: RawQuestion[]): Feedback[] {
  return users.map((user) => ({
    user,
    questions: questions.map((question) => ({
      ...(question as Question),
      answer: null,
    })),
  }));
}

export default {
  list: (): Promise<Feedback[]> =>
    Promise.all<User[], Question[]>([
      fetch(
        `https://frontend-exercise-api.netlify.app/.netlify/functions/server/users`,
      ).then((res) => res.json()),
      fetch(
        `https://frontend-exercise-api.netlify.app/.netlify/functions/server/questions`,
      ).then((res) => res.json()),
    ]).then(([users, questions]) => parseFeedback(users, questions)),
};
