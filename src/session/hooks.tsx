import React from "react";

import SessionContext from "./context";
import {User} from "./types";

export function useSession(): [User, VoidFunction] {
  const {
    state: {user},
    actions: {logout},
  } = React.useContext(SessionContext);

  return [user, logout];
}
