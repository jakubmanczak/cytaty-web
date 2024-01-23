import { createContext } from "react";

type userContextType = {
  loggedin: boolean;
  token?: string;
};
export type { userContextType };

const defaultUserContext = {
  loggedin: false,
};
export { defaultUserContext };

const UserContext = createContext<{
  user: userContextType;
  setUser: (value: userContextType) => void;
} | null>(null);
export { UserContext };
