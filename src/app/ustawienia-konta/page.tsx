"use client";
import { LoginNeeded } from "@/components/LoginNeeded";
import { Navigation } from "@/components/Navigation";
import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";

export default function AccountSettings() {
  const userctx = useContext(UserContext);
  return (
    <>
      <Navigation />
      {userctx?.user.loggedin ? (
        <>
          <div className="max-w-xl mx-auto py-4">
            <p className="text-center">to jest strona ustawień konta</p>
          </div>
        </>
      ) : (
        <LoginNeeded />
      )}
    </>
  );
}
