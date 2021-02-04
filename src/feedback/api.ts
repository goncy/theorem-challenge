import {Feedback, Question, RawQuestion, User} from "./types";

const USERS_MOCK: User[] = [
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/karolkrakowiak_/128.jpg",
    firstName: "Lauretta",
    id: "485478b7-836f-48b0-ae7e-d02bb5e96278",
    lastName: "Bosco",
  },
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jakemoore/128.jpg",
    firstName: "Lucy",
    id: "ee2a963f-e3c2-4932-bb3d-5b884d7d7cbd",
    lastName: "Hessel",
  },
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bobbytwoshoes/128.jpg",
    firstName: "Brant",
    id: "1701d361-8a5d-4a0e-8717-8c1da0705f91",
    lastName: "Gulgowski",
  },
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/iamkeithmason/128.jpg",
    firstName: "Paolo",
    id: "00dc55c6-753d-4e34-a1a2-4a2737c5e967",
    lastName: "Paucek",
  },
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/andyisonline/128.jpg",
    firstName: "Bridget",
    id: "db817e8e-0516-457b-bba0-50b33c3e05d9",
    lastName: "Gaylord",
  },
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/shvelo96/128.jpg",
    firstName: "Lempi",
    id: "a50dd9cc-9738-43f6-ad56-bb3599912280",
    lastName: "Thompson",
  },
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/spbroma/128.jpg",
    firstName: "Jeffery",
    id: "54039d09-9b0c-4c17-90f9-9d48a93bfe87",
    lastName: "Corkery",
  },
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/saschadroste/128.jpg",
    firstName: "Ashtyn",
    id: "5c786195-f236-4b94-b70c-fb2b0245d316",
    lastName: "Leffler",
  },
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/drewbyreese/128.jpg",
    firstName: "Daron",
    id: "ffaccdc4-0883-4c08-a79e-f95f288a7b1c",
    lastName: "Lowe",
  },
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/charlesrpratt/128.jpg",
    firstName: "Bradford",
    id: "d37c0a85-bef6-44cf-9621-9461a69002c5",
    lastName: "Harber",
  },
];

const QUESTIONS_MOCK: RawQuestion[] = [
  {
    type: "scale",
    required: true,
    label: "How much do you trust this person to deliver high quality work?",
    id: "4fca8e13-e104-4154-a5ff-123ab93a0de6",
  },
  {
    type: "multipleChoice",
    required: true,
    label: "Is this person up to date with the latest accounting regulations?",
    options: [
      {
        value: 1,
        label: "Not fully. You should work on trying to stay more up to date with regulations",
      },
      {value: 2, label: "Yes, you are reasonably up to date with new regulations."},
      {
        value: 3,
        label: "Yes, you are the one I look up to when I need information about new regulations",
      },
    ],
    id: "5ecbdff9-b4f4-4c31-8bbd-d9b48d6eacaf",
  },
  {
    type: "scale",
    required: true,
    label: "How well does this person understand the technical domain of our product?",
    id: "2a64274a-8cd2-4e9a-9772-4081177774f7",
  },
  {
    type: "text",
    required: false,
    label:
      "Have there been any situations where this person could have managed their emotions better? What happened?",
    id: "9c2fa0d8-026e-4749-9094-5a3019885c0a",
  },
  {
    type: "multipleChoice",
    required: true,
    label: "Does this person care about our users and treats customer support as a high priority?",
    options: [
      {value: 1, label: "Not always - you should work on this aspect"},
      {
        value: 2,
        label: "Yes, you go out of our way to help our users and improve their experience",
      },
      {
        value: 3,
        label:
          "Yes, your understanding of our users and the empathy you demonstrate is second to none",
      },
    ],
    id: "bb26bff1-293d-42be-a354-46bf8c7c0fb4",
  },
  {
    type: "text",
    required: true,
    label:
      "What would you like this person to work on the most during the next month, to enable their continued growth?",
    id: "84842b93-7df0-443a-bee4-18abd243d98a",
  },
  {
    type: "multipleChoice",
    required: true,
    label: "How transparent and clear are this person's plans and work tasks?",
    options: [
      {
        value: 1,
        label:
          "I frequently not know what you are working on, please work with me to raise visibility",
      },
      {
        value: 2,
        label:
          "I almost always know what you are working on, but not always the details or next steps, only the outcomes you are after.",
      },
      {
        value: 3,
        label:
          "Your plans are clear and readily available to those around you, and I always know what the next step is.",
      },
    ],
    id: "9b9c9ed0-bfe6-40a4-b5b6-9224b0ecb573",
  },
  {
    type: "scale",
    required: true,
    label: "How well does this person understand our business goals and roadmap?",
    id: "6c78b267-6b66-4b5a-b246-9a1e0e79f9d5",
  },
  {
    type: "text",
    required: false,
    label: "Is there anything else you'd like to share with this person?",
    id: "44a1ae5d-221d-4eb6-874b-5762798b3186",
  },
];

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
  list: (): Promise<Feedback[]> => Promise.resolve(parseFeedback(USERS_MOCK, QUESTIONS_MOCK)),
};
