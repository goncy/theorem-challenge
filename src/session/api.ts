import {User} from "./types";

const MOCK: User = {
  id: "1",
  firstName: "Theo",
  lastName: "Rem",
  avatar: "https://i.pravatar.cc/200",
};

export default {
  login: (_: string): Promise<User> =>
    new Promise((resolve) => setTimeout(() => resolve(MOCK), 1000)),
};
