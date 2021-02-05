import React from "react";

import api from "./api";
import LoginScreen from "./screens/Login";
import {User} from "./types";

enum Status {
  Init = "init",
  Pending = "pending",
  Resolved = "resolved",
  Rejected = "rejected",
}

interface Context {
  state: {
    user: User;
  };
  actions: {
    logout: VoidFunction;
  };
}

const SessionContext = React.createContext<Context>({} as Context);

const SessionProvider: React.FC = ({children}) => {
  const [status, setStatus] = React.useState<Status>(Status.Init);
  const [user, setUser] = React.useState<User | null>(null);

  function handleLogin(token: string) {
    setStatus(Status.Pending);

    return api.login(token).then((user) => {
      setUser(user);
      setStatus(Status.Resolved);
    });
  }

  function handleLogout() {
    setStatus(Status.Init);
    setUser(null);
  }

  if (!user) return <LoginScreen isLoading={status === Status.Pending} onLogin={handleLogin} />;

  const state = {user};
  const actions = {logout: handleLogout};

  return <SessionContext.Provider value={{state, actions}}>{children}</SessionContext.Provider>;
};

export {SessionContext as default, SessionProvider as Provider};
