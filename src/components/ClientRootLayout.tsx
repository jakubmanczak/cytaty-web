"use client";
import {
  UserContext,
  defaultUserContext,
  userContextType,
} from "@/contexts/UserContext";
import { useState } from "react";

const ClientRootLayout = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<userContextType>(defaultUserContext);
  return (
    <>
      <UserContext.Provider
        value={{
          user: user,
          setUser: (value: userContextType) => {
            setUser(value);
          },
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export { ClientRootLayout };
